import { Component, ElementRef, Inject, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { technologyService } from 'src/app/Services/technologyService';
import { ITechnologyDetails } from 'src/app/models/technology';


@Component({
  selector: 'app-technology-detail',
  templateUrl: './technology-detail.component.html',
  styleUrls: ['./technology-detail.component.css']
})
export class TechnologyDetailComponent implements OnInit {

  technology: any;

  //


  player!: any;

  qualityLevels: any;


  constructor(private technologyService: technologyService, private route: ActivatedRoute
  ) { }

  

  visibleIndex = -1;

  showSubItem(ind: number) {
    if (this.visibleIndex === ind) {
      this.visibleIndex = ind;
    } else {
      this.visibleIndex = ind;
    }
  }

  visibleIndex2 = 0;
  showSubItem2(ind: number) {
    if (this.visibleIndex2 === ind) {
      this.visibleIndex2 = ind;
    } else {
      this.visibleIndex2 = ind;
    }
  }


  ngOnInit(): void {
    this.technology = this.route.snapshot.paramMap.get('id')
    this.technology && this.technologyService.getTechnologyById(  this.technology).subscribe((result) => {
      this.technology = result;
    })
  }

}

