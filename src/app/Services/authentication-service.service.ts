import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentUser, Login } from '../models/login';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtAuth } from '../models/jwtAuth';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})


export class AuthenticationServiceService {
  loginUrl = "Acount/Login/"
  registerUrl = "Acount/Register"
  currentUseUrl = "Acount/currentUser"
  userToken = localStorage.getItem("token");

  private decodedToken: any | null = null;

  allowedAdminAccess: boolean = false
  allowedMemberAccess: boolean = false

  constructor(private http: HttpClient) { }

  public register(user: Register): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${environment.apiURL}/${this.registerUrl}`, user);
  }
  public login(user: Login): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${environment.apiURL}/${this.loginUrl}`, user);
  }

  public getCurrentUser(user: any) {

    localStorage.getItem(user);

    return this.http.get(`${environment.apiURL}/${this.currentUseUrl}`,
      {
        headers: {
          Authorization: "Bearer " + user,
          "x-access-token": user,
        },
      }

    )

  }

  isAdmin(): boolean {

    if (this.userToken) {
      const decodedToken: any = jwtDecode(this.userToken);
      const roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      return roles && roles.includes('Admin');
    }

    return false;
  }
  isMember(): boolean {

    if (this.userToken) {
      const decodedToken: any = jwtDecode(this.userToken);
      const roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      return roles && roles.includes('Member');
    }

    return false;
  }
}






















