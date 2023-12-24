import { Component, ElementRef, Inject, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { ExerciseService } from 'src/app/Services/exercise.service';
import { LessonServiceService } from 'src/app/Services/lesson-service.service';
import { SubjectServiceService } from 'src/app/Services/subject-service.service';
import { TechnologyServiceService } from 'src/app/Services/course-service.service';
import { IGetTechnology } from 'src/app/models/ICourseInterface';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  technology: any;

  //
  hideButton = false;

  player!: any;

  qualityLevels: any;


  constructor(private technologyService: TechnologyServiceService, private subjectService: SubjectServiceService, private lessonService: LessonServiceService,
    private exerciseService: ExerciseService, private route: ActivatedRoute, private router: Router,
    private authService: AuthenticationServiceService
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
    this.technology && this.technologyService.getTechnologyById(this.technology).subscribe((result) => {
      this.technology = result;
    })
    if (!this.authService.isMember()) {
      this.router.navigate(['/'])

   }
  }

  deleteSubjectById(id: number) {
    this.subjectService.deleteSubject(id).subscribe((data) => {
      if (data == null) {
        this.router.navigate([''])

      }
    })

  }

  deleteLessonById(id: number) {
    this.lessonService.deleteLesson(id).subscribe((data) => {
      if (data == null) {
        this.router.navigate([''])

      }
    })

  }
  deleteExerciseById(id: number) {
    this.exerciseService.deleteExercise(id).subscribe((data) => {
      if (data == null) {
        this.router.navigate([''])

      }
    })

  }

}

