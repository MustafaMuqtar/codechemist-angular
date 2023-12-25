import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDto = new Login();
  jwtDto: any; // Update the type based on your JwtAuth model

  constructor(private authService: AuthenticationServiceService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.userToken) {
      this.router.navigate(['/']);
    }
  }

  loginUser(loginDto: Login) {
    if (!loginDto.email || !loginDto.password) {
      // If email or password is empty, do not proceed and show error messages
      console.error("Email and Password are required");
      return;
    }

    this.authService.login(loginDto).subscribe(
      (jwtDto) => {
        if (jwtDto) {
          console.log("Login successful");
          localStorage.setItem("token", jwtDto.token);
          this.router.navigate(['/']).then(() => {
            // Reload the page
            window.location.reload();
          });
        }
      },
      (error) => {
        // Handle login error (e.g., wrong password or email)
        console.error("Login failed:", error);
        // Display appropriate error message to the user
        // You can use a service to show a global error message or update a variable to show it in the template
      }
    );
  }
}
