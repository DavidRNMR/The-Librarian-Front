import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment } from 'src/environments/environment';
import { Books, Item } from '../interfaces/books';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private API_URL = environment.urlBooksRandom;

  private apiURLById = environment.urlById;

  private apiURLByIsbn = environment.usrlByIsbn;



  constructor(private http: HttpClient) {

  }

  getRandomBooks():Observable<Books> {

    return this.http.get<Books>(`${this.API_URL}`);
  }


  buscarLibroPorId(id: string): Observable<Item>{

    return this.http.get<Item>(`${this.apiURLById}/${ id }`);

  }


  buscarLibroPorIsbn(isbn: string): Observable<Books>{

    return this.http.get<Books>(`${this.apiURLByIsbn}/${ isbn }`);

  }






}
