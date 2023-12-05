import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  subjectUrl ="Subject/"

  constructor(private httpClient: HttpClient) {


  }

  postSubject( formData: any) {

      return this.httpClient.post(`${environment.apiURL}/${this.subjectUrl}`, formData)
  }

  deleteSubject( id: number) {

      return this.httpClient.delete(`${environment.apiURL}/${this.subjectUrl}` + id)
  }
}
