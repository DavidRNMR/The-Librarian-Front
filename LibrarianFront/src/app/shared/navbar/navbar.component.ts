import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersService } from '../../home/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  showHiddenOptions: boolean = false;

  constructor(private usuarios: UsersService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    Swal.fire({
      title: 'Estas seguro de cerrar sesión?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI!',
      cancelButtonText: 'NO'
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
