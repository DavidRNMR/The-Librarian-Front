import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Books, Item, VolumeInfo, Language } from '../interfaces/books';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VolumeInfoBD } from '../interfaces/addbookbd';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
})
export class ViewBookComponent implements OnInit {

  public load: boolean;

  bookVer!: Item;
  bookAdd: VolumeInfoBD = {

    title: '',
    publishedDate: '',
    isbn: '',
    description: '',
    imageLinks: '',
    pageCount: 0,
    language: '',
  };


  constructor(private activatedRoute: ActivatedRoute,
    private BookService: BookService) {
    this.load = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.BookService.buscarLibroPorId(id))
      )
      .subscribe(book => {
        this.bookVer = book;

        this.bookVer.volumeInfo

        console.log(book.volumeInfo);


      });


    setTimeout(() => {
      this.load = true;
    }, 6000);



  }



  addBookDB() {


    this.BookService.addBookBD(this.bookAdd).subscribe((bookDB: any) => {


      console.log(this.bookAdd);
    });







  }

}
