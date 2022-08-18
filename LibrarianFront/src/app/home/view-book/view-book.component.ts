import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Books, Item, VolumeInfo } from '../interfaces/books';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VolumeInfoBD } from '../interfaces/addbookbd';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
})
export class ViewBookComponent implements OnInit {

  public load: boolean;

  bookVer!: Item;
  bookAdd!: VolumeInfoBD;

  constructor(private activatedRoute: ActivatedRoute,
               private BookService: BookService) {
                 this.load=false;
                }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.BookService.buscarLibroPorId(id))
      )
      .subscribe(book => {
        this.bookVer = book;
      });
  }

  addBookBD(book: Item) {

    this.bookVer.volumeInfo.description = this.bookAdd.description;
    this.bookVer.volumeInfo.imageLinks.smallThumbnail = this.bookAdd.imageLinks;
    this.bookVer.volumeInfo.isbn = this.bookAdd.isbn;
    this.bookVer.volumeInfo.language.en = this.bookAdd.language;
    this.bookVer.volumeInfo.pageCount = this.bookAdd.pageCount;
    this.bookVer.volumeInfo.publishedDate = this.bookAdd.publishedDate;
    this.bookVer.volumeInfo.title = this.bookAdd.title;

    this.BookService.addBook(this.bookAdd);

  }

      setTimeout(()=>{
        this.load=true;
      }, 6000);
    }

}
