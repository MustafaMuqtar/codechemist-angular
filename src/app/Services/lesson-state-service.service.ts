// lesson-state.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LessonStateService {
  public latestLessonId: number | null = null;
  public latestSubjectId: number | null = null;

  setLatestLessonId(id: number) {
    this.latestLessonId = id;
  }

  getLatestLessonId(): number | null {
    return this.latestLessonId;
  }

  setLatestSubjectId(id: number) {
    this.latestSubjectId = id;
  }

  getLatestSubjectId(): number | null {
    return this.latestSubjectId;
  }
}
