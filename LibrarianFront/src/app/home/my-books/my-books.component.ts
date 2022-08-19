import { Component, OnInit } from '@angular/core';
import { PdfService } from '../services/pdf.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {


  constructor(public pdfService: PdfService) { }



  ngOnInit(): void {

}
   getPdf(){
     this.pdfService.getPdf().subscribe(data=>{
            console.log(data);

     });
   }
}
