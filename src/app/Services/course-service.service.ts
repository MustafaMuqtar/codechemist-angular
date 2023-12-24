import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { IGetCourse } from "../models/IHTTPHGet";
import { IPostCourse } from "../models/IHTTPHPost";


@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  courseUrl = "Course/"
  constructor(private httpClient: HttpClient) { }

  getAllCourses() {

    return this.httpClient.get<IGetCourse[]>(`${environment.apiURL}/${this.courseUrl}`)
  }

  getCourseById(id: number) {

    return this.httpClient.get<IGetCourse>(`${environment.apiURL}/${this.courseUrl}` + id)
  }

  postCourse(postCourse: IPostCourse) {

    return this.httpClient.post(`${environment.apiURL}/${this.courseUrl}`, postCourse)
  }
  deleteCourse(id: number) {

    return this.httpClient.delete(`${environment.apiURL}/${this.courseUrl}` + id)
  }

}
