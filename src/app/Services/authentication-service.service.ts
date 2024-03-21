import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentUser, Login } from '../models/login';
import { Register } from '../models/register';
import { Observable, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtAuth } from '../models/jwtAuth';
import { jwtDecode } from 'jwt-decode';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class AuthenticationServiceService {
  loginUrl = "Acount/Login/"
  registerUrl = "Acount/Register"
  currentUseUrl = "Acount/currentUser"

  private decodedToken: any | null = null;

  allowedAdminAccess: boolean = false
  allowedMemberAccess: boolean = false

  constructor(private http: HttpClient) { }

  public register(user: Register): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${environment.apiURL}/${this.registerUrl}`, user);
  }
  public login(user: Login): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${environment.apiURL}/${this.loginUrl}`, user)
      .pipe(
        catchError((error: any) => {
          // Handle error, log it, and/or return a user-friendly message
          console.error('Login error:', error);
          return throwError('Login failed. Please try again.');
        })
      );
  }
  


public getCurrentUser() {
  // Get the token from localStorage
  const userToken = localStorage.getItem('token');

  if (!userToken) {
      // Handle the case where the token is not available (e.g., redirect to login)
      // You might want to implement your own logic here based on your application requirements
      return throwError('No token available');
  }

  // Set the Authorization header with the token
  const headers = {
      Authorization: `Bearer ${userToken}`
  };

  // Make the HTTP request to get the current user
  return this.http.get(`${environment.apiURL}/${this.currentUseUrl}`, { headers })

 
}



  isAdmin(): boolean {
    const userToken = localStorage.getItem('token');

    if (userToken) {
      const decodedToken: any = jwtDecode(userToken);
      const roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      return roles && roles.includes('Admin');
    }

    return false;
  }
  isMember(): boolean {

    const userToken = localStorage.getItem('token');

    if (userToken) {
      const decodedToken: any = jwtDecode(userToken);
      const roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      return roles && roles.includes('Member');
    }

    return false;
  }
}






















