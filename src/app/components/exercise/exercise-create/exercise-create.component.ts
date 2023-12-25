import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CourseServiceService } from 'src/app/Services/course-service.service';
import { ExerciseService } from 'src/app/Services/exercise.service';
import { IGetCourse } from 'src/app/models/IHTTPHGet';

@Component({
  selector: 'app-exercise-create',
  templateUrl: './exercise-create.component.html',
  styleUrls: ['./exercise-create.component.css']
})
export class ExerciseCreateComponent {


  public form!: FormGroup;
  public lessonId: number[] = [];
  public isCreating = false;
  public courseList: IGetCourse[] = [];
  public selectedCourseTitle: string | null = null;
  file: any;
  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      pdf: [null, Validators.required],
    });
    this.getCourseList();

    if (!this.authService.isAdmin()) {
      this.router.navigate(['/']);
    }
  }
  constructor(
    private courseService: CourseServiceService,
    private exerciseService: ExerciseService,
    private router: Router,
    private authService: AuthenticationServiceService,
    private fb: FormBuilder
  ) {}


  submittingForm(): void {
    this.form.markAllAsTouched();
  
    if (this.form.valid) {
      let formData: FormData = new FormData();
      this.lessonId.forEach(value => {
        formData.append('lessonId', value.toString());
      });
  
      formData.append('title', this.form.value.title);
      formData.append('pdf', this.file, this.form.value.pdf);
  
      this.isCreating = true;
  
      this.exerciseService.postExercise(formData).subscribe((result) => {
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
    this.lessonId.push(courseId);
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


