import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/Services/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private sharedDataService: SharedDataService,private router: Router){}

  get hideButton(): boolean {
    return this.sharedDataService.allowedAccess;
  }


  lougout() {
    localStorage.removeItem("token");
    this.router.navigate(['login'])


  }
}
