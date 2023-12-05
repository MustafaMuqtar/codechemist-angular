import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';

@Component({
  selector: 'app-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.css']
})
export class LessonEditComponent {


  constructor(private authService: AuthenticationServiceService,private router: Router){}

  ngOnInit(): void {


    if (!this.authService.isAdmin) {
      this.router.navigate(['/'])

   }

  }
}
