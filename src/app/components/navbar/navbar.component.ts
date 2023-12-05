import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthenticationServiceService,private router: Router){}

  get hideButton(): boolean {
    return this.authService.isMember()

  }

  get hideRegister(): boolean {
    return this.authService.isAdmin()

  }


  lougout() {
    localStorage.removeItem("token");
    this.router.navigate(['/']).then(() => {
      // Reload the page
      window.location.reload();
    });

  }
}
