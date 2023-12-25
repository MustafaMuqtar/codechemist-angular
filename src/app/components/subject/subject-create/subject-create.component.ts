import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { SubjectServiceService } from 'src/app/Services/subject-service.service';
import { CourseServiceService } from 'src/app/Services/course-service.service';
import { IGetCourse } from 'src/app/models/IHTTPHGet';
import { SideObject } from '@popperjs/core';

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css']
})
export class SubjectCreateComponent implements OnInit {
  public form!: FormGroup;
  public courseId: number[] = [];
  public isCreating = false;
  public courseList: IGetCourse[] = [];
  public selectedCourseTitle: string | null = null;


  constructor(
    private fb: FormBuilder,
    private courseService: CourseServiceService,
    private subjectService: SubjectServiceService,
    private router: Router,
    private authService: AuthenticationServiceService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
    });

    this.getCourseList();

    if (!this.authService.isAdmin()) {
      this.router.navigate(['/']);
    }
  }

  submittingForm(): void {
    if (this.form.invalid) {
      // Mark all controls as touched to trigger validation messages
      this.form.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    this.courseId.forEach(value => {
      formData.append('courseId', value.toString());
    });

    formData.append('title', this.form.value.title);

    this.isCreating = true;

    this.subjectService.postSubject(formData).subscribe(result => {
      if (result) {
        this.router.navigate(['/course/detail/1']);
      }
    });
  }

  getCourseId(courseId: number, courseTitle: string): void {
    this.courseId.push(courseId);
    this.selectedCourseTitle = courseTitle;
  }
  
  
  getCourseList() {
    this.courseService.getAllCourses().subscribe(
      (data) => {
        this.courseList = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching courses:', error);
        // Handle the error, e.g., show a user-friendly message
      }
    );
    


  }

}
