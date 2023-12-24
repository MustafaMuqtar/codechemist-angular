import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPostExercise } from '../models/IHTTPHPost';


@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  exerciseUrl = "Exercise/"
  constructor(private httpClient: HttpClient) { }


  postExercise(postExercise: IPostExercise) {

    return this.httpClient.post(`${environment.apiURL}/${this.exerciseUrl}`, postExercise)
  }

  deleteExercise(id: number) {

    return this.httpClient.delete(`${environment.apiURL}/${this.exerciseUrl}` + id)
  }



}
