import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { ExerciseService } from 'src/app/Services/exercise.service';
import { LessonServiceService } from 'src/app/Services/lesson-service.service';
import { SubjectServiceService } from 'src/app/Services/subject-service.service';
import { CourseServiceService } from 'src/app/Services/course-service.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: any;
  visibleIndex = -1;
  visibleIndex2 = 0;
  isPlaying: boolean = true;

  get hideButton(): boolean {
    return this.authService.isAdmin();
  }

  constructor(
    private courseService: CourseServiceService,
    private subjectService: SubjectServiceService,
    private lessonService: LessonServiceService,
    private exerciseService: ExerciseService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationServiceService
  ) { }

  ngOnInit(): void {
    this.course = this.route.snapshot.paramMap.get('id');

    // Try to retrieve the visible index from local storage
    const storedVisibleIndex = localStorage.getItem('visibleIndex');
    this.visibleIndex = storedVisibleIndex !== null ? parseInt(storedVisibleIndex, 10) : -1;

    // Try to retrieve the visible index 2 from local storage
    const storedVisibleIndex2 = localStorage.getItem('visibleIndex2');
    this.visibleIndex2 = storedVisibleIndex2 !== null ? parseInt(storedVisibleIndex2, 10) : 0;

    this.course && this.courseService.getCourseById(this.course).subscribe((result) => {
      this.course = result;
    });

    if (!this.authService.isMember()) {
      this.router.navigate(['/']);
    }
  }


  deleteSubjectById(id: number) {
    this.subjectService.deleteSubject(id).subscribe((data) => {
      if (data == null) {
        this.router.navigate(['']);
      }
    });
  }

  deleteLessonById(id: number) {
    this.lessonService.deleteLesson(id).subscribe((data) => {
      if (data == null) {
        this.router.navigate(['']);
      }
    });
  }

  deleteExerciseById(id: number) {
    this.exerciseService.deleteExercise(id).subscribe((data) => {
      if (data == null) {
        this.router.navigate(['']);
      }
    });
  }

  showSubItem(ind: number) {
    if (this.visibleIndex === ind) {
      this.visibleIndex = -1;
    } else {
      this.visibleIndex = ind;
    }

    localStorage.setItem('visibleIndex', this.visibleIndex.toString());
  }

  showSubItem2(ind: number) {
    this.visibleIndex2 = ind;
    localStorage.setItem('visibleIndex2', this.visibleIndex2.toString());

  }


}
