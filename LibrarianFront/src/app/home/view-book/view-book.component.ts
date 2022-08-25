import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';
import { VolumeInfoBD } from '../interfaces/addbookbd';
import { Item } from '../interfaces/books';
import { BookService } from '../services/book.service';
import { ReserveService } from '../services/reserve.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
})
export class ViewBookComponent implements OnInit {
  idUsuario: number = 0;
  librosDelUsuario!: number;

  bookVer!: Item;
  bookAdd: VolumeInfoBD = {
    title: '',
    publishedDate: '',
    isbn: '',
    description: '',
    imageLinks: '',
    pageCount: 0,
    language: '',
    previewLink: '',
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
        this.bookAdd.previewLink = this.bookVer.volumeInfo.previewLink;
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
    } else if (this.librosDelUsuario >= 3) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Disculpa pero ya has alcanzado el maximo de reservas!'
      })
    }else{
      Swal.fire({
        title: 'Estas seguro de reservar este libro?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, reservalo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Reservado!',
            'Tu libro ha sido reservado correctamente.',
            'success'
          );
          this.bookService.addBookBD(this.bookAdd).subscribe({
            next: (datos) => {
              this.getQuery(datos.isbn);
            },
          });
        }
      })



    }
  }

  obtenerUsuario() {
    this.usersService.getCurrentUser().subscribe({
      next: (datos) => {
        this.idUsuario = <number>datos;

        this.reserveAdd.id_usuario = this.idUsuario;

        this.getReserve();
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
    this.reserveService.addReserve(reserva).subscribe((_reserveDB: any) => {
      // TODO document why this arrow function is empty
    });
  }


  getReserve() {
    this.reserveService.reservedByUser(this.idUsuario).subscribe((data) => {
        this.librosDelUsuario = data.length;


    });
  }





}

