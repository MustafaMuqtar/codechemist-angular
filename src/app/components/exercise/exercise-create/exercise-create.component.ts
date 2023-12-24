import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
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
  courseList: IGetCourse[] = [];
  subjectId: number[] = []
  subjectName: null = null;
  isCreating: boolean = false

  constructor(private courseService: CourseServiceService, private exerciseService: ExerciseService,
     private router: Router, private activerouter: ActivatedRoute, 
     private fb: FormBuilder, private httpClient: HttpClient,  private authService: AuthenticationServiceService) { }
  ngOnInit(): void {

    if (!this.authService.isAdmin()) {
      this.router.navigate(['/'])

   }
    this.getCourseList()

    this.form = this.fb.group({
      title: [''],
      pDFS: [null],


    })

  }

  file: any;

  createForm = this.fb.group(
    {
      title: '',
      pDFS: File,


    })

 
  getCourseList() {
    this.courseService.getAllCourses().subscribe((data) => {
      this.courseList = data
    })


  }
  handleProfessorClick(): void {

    let formData: any = new FormData();
    this.subjectId.forEach(function (value) {
      formData.append("subjectId", value);
    });

    formData.append('title', this.createForm.value.title);
    formData.append('pdf', this.file);
    this.isCreating = true


    this.exerciseService.postExercise(formData).subscribe((result) => {

      if (result) {
        this.router.navigate(['/technology/detail/1'])
      }

    });


  }


  onFileSelect(event: any) {

    this.file = <File>event.target.files[0]

  }

  getSubjectId(e: number) {
    this.subjectId.push(e);
  }

}
