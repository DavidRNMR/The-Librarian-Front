import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  private pdfUrl = environment.urlPdf;

  constructor(private http:HttpClient) {}

  getPdf(){

    return this.http.get(`${this.pdfUrl}`)
  }

}
