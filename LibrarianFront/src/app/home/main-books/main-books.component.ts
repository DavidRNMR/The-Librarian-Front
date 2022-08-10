import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Books, VolumeInfo, Item } from '../interfaces/books';

@Component({
  selector: 'app-main-books',
  templateUrl: './main-books.component.html',
  styleUrls: ['./main-books.component.css'],
})
export class MainBooksComponent implements OnInit {

  books: any




  constructor(private bookService: BookService) { }

  getBooks() {
    this.bookService.getRandomBooks().subscribe((data: Books) => {

      console.log(data.items[0].volumeInfo.title);

      this.books = data.items;

      console.log(this.books[0])
    });

  }


  ngOnInit(): void {
    this.getBooks();
  }
}
