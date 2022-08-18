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


  constructor(private http: HttpClient) {

  }

  getRandomBooks():Observable<Books> {

    return this.http.get<Books>(`${this.API_URL}/random`);
  }


  buscarLibroPorId(id: string): Observable<Item>{

    return this.http.get<Item>(`${this.API_URL}/getById/${ id }`);

  }


  buscarLibroPorIsbn(isbn: string): Observable<Books>{

    return this.http.get<Books>(`${this.API_URL}/searchByIsbn/${ isbn }`);

  }

  searchBookByTitle(title: string): Observable<Books>{

    return this.http.get<Books>(`${this.API_URL}/searchByTitle/${ title }`);

  }

  buscarLibroPorAuthor(author: string): Observable<Books>{

    // Ernest Hemingway
    return this.http.get<Books>(`${this.API_URL}/author/${ author }`);
  }

}
