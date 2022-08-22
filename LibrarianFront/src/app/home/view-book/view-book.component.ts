import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Books, Item, VolumeInfo } from '../interfaces/books';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VolumeInfoBD } from '../interfaces/addbookbd';
import { ThisReceiver } from '@angular/compiler';
import { TranslateService } from '@ngx-translate/core';
import { ReserveService } from '../services/reserve.service';
import { AddReserveBD } from '../interfaces/addreservebd';
import { UsersService } from '../services/users.service';

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

    id_book: 1,
    id_usuario: 1,
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
    public translate: TranslateService,
    private bookService: BookService,
    private reserveService: ReserveService,
    private usersService: UsersService
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
        console.log(this.bookVer);

        this.bookAdd.title = this.bookVer.volumeInfo.title;
        this.bookAdd.publishedDate = this.bookVer.volumeInfo.publishedDate;
        this.bookAdd.isbn = this.bookVer.volumeInfo.industryIdentifiers[0].identifier;
        this.bookAdd.description = this.bookVer.volumeInfo.description.slice(0, 249);
        this.bookAdd.imageLinks = this.bookVer.volumeInfo.imageLinks.smallThumbnail.slice(0, 249);
        this.bookAdd.pageCount = this.bookVer.volumeInfo.pageCount;
        this.bookAdd.language = this.bookVer.volumeInfo.language;

        // this.addReserve();

      });

    this.obtenerUsuario();

  }

  addBookDB() {
    this.bookService.addBookBD(this.bookAdd).subscribe({
      next: (datos) => {

        this.getQuery(datos.isbn);

        // this.addReserve(this.reserveAdd);

      }
    });

  }

  obtenerUsuario() {
    this.usersService.getCurrentUser().subscribe({

      next: datos => {
        this.reserveAdd.id_usuario = + datos.toString();
      }
    });
  }

  getQuery(isbn: string) {

    this.bookService.buscarLibroPorIsbnBD(isbn).subscribe(books => {

      this.reserveAdd.id_book = books.id_book;

      this.addReserve(this.reserveAdd);

    });

  }

  addReserve(reserva: any) {
    this.reserveService.addReserve(reserva).subscribe((reserveDB: any) => {
      console.log(reserveDB);

    });

  }



}
