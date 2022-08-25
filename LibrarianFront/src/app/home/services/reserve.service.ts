import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const HOST = "http://localhost:8080/reserve/updateReserve";

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

  updateReserve(reserva: any, id:number ){
    return this.http.put(`${HOST}/${id}`,reserva);
  }



}
