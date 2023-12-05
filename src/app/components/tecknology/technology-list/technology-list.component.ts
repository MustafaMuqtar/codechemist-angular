import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechnologyServiceService } from 'src/app/Services/technology-service.service';
import { IGetTechnology } from 'src/app/models/ICourseInterface';

@Component({
  selector: 'app-technology-list',
  templateUrl: './technology-list.component.html',
  styleUrls: ['./technology-list.component.css']
})
export class TechnologyListComponent implements OnInit{

  technologyList: IGetTechnology[] = [];
  hideButton =false;

  constructor(private technologyService: TechnologyServiceService,private router: Router) {
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
