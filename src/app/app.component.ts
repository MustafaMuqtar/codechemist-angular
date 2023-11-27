import { Component } from '@angular/core';
import { SharedDataService } from './Services/shared-data.service';
import { AuthenticationServiceService } from './Services/authentication-service.service';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codechemist';

  get hideButton(): boolean {
    return this.sharedDataService.allowedAccess;
  }


  constructor(private authService: AuthenticationServiceService, private sharedDataService: SharedDataService) {
  }
  ngOnInit(): void {


    




    // Assuming you have a function to get the JWT, replace this with your actual implementation


    this.accesCurrentUSer()
    if (this.sharedDataService.user) {
      this.sharedDataService.allowedAccess = true
    } else if (this.sharedDataService.user) {
      this.sharedDataService.allowedAccess = false

    }
  }

  ngAfterContentInit() {
  
  }

  accesCurrentUSer() {
    this.authService.getCurrentUser(this.sharedDataService.user).subscribe((data) => {
      console.log(data)



    })


  }
}
