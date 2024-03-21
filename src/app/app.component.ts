import { Component } from '@angular/core';
import { AuthenticationServiceService } from './Services/authentication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codechemist';

  get hideButton(): boolean {
    return this.authService.isAdmin();
  }

  constructor(private authService: AuthenticationServiceService) {}

  ngOnInit(): void {
    if (this.authService.isAdmin()) {
      console.log('admin');
    }  if (this.authService.isMember()) {
      console.log('member');
    }

    this.accesCurrentUSer();
  }

  accesCurrentUSer() {
    this.authService.getCurrentUser().subscribe(
      (data) => {
   
      },
      (error) => {
        // Handle errors (e.g., redirect to login)
        console.error('Error getting current user:', error);
      }
    );
  }
}
