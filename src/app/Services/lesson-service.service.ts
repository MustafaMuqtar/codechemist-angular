import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LessonServiceService {

  lessonUrl ="Lesson/"

  constructor(private httpClient: HttpClient) {


  }


  postLesson( formData: any) {

    return this.httpClient.post(`${environment.apiURL}/${this.lessonUrl}`, formData)
  }

      deleteLesson( id: number) {

        return this.httpClient.delete(`${environment.apiURL}/${this.lessonUrl}` + id)
      }
}
