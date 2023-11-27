
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAcount } from "../models/acount";

//import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })



export class AcountService {

    urlLogin = 'https://localhost:7040/api/Acount/Login/';
    urlRegister = 'https://localhost:7040/api/Acount/Register';
    urlCurrentUser = 'https://localhost:7040/api/Acount/currentUser';

    constructor(private httpClient: HttpClient) {


    }



    getCurrentUser(token: any) {

        localStorage.getItem(token);

        return this.httpClient.get(this.urlCurrentUser,
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "x-access-token": token,
                },
            }

        )
    }



    postRegister(acount: string) {

        return this.httpClient.post(this.urlRegister, acount)
    }

}
