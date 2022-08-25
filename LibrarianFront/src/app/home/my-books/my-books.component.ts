import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ReserveService } from '../services/reserve.service';
import { UsersService } from '../services/users.service';
import { Books } from '../interfaces/books';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css'],
})
export class MyBooksComponent implements OnInit {
  userById = {
    id_user: 0,
  };

  book: any[] = [];
  books2: any[] = [];

  public urlIframe!: string;
  showPreviewLink: boolean = false;

  constructor(
    private reserveService: ReserveService,
    private usersService: UsersService,
    private sanitizer: DomSanitizer
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
      this.books2 = data;

      this.books2.forEach((element) => {
        this.book.push(element.book);
        console.log(element.book);
      });
    });
  }

  getembenurl() {

    return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlIframe);
  }



  changeValueOfShowPreviewLink(){

    if( this.showPreviewLink == true){
          this.showPreviewLink = false
    }else{
      this.showPreviewLink = true;
    }

  }
}
