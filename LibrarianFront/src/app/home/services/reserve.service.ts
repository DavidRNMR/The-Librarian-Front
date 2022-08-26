import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// const HOST = "http://localhost:8080/reserve/updateReserve";

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
    return this.http.put(`${this.URLaddReserve}/updateReserve/${id}`,reserva);
  }

  downloadPdf(id:number):Observable<any>{
    // Pendiente para la implementacion
    // hay que usar las siguientes instalaciones
    //  ejemplo https://roytuts.com/download-file-from-server-using-angular/
    // npm install file-saver --save
    // npm install -D @types/file-saver
    return this.http.get(`${this.URLaddReserve}/export/pdf/${id}`)
  }



}
