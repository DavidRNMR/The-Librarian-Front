import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Books, VolumeInfo, Item } from '../interfaces/books';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-books',
  templateUrl: './main-books.component.html',
  styleUrls: ['./main-books.component.css'],
})

export class MainBooksComponent implements OnInit {


  books: Item[] = [];




  constructor(private bookService: BookService) { }

  ngOnInit(): void {

    this.getBooks();

  }

  getBooks() {
    this.bookService.getRandomBooks().subscribe((data) => {
      this.books = data.items;
    });
  }

}








