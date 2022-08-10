import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';



@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent {

  constructor(private BookService: BookService) { }


  getBook(){

  }



}
