import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonServiceService } from 'src/app/Services/lesson-service.service';
import { CourseServiceService } from 'src/app/Services/course-service.service';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { IGetCourse } from 'src/app/models/IHTTPHGet';



@Component({
  selector: 'app-lesson-create',
  templateUrl: './lesson-create.component.html',
  styleUrls: ['./lesson-create.component.css']
})
export class LessonCreateComponent {

  public form!: FormGroup;
  public subjectId: number[] = [];
  public isCreating = false;
  public courseList: IGetCourse[] = [];
  public selectedCourseTitle: string | null = null;
  file: any;
  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      lessonVideo: [null, Validators.required],
    });
    this.getCourseList();

    if (!this.authService.isAdmin()) {
      this.router.navigate(['/']);
    }
  }
  constructor(
    private courseService: CourseServiceService,
    private lessonService: LessonServiceService,
    private router: Router,
    private authService: AuthenticationServiceService,
    private fb: FormBuilder
  ) {}


  submittingForm(): void {
    this.form.markAllAsTouched();
  
    if (this.form.valid) {
      let formData: FormData = new FormData();
      this.subjectId.forEach(value => {
        formData.append('subjectId', value.toString());
      });
  
      formData.append('title', this.form.value.title);
      formData.append('lessonVideo', this.file, this.form.value.lessonVideo);
  
      this.isCreating = true;
  
      this.lessonService.postLesson(formData).subscribe((result) => {
        if (result) {
          this.router.navigate(['']);
        }
      });
    }
  }
  

  onFileSelect(event: any) {
    this.file = event.target.files[0];
  }

  getCourseId(courseId: number, courseTitle: string): void {
    this.subjectId.push(courseId);
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
      }
    );
    


  }

}


