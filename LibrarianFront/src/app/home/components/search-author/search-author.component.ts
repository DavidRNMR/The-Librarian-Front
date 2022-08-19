import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Item } from '../../interfaces/books';
import { BookService } from '../../services/book.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-search-author',
  templateUrl: './search-author.component.html',
  styleUrls: ['./search-author.component.css']
})
export class SearchAuthorComponent implements OnInit {

  books: Item[] = [];


  author!:string;
  subscription!: Subscription;


  constructor(private sharedAuthor: SharedDataService, private bookService: BookService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.subscription = this.sharedAuthor.currentMessage.subscribe(message => this.author = message);


    this.activatedRoute.params
    .pipe(
      switchMap( ({ author }) => this.bookService.buscarLibroPorAuthor( author ))
    )
    .subscribe(books => {

      this.books = books.items;
      console.log(this.books);
    });


}
}
