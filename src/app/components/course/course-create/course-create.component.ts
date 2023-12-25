import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CourseServiceService } from 'src/app/Services/course-service.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {
  public form!: FormGroup;
  isCreating: boolean = false;
  file: any;

  constructor(
    private courseService: CourseServiceService,
    private router: Router,
    private authService: AuthenticationServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
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
    // Mark all controls as touched to trigger validation messages
    this.form.markAllAsTouched();
  
    if (this.form.valid) {
      let formData: FormData = new FormData();
  
      formData.append('title', this.form.value.title);
      formData.append('image', this.file, this.form.value.image);
      formData.append('description', this.form.value.description);
  
      this.isCreating = true;
  
      this.courseService.postCourse(formData).subscribe((result) => {
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
