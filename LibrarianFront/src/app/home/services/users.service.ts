import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const HOST = 'http://localhost:8080/auth';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private changePassword = environment.urlChangePassword;

  constructor(private http: HttpClient) {}

  postLogin(usuario: any) {
    return this.http.post(`${HOST}/login`, usuario);
  }

  logOut() {
    localStorage.removeItem('token');
  }

  isLogged() {
    return localStorage.getItem('token') != null;
  }

  getCurrentUser() {
    return this.http.get(`${HOST}/getCurrentUser`);
  }

  putChangePassword(email: string, password: string, newPassword: string): Observable<any> {

    let params = new HttpParams();
    console.log("Segundo console log del servicio"+ email+ password+newPassword)

    params.set('email', email);
    params.set('password', password);
    params.set('newPassword', newPassword);

    console.log("Parametros" + params.getAll)

    return this.http.put(`${this.changePassword}?`,{params});

  }
}
