import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Books, VolumeInfo, Item } from '../interfaces/books';

@Component({
  selector: 'app-main-books',
  templateUrl: './main-books.component.html',
  styleUrls: ['./main-books.component.css'],
})
export class MainBooksComponent implements OnInit {

  books: Item[]=[];


  constructor(private bookService: BookService) { }

  getBooks() {
    this.bookService.getRandomBooks().subscribe((data) => {


      this.books = data.items;


    });

  }


  ngOnInit(): void {
    this.getBooks();
  }
}
