import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  API_URL = environment.urlBooksRandom;

  API_URL_VIEW_BOOK_TEMPORAL = environment.urlTEMPORALviewBooks;


  constructor(private http: HttpClient) {

  }


  getRandomBooks(): any {

    return this.http.get(`${this.API_URL}`);
  }

  getBook(): any {

    return this.http.get(`${this.API_URL_VIEW_BOOK_TEMPORAL}`)

  }






}
