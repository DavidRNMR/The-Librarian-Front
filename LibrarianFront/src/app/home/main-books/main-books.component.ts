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
  public load:boolean;

  constructor(private bookService: BookService) {

    this.load=false;
   }

  getBooks() {

    this.bookService.getRandomBooks().subscribe((data) => {


      this.books = data.items;


    });

  }


  ngOnInit(): void {
    this.getBooks();
    setTimeout(()=>{
      this.load=true;
    }, 1000);
  }
}
