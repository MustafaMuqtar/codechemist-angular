import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { technologyService } from 'src/app/Services/technologyService';
import { ITechnology } from 'src/app/models/technology';

@Component({
  selector: 'app-technology-list',
  templateUrl: './technology-list.component.html',
  styleUrls: ['./technology-list.component.css']
})
export class TechnologyListComponent implements OnInit{

  technologyList: ITechnology[] = [];

  constructor(private technologyService: technologyService, private router: Router, private http: HttpClient, private activRoute: ActivatedRoute, private fb:FormBuilder) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getTechnologyList() {
    this.technologyService.getAlltechnologies().subscribe((data ) => {
      this.technologyList =data
    })
  }
}
