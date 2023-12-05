import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/Services/shared-data.service';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private sharedDataService: SharedDataService,private router: Router){}

  ngOnInit(): void {
   const jwtToken = localStorage.getItem("token");

    if (jwtToken) {
      const decodedToken: any = jwtDecode(jwtToken);

      // Now you can access the claims
     // const emailAddress = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
     // const name = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      const roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    //  const expirationTime = decodedToken.exp;
    const firstRole = roles ? roles[0] : undefined;

    //  console.log('Email Address:', emailAddress);
     // console.log('Name:', name);
      console.log('Roles:', roles);

      if (firstRole == "Admin") {
        console.log("jaaa")
      }
     // console.log('Expiration Time:', expirationTime);
    } else {
      console.error('JWT token not found');
    }

    if (!this.sharedDataService.user) {
      this.sharedDataService.allowedAccess =true

    }

  }
}