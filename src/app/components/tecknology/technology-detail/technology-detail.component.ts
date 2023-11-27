import { Component, ElementRef, Inject, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseService } from 'src/app/Services/exercise.service';
import { LessonService } from 'src/app/Services/lessonService';
import { SharedDataService } from 'src/app/Services/shared-data.service';
import { SubjectService } from 'src/app/Services/subjectService';
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


  constructor(private technologyService: technologyService, private subjectService: SubjectService,private lessonService: LessonService,
    private exerciseService: ExerciseService, private route: ActivatedRoute, private router: Router,
    private sharedDataService: SharedDataService
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
      console.log(result)
    })
    if (!this.sharedDataService.user) {
      this.router.navigate(['/'])

   }
  }

  deleteSubjectById(id : number) {
    this.subjectService.deleteSubject(id).subscribe((data) => {
      console.log(data)
      if (data == null) {
        this.router.navigate([''])

      }
    }) 

  }

  deleteLessonById(id : number) {
    this.lessonService.deleteLesson(id).subscribe((data) => {
      console.log(data)
      if (data == null) {
        this.router.navigate([''])

      }
    }) 

  }
  deleteExerciseById(id : number) {
    this.exerciseService.deleteExercise(id).subscribe((data) => {
      console.log(data)
      if (data == null) {
        this.router.navigate([''])

      }
    }) 

  }

}

