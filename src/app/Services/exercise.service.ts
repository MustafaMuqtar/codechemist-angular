import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  exerciseUrl = "Exercise/"
  constructor(private httpClient: HttpClient) {  }


  postExercise( formData: any) {

    return this.httpClient.post(`${environment.apiURL}/${this.exerciseUrl}`, formData)
  }

    deleteExercise( id: number) {

      return this.httpClient.delete(`${environment.apiURL}/${this.exerciseUrl}` + id)
}



}
