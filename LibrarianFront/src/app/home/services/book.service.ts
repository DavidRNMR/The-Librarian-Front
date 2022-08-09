import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookService {

   API_URL = environment.urlBooksRandom;

  constructor(private http: HttpClient) {

  }


  getRandomBooks(): any {
    return this.http.get(`${this.API_URL}`);
  }



}
