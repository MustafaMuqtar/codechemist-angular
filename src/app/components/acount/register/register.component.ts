import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from 'src/app/models/register';
import { JwtAuth } from 'src/app/models/jwtAuth';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerDto = new Register();
  jwtDto = new JwtAuth();

  constructor(private authService: AuthenticationServiceService, private router: Router) { }
  ngOnInit(): void {

    if (!this.authService.isAdmin()) {
      this.router.navigate(['/'])

   }
  }

  registerUser(registerDto: Register): void {
    this.authService.register(registerDto).subscribe((jwtDto) => {
      if (jwtDto) {
        console.log(jwtDto)
      this.router.navigate(['/'])
 
      }
     });
   }
 }