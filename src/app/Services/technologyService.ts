
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ITechnology } from "../models/technology";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })



export class technologyService {

    constructor(private httpClient: HttpClient) {


    }

    getAlltechnologies() {

        return this.httpClient.get<ITechnology[]>(`https://localhost:7040/api/Technology`)
    }

}
