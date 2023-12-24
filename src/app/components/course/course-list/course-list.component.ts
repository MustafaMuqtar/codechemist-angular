import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CourseServiceService } from 'src/app/Services/course-service.service';
import { IGetTechnology } from 'src/app/models/ICourseInterface';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{

  technologyList: IGetTechnology[] = [];
  hideButton =false;

  constructor(private courseService: CourseServiceService,private router: Router,private authService: AuthenticationServiceService) {
  }
  ngOnInit(): void {
   this.getTechnologyList()
  }

  getTechnologyList() {
    this.courseService.getAlltechnologies().subscribe((data ) => {
      this.technologyList =data
    })


  }

  login() {
    if (!this.authService.isMember()) {
      console.log("hej")
      this.router.navigate(['/login'])
    }
  }
  deleteTechnologyById(id : number) {
    this.courseService.deleteTechnology(id).subscribe((data) => {
      if (data == null) {
      window.location.reload();

      } 
    }) 
  }

  


}
