import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CourseServiceService } from 'src/app/Services/course-service.service';
import { IGetCourse } from 'src/app/models/IHTTPHGet';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  courseList: IGetCourse[] = [];

  constructor(private authService: AuthenticationServiceService,private router: Router,private courseService: CourseServiceService){}
  


  get hideButton(): boolean {
    return this.authService.isMember()

  }

  get hideRegister(): boolean {
    return this.authService.isAdmin()

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


  lougout() {
    localStorage.removeItem("token");
    this.router.navigate(['/']).then(() => {
      // Reload the page
      window.location.reload();
    });

  }

  reDirect(e: any){
  
    if (!this.authService.isMember()) {
      this.router.navigate(['/login']);
    } 
       this.courseService.courseIdRediect = e;
    localStorage.setItem('id',this.courseService.courseIdRediect)
    
   
  }
}
