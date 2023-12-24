import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IGetTechnology, ICreateTechnology } from "../models/ICourseInterface";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  technologyUrl = "Technology/"
  constructor(private httpClient: HttpClient) { }

  getAlltechnologies() {

      return this.httpClient.get<IGetTechnology[]>(`${environment.apiURL}/${this.technologyUrl}`)
  }

  getTechnologyById(id: any) {

      return this.httpClient.get<IGetTechnology>(`${environment.apiURL}/${this.technologyUrl}` + id)
  }

  postTechnology(formData: any) {

      return this.httpClient.post(`${environment.apiURL}/${this.technologyUrl}`, formData)
  }
  deleteTechnology(id: number) {

      return this.httpClient.delete(`${environment.apiURL}/${this.technologyUrl}` + id)
  }

}
