import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, Books } from '../interfaces/books';
import { BookService } from '../services/book.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

  addBook!: Item;

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {

    // this.activatedRoute.params
    // .pipe(
    //   switchMap( ({ id }) => this.bookService.buscarLibroPorId(id))
    // )
    // .subscribe(book => {
    //     this.addBook = book;
    // });

  }


  


}
