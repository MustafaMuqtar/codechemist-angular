import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CourseServiceService } from 'src/app/Services/course-service.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  public form!: FormGroup;
  isCreating: boolean = false;
  file: any;
  course: any;

  constructor(
    private courseService: CourseServiceService,
    private router: Router,
    private authService: AuthenticationServiceService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.course = this.route.snapshot.paramMap.get('id')
    this.course && this.courseService.getCourseById(this.course).subscribe((result) => {
      this.course = result;
    })
    this.form = this.fb.group({
      title: ['', Validators.required],
      image: [null, Validators.required],
      description: ['', Validators.required]
    });

    if (!this.authService.isAdmin()) {
      this.router.navigate(['/']);
    }
  }

  submittingForm(): void {
    this.form.markAllAsTouched();
  
    if (this.form.valid) {
      let formData: FormData = new FormData();
  
      formData.append('title', this.form.value.title);
      formData.append('image', this.file, this.form.value.image);
      formData.append('description', this.form.value.description);
  
      this.isCreating = true;

      // Assuming you have the courseId, replace it with the actual courseId
      const courseId = this.course;

      this.courseService.editCourse(courseId, formData).subscribe((result) => {
        if (result) {
          this.router.navigate(['']);
        }
      });
    }
  }

  onFileSelect(event: any) {
    this.file = event.target.files[0];
  }
}
