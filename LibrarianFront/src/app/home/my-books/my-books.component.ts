import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { ReserveService } from '../services/reserve.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

userById={
  id_user:0
}
 book: any[]= [];
 books2: any[] = [];


  constructor(private reserveService: ReserveService,
              private usersService: UsersService) { }

  ngOnInit(): void {

    this.obtenerIdUsuario();

  }

    obtenerIdUsuario() {
    this.usersService.getCurrentUser().subscribe({

      next: datos => {
        this.userById.id_user = <number> datos;

         this.getReserve(this.userById.id_user);
      }
    });

  }
   getReserve(id:number) {
     this.reserveService.reservedByUser(id).subscribe((data) => {

         this.books2 = data;

         this.books2.forEach(element => {

          this.book.push(element.book);
          console.log(element.book);
         });

     });

   }






















}
