import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  private URLaddReserve = environment.urlAddReserve;

  constructor(private http: HttpClient) { }


  addReserve(reserve: any):Observable<any> {
    console.log("-------------------");
    console.log(reserve);

    return this.http.post(`${this.URLaddReserve}`, reserve);

  }
}
