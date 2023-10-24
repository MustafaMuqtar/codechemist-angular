
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ITechnology } from "../models/technology";
//import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })



export class technologyService {

    url = 'https://localhost:7040/api/Technology/';
    constructor(private httpClient: HttpClient) {


    }

    getAlltechnologies() {

        return this.httpClient.get<ITechnology[]>(`https://localhost:7040/api/Technology`)
    }

    getTechnologyById(id: any) {

        return this.httpClient.get<ITechnology>('https://localhost:7040/api/Technology/'+id)
    }

    postTechnology( formData: any) {

        return this.httpClient.post('https://localhost:7040/api/Technology/', formData)
    }

}
