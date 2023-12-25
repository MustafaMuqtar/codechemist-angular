import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { IPostLesson } from "../models/IHTTPHPost";

@Injectable({
  providedIn: 'root'
})
export class LessonServiceService {

  lessonUrl = "Lesson/"

  constructor(private httpClient: HttpClient) {


  }


  postLesson(postLessonData: FormData | IPostLesson) {

    return this.httpClient.post(`${environment.apiURL}/${this.lessonUrl}`, postLessonData)
  }

  deleteLesson(id: number) {

    return this.httpClient.delete(`${environment.apiURL}/${this.lessonUrl}` + id)
  }
}
