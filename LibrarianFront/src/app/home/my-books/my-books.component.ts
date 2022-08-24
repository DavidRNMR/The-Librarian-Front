import { Component, OnInit } from '@angular/core';
import { Item, ImageLinks, Books } from '../interfaces/books';
import { BookService } from '../services/book.service';
import { ReserveService } from '../services/reserve.service';
import { UsersService } from '../services/users.service';
import { VolumeInfoBD } from '../interfaces/addbookbd';

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


  constructor(private bookService: BookService,
              private reserveService: ReserveService,
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

      // for (let i = 0; i < data.length; i++) {

      //    this.book.push(data[i].book);

      //    }
         this.books2 = data;

         this.books2.forEach(element => {

          this.book.push(element.book);
          console.log(element.book);
         });

     });

   }






















}
