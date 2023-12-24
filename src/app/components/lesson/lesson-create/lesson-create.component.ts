import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  courseList: IGetCourse[] = [];
  courseId: number[] =[]
  courseName: null= null;
  isCreating: boolean = false

 

  constructor(private lessonService: LessonServiceService, private courseService: CourseServiceService, private router: Router,
     private activerouter: ActivatedRoute, private fb: FormBuilder,
     private authService: AuthenticationServiceService) { }
  ngOnInit(): void {
    this.getCourseList()

    this.form = this.fb.group({
      title: [''],
  

    })

    if (!this.authService.isAdmin()) {
      this.router.navigate(['/'])

   }
  }

  createForm = this.fb.group(
    {
      title: '',

    })

    handleProfessorClick(): void {

      let formData: any = new FormData();
      this.courseId.forEach(function (value) {
        formData.append("technologyId", value);
      });
  
      formData.append('title', this.createForm.value.title);
  
      this.isCreating = true

      this.lessonService.postLesson(formData).subscribe((result) => {
        if (result) {
          this.router.navigate(['/course/detail/1'])
        }
  
      });
  
  
    }

    getCourseId(e: number) {
      this.courseId.push(e);
    }

    getCourseList() {
      this.courseService.getAllCourses().subscribe((data ) => {
        this.courseList =data
      })
  
  
    }


}
