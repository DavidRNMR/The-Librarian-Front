import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from '../../interfaces/books';
import { BookService } from '../../services/book.service';
import { SharedDataService } from '../../services/shared-data.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-search-isbn',
  templateUrl: './search-isbn.component.html',
  styleUrls: ['./search-isbn.component.css'],
})
export class SearchIsbnComponent implements OnInit {


  books: Item[] = [];


  isbn!:string;
  subscription!: Subscription;


  constructor(private sharedIsbn: SharedDataService, private bookService: BookService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.subscription = this.sharedIsbn.currentMessage.subscribe(message => this.isbn = message);



    this.activatedRoute.params
    .pipe(
      switchMap( ({ isbn }) => this.bookService.buscarLibroPorIsbn(isbn))
    )
    .subscribe(books => {
        this.books = books.items;
    });


}



}
