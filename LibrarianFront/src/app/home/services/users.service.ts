import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const HOST = "http://localhost:8080/auth";

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  postLogin(usuario: any) {return this.http.post(`${HOST}/login`, usuario)}

  logOut(){
    localStorage.removeItem("token");
  }

  isLogged(){
    return localStorage.getItem("token")!=null;
  }

  getCurrentUser(){
    return this.http.get(`${HOST}/getCurrentUser`);
  }

  // login(user: any): Observable<any> {
  //   return this.http.post('https://reqres.in/api/login', user);
  // }

  // register(user: any): Observable<any> {
  //   return this.http.post('https://reqres.in/api/register', user);
  // }
}
