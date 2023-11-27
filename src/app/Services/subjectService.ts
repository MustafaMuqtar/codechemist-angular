
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ITechnology } from "../models/technology";
//import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })



export class SubjectService {

    technologyList: ITechnology[] = [];

    constructor(private httpClient: HttpClient) {


    }

    

    getAlltechnologies() {

        return this.httpClient.get<ITechnology[]>(`https://localhost:7040/api/Technology`)
    }

 

    postSubject( formData: any) {

        return this.httpClient.post('https://localhost:7040/api/Subject/', formData)
    }

    deleteSubject( id: number) {

        return this.httpClient.delete('https://localhost:7040/api/Subject/'+ id)
    }
}
