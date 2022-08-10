import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Books, Item } from '../interfaces/books';



@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  book: Item[] = [];

  books:any;

  constructor(private BookService: BookService ) { }

  ngOnInit(): void {

  // this.getBook();

  this.books = history.state;

  }







  // getBook() {

  //   this.BookService.getBook().subscribe((data: Books) => {

  //     this.books = data.items;

  //   });
  // }



}
