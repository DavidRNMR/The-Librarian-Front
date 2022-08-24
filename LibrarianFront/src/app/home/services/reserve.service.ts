import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  private URLaddReserve = environment.urlAddReserve;
  private urlReserved = environment.urlReservedByUser;
  private urlAllReserves = environment.urlAllReservesByUser;

  constructor(private http: HttpClient) { }


  addReserve(reserve: any):Observable<any> {

    return this.http.post(`${this.URLaddReserve}`, reserve);

  }

  reservedByUser(id:number):Observable<any>{

    return this.http.get(`${this.urlReserved}/${id}`);

  }
  allReservesByUser(id:number):Observable<any>{

    return this.http.get(`${this.urlAllReserves}/${id}`);

  }



}
