import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  user = localStorage.getItem("token");
// public userRemoved =  localStorage.removeItem("token");


 public allowedAccess: boolean = false

  constructor() { }
}
