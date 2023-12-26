import { Component } from '@angular/core';
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
    return this.authService.isAdmin()
  }


  constructor(private authService: AuthenticationServiceService) {
  }
  ngOnInit(): void {



  if (this.authService.isAdmin()) {
  }
  else if (this.authService.isMember()) {
  }
  }


  ngAfterOnInit() : void{
    this.accesCurrentUSer()

  }


  accesCurrentUSer() {
    this.authService.getCurrentUser(this.authService.userToken).subscribe((data) => {



    })


  }
}
