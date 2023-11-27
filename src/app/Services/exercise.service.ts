import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private httpClient: HttpClient) {  }


  postLesson( formData: any) {

    return this.httpClient.post('https://localhost:7040/api/Exercise/', formData)
}

    deleteExercise( id: number) {

    return this.httpClient.delete('https://localhost:7040/api/Exercise/'+ id)
}



}
