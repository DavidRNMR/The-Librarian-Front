import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Books, Item } from '../interfaces/books';



@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  constructor(private BookService: BookService ) { }


  book: Item[] = [];


  getBook() {

    this.BookService.getBook().subscribe((data: Books) => {

      this.book = data.items;

    });
  }

  ngOnInit(): void {
    this.getBook();
  }


}
