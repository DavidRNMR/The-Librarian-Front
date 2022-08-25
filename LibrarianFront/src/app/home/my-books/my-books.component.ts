import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { BookService } from '../services/book.service';
import { ReserveService } from '../services/reserve.service';
import { UsersService } from '../services/users.service';
import { Books } from '../interfaces/books';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css'],
})
export class MyBooksComponent implements OnInit {
  idReserva: number = 0;

  userById = {
    id_user: 0,
  };
  book: any[] = [];
  books2: any[] = [];

  nuevaReserva: any = {
    id_usuario: 0,
    id_book: 0,
    is_reservado: false,
  };

  constructor(
    private reserveService: ReserveService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    if (this.usersService.isLogged()) {
      this.obtenerIdUsuario();
    } else {
      return;
    }
  }

  obtenerIdUsuario() {
    this.usersService.getCurrentUser().subscribe({
      next: (datos) => {
        this.userById.id_user = <number>datos;

        this.getReserve(this.userById.id_user);
      },
    });
  }

  getReserve(id: number) {
    this.reserveService.reservedByUser(id).subscribe((data) => {

      if (data.length > 0) {
        this.book = data;
      } else {
         this.book = [];
      }
    });
  }

  updateReserve(reserva: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');

        this.idReserva = reserva.id;
        this.nuevaReserva.id_usuario = reserva.id_usuario;
        this.nuevaReserva.id_book = reserva.id_book;

        this.reserveService
          .updateReserve(this.nuevaReserva, this.idReserva)
          .subscribe((_datos) => {
            // TODO document why this arrow function is empty
            this.getReserve(reserva.id_usuario);
          });

      }
    });
  }
}
