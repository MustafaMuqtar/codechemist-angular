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
  ngOnInit(): void {

  }

  loginUser(loginDto: Login) {
    this.authService.login(loginDto).subscribe((jwtDto) => {
     let user = localStorage.setItem("token", jwtDto.token);
    });
  }
}
