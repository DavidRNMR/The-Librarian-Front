import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from '../../interfaces/books';
import { BookService } from '../../services/book.service';
import { SharedDataService } from '../../services/shared-data.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-search-title',
  templateUrl: './search-title.component.html',
  styleUrls: ['./search-title.component.css'],
})
export class SearchTitleComponent implements OnInit {


  books: Item[] = [];


  title!:string;
  subscription!: Subscription;


  constructor(private sharedTitle: SharedDataService, private bookService: BookService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.subscription = this.sharedTitle.currentMessage.subscribe(message => this.title = message);

    this.activatedRoute.params
    .pipe(
      switchMap(({ title }) => this.bookService.searchBookByTitle(title))
    )
    .subscribe(books => {
        this.books = books.items;
    });

}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
