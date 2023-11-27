import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonService } from 'src/app/Services/lessonService';
import { technologyService } from 'src/app/Services/technologyService';
import { ITechnology } from 'src/app/models/technology';

@Component({
  selector: 'app-technology-list',
  templateUrl: './technology-list.component.html',
  styleUrls: ['./technology-list.component.css']
})
export class TechnologyListComponent implements OnInit{

  technologyList: ITechnology[] = [];

  constructor(private technologyService: technologyService,private router: Router) {
  }
  ngOnInit(): void {
   this.getTechnologyList()
  }

  getTechnologyList() {
    this.technologyService.getAlltechnologies().subscribe((data ) => {
      this.technologyList =data
    })


  }

  deleteTechnologyById(id : number) {
    this.technologyService.deleteTechnology(id).subscribe((data) => {
      if (data == null) {
        window.location.reload();

      }
    }) 
  }

  


}
