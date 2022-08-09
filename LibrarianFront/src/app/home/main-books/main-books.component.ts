import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-main-books',
  templateUrl: './main-books.component.html',
  styleUrls: ['./main-books.component.css'],
})
export class MainBooksComponent implements OnInit {
  
  books: any[] = [];

  constructor(private bookService: BookService) {}

  getBooks() {
    this.bookService.getRandomBooks().subscribe((data : any) => {
      this.books = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
