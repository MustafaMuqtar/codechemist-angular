import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { IPostSubject } from "../models/IHTTPHPost";


@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  subjectUrl = "Subject/"

  constructor(private httpClient: HttpClient) {


  }

  postSubject(postSubjectData:FormData| IPostSubject) {

    return this.httpClient.post(`${environment.apiURL}/${this.subjectUrl}`, postSubjectData)
  }

  deleteSubject(id: number) {

    return this.httpClient.delete(`${environment.apiURL}/${this.subjectUrl}` + id)
  }
}
