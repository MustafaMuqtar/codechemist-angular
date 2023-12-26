import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CourseServiceService } from 'src/app/Services/course-service.service';
import { IGetCourse } from 'src/app/models/IHTTPHGet';
import log from 'video.js/dist/types/utils/log';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{

  courseList: IGetCourse[] = [];
  get hideButton(): boolean {
    return this.authService.isAdmin()
  }
  constructor(private courseService: CourseServiceService,private router: Router,private authService: AuthenticationServiceService) {
  }
  ngOnInit(): void {
   this.getCourseList()
  }

  getCourseList():void {
    this.courseService.getAllCourses().subscribe(
      (data) => {
        this.courseList = data;
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
    


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
