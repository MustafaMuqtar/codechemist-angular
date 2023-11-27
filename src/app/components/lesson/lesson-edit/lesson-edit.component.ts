import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.css']
})
export class LessonEditComponent {


  constructor(private sharedDataService: SharedDataService,private router: Router){}

  ngOnInit(): void {


    if (!this.sharedDataService.user) {
       this.router.navigate(['/'])

    }

  }
}
