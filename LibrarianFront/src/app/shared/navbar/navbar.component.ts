import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersService } from '../../home/services/users.service';
import { BookService } from '../../home/services/book.service';
import { Item } from 'src/app/home/interfaces/books';
import { SharedDataService } from '../../home/services/shared-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  showHiddenOptions: boolean = false;

  books: Item[] = [];

  isbn!:string;
  title!:string;
  message!: string;
  subscription!: Subscription;

  constructor(
    private usuarios: UsersService,
    private router: Router,
    private sharedIsbn: SharedDataService,
    private sharedTitle: SharedDataService
  ) {}

  ngOnInit(): void {
    this.subscription = this.sharedIsbn.currentMessage.subscribe(
      (message) => (this.message = message)
    );

    this.subscription = this.sharedTitle.currentMessage.subscribe(
      (message) => (this.message = message)
    );
    console.log(this.message);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage() {

    this.sharedIsbn.changeMessage(this.isbn);
  }

  newTitleMessage() {
    console.log(this.message);
    this.sharedIsbn.changeMessage(this.title);
  }

  logout() {
    Swal.fire({
      title: 'Estas seguro de cerrar sesión?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI!',
      cancelButtonText: 'NO',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Sesión Cerrada', 'Cerrada', 'success');
        this.usuarios.logOut();
        this.showHiddenOptions = false;
        this.router.navigate(['']);
      }
    });
  }

  isLogged() {
    return this.usuarios.isLogged();
  }

  goHomeOrLogin() {
    this.showHiddenOptions = false;
    if (this.isLogged()) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
