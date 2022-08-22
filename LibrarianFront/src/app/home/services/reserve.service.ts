import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { VolumeInfoBD } from '../interfaces/addbookbd';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  private URLaddReserve = environment.urlAddReserve;

  constructor(private http: HttpClient) { }
  

  addReserve(book: VolumeInfoBD):Observable<any> {

    return this.http.post(`${this.URLaddReserve}`, book);

  }
}
