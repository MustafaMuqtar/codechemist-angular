
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
//import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })



export class LessonService {

    constructor(private httpClient: HttpClient) {


    }


    postLesson( formData: any) {

        return this.httpClient.post('https://localhost:7040/api/Lesson/', formData)
    }

        deleteLesson( id: number) {

        return this.httpClient.delete('https://localhost:7040/api/Lesson/'+ id)
    }
}
