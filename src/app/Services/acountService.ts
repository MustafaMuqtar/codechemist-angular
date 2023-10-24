
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAcount } from "../models/acount";

//import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })



export class AcountService {

    urlLogin = 'https://localhost:7040/api/Acount/Login/';
    urlRegister = 'https://localhost:7040/api/Acount/Register';
    urlCurrentUser = 'https://localhost:7040/api/Acount/urlCurrentUser';

    constructor(private httpClient: HttpClient) {


    }

    getCurrentUser(acount: string) {

        return this.httpClient.get<IAcount>(this.urlCurrentUser + acount)
    }

    postLogin( acount: string) {

        return this.httpClient.post(this.urlLogin, acount)
    }

    postRegister( acount: string) {

        return this.httpClient.post(this.urlRegister, acount)
    }

}
