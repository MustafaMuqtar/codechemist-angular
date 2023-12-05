import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { JwtAuth } from 'src/app/models/jwtAuth';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDto = new Login();
  jwtDto = new JwtAuth();

  constructor(private authService: AuthenticationServiceService, private router: Router) { }
   get hideButton(): boolean {
    return this.authService.isMember()

  }
  ngOnInit(): void {
    if (this.authService.userToken) {
      this.router.navigate(['/'])
   }

  }


  loginUser(loginDto: Login) {
    this.authService.login(loginDto).subscribe((jwtDto) => {


      if (jwtDto) {
        console.log("dfd")
        localStorage.setItem("token", jwtDto.token);


        this.router.navigate(['/']).then(() => {
          // Reload the page
          window.location.reload();
        });
      }
    });
  }


}
