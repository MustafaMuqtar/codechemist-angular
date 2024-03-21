import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { CourseServiceService } from 'src/app/Services/course-service.service';
import { JwtAuth } from 'src/app/models/jwtAuth';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginDto = new Login();
  jwtDto = new JwtAuth();
  emailMessage: string = '';
  passwordMessage: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthenticationServiceService,
    private courseService: CourseServiceService,
    private router: Router,
  ) {}

  get hideButton(): boolean {
    return this.authService.isMember();
  }

  ngOnInit(): void {
    if (this.authService.isMember()) {
      this.router.navigate(['/']);
    }
  }

  loginUser(loginDto: Login) {
    this.emailMessage = '';
    this.passwordMessage = '';
    this.errorMessage = '';

    if (!loginDto.email || !loginDto.password) {
      if (!loginDto.email) {
        this.emailMessage = 'Email is required';
      }

      if (!loginDto.password) {
        this.passwordMessage = 'Password is required';
      }

      return;
    }

    this.authService.login(loginDto).subscribe(
      (jwtDto) => {
        if (jwtDto) {
          localStorage.setItem('token', jwtDto.token);
          console.log('Login API success:', jwtDto.logoutMessages);

          this.showLogoutMessages(jwtDto.logoutMessages);

          const courseId = this.courseService.courseIdRediect;
          if (courseId && !isNaN(courseId)) {
            this.router.navigate(['/course/detail', courseId]).then(() => {
              window.location.reload();
            });
          } else {
            this.router.navigate(['/home']).then(() => {
              window.location.reload();
            });
          }
        }
      },
      (error) => {
        console.error('Login failed:', error);
        this.errorMessage = 'Invalid email or password';
      },
    );
  }

  private showLogoutMessages(logoutMessages: string[]) {

    logoutMessages.forEach((message) => {
      console.log('Logout message for other users:', message);
    });
  
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
  
}