import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Books, Item, VolumeInfo, Language } from '../interfaces/books';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VolumeInfoBD } from '../interfaces/addbookbd';
import { ThisReceiver } from '@angular/compiler';
import { TranslateService } from '@ngx-translate/core';
import { ReserveService } from '../services/reserve.service';
import { AddReserveBD } from '../interfaces/addreservebd';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

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
  reserveAdd: AddReserveBD = {

    id_usuario: 0,
    id_book: '',
    is_reservado: true,
  }

  reserveAdd: VolumeInfoBD = {

    title: '',
    publishedDate: '',
    isbn: '',
    description: '',
    imageLinks: '',
    pageCount: 0,
    language: '',
  };


  constructor(
    private activatedRoute: ActivatedRoute,
    private BookService: BookService,
    public translate: TranslateService,
private bookService: BookService, private reserveService: ReserveService
  ) {
    // Register translation languages
    translate.addLangs(['es', 'en', 'fr']);
    // Set default language
    translate.setDefaultLang(translate.getBrowserLang()!);
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.bookService.buscarLibroPorId(id))
      )
      .subscribe(book => {
        this.bookVer = book;
        console.log( this.bookVer );

        this.bookAdd.title = this.bookVer.volumeInfo.title;
        this.bookAdd.publishedDate = this.bookVer.volumeInfo.publishedDate;
        this.bookAdd.isbn = this.bookVer.volumeInfo.industryIdentifiers[0].identifier;
        this.bookAdd.description = this.bookVer.volumeInfo.description.slice(0, 249);
        this.bookAdd.imageLinks = this.bookVer.volumeInfo.imageLinks.smallThumbnail.slice(0, 249);
        this.bookAdd.pageCount = this.bookVer.volumeInfo.pageCount;
        this.bookAdd.language = this.bookVer.volumeInfo.language;

        this.reserveAdd.id_book = this.bookVer.id;



      });


    setTimeout(() => {
      this.load = true;
    }, 6000);

  }


  addBookDB() {
    this.bookService.addBookBD(this.bookAdd).subscribe((bookDB: any) => {
      console.log(this.bookAdd);
    });

    this.addReserve();
  }

  addReserve() {
   this.reserveService.addReserve(this.reserveAdd).subscribe((reserveDB:any) => {
    console.log(this.reserveAdd);
   });
  }

}
