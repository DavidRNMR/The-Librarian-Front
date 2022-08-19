import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Books, Item } from '../interfaces/books';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';



@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  public load:boolean;

  bookVer!: Item;

  constructor(private activatedRoute: ActivatedRoute,
               private BookService: BookService) {
                 this.load=false;
                }

  ngOnInit(): void {
      this.activatedRoute.params
        .pipe(
          switchMap( ({ id }) => this.BookService.buscarLibroPorId(id))
        )
        .subscribe(book => {
            this.bookVer = book;
        });

        setTimeout(()=>{
        this.load=true;
      }, 6000);
    }

  }




