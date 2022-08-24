import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Books, Item, VolumeInfo } from '../interfaces/books';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VolumeInfoBD } from '../interfaces/addbookbd';
import { ThisReceiver } from '@angular/compiler';
import { TranslateService } from '@ngx-translate/core';
import { ReserveService } from '../services/reserve.service';
import { AddReserveBD } from '../interfaces/addreservebd';
import { UsersService } from '../services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
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

  reserveAdd: any = {

    id_book: 0,
    id_usuario: 0,
    is_reservado: true,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService,
    private bookService: BookService,
    private reserveService: ReserveService,
    private usersService: UsersService,
    private route: Router
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
      .pipe(switchMap(({ id }) => this.bookService.buscarLibroPorId(id)))
      .subscribe((book) => {
        this.bookVer = book;

        this.bookAdd.title = this.bookVer.volumeInfo.title;
        this.bookAdd.publishedDate = this.bookVer.volumeInfo.publishedDate;
        this.bookAdd.isbn =
          this.bookVer.volumeInfo.industryIdentifiers[0].identifier;
        this.bookAdd.description = this.bookVer.volumeInfo.description.slice(
          0,
          249
        );
        this.bookAdd.imageLinks =
          this.bookVer.volumeInfo.imageLinks.smallThumbnail.slice(0, 249);
        this.bookAdd.pageCount = this.bookVer.volumeInfo.pageCount;
        this.bookAdd.language = this.bookVer.volumeInfo.language;
      });

    if (this.usersService.isLogged()) {
      this.obtenerUsuario();
    } else {
      return;
    }
  }

  addBookDB() {
    if (!this.usersService.isLogged()) {
      Swal.fire({
        title: 'Parece que aun no estas logueado?',
        text: "Para continuar inicia sesión!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Iniciar Sesión!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.route.navigate(['/login']);
        }
      })
    }else{
      this.bookService.addBookBD(this.bookAdd).subscribe({
        next: (datos) => {
          this.getQuery(datos.isbn);
        },
      });
    }
  }

  obtenerUsuario() {
    this.usersService.getCurrentUser().subscribe({
      next: (datos) => {
        this.reserveAdd.id_usuario = <number>datos;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getQuery(isbn: string) {
    this.bookService.buscarLibroPorIsbnBD(isbn).subscribe((books) => {
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
