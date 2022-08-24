import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/books';
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


  constructor(private bookService: BookService,
              private reserveService: ReserveService,
              private usersService: UsersService) { }

  ngOnInit(): void {

    this.obtenerIdUsuario();

  }

    obtenerIdUsuario() {
    this.usersService.getCurrentUser().subscribe({

      next: datos => {
        this.userById.id_user =+ datos.toString();

         this.getReserve(this.userById.id_user);
      }
    });

  }
   getReserve(id:number) {
     this.reserveService.reservedByUser(id).subscribe((data) => {
       console.log(data);

     });
   }


   



  //  getBooksByUserId(id:number){
  //   this.bookService.(id).subscribe((data) => {
  //     console.table(data);

  //   });
  // }








}
