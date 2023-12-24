import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CourseServiceService } from 'src/app/Services/course-service.service';
import { IGetCourse } from 'src/app/models/IHTTPHGet';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{

  courseList: IGetCourse[] = [];
  hideButton =false;

  constructor(private courseService: CourseServiceService,private router: Router,private authService: AuthenticationServiceService) {
  }
  ngOnInit(): void {
   this.getCourseList()
  }

  getCourseList() {
    this.courseService.getAllCourses().subscribe((data ) => {
      this.courseList =data
    })


  }

  login() {
    if (!this.authService.isMember()) {
      this.router.navigate(['/login'])
    }
  }
  deleteCourseById(id : number) {
    this.courseService.deleteCourse(id).subscribe((data) => {
      if (data == null) {
      window.location.reload();

      } 
    }) 
  }

  


}
