import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Books, VolumeInfo, Item } from '../interfaces/books';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-books',
  templateUrl: './main-books.component.html',
  styleUrls: ['./main-books.component.css'],
})
export class MainBooksComponent implements OnInit {
  books: Item[] = [];
  public load: boolean;
  showModal!: boolean;
  title = 'appBootstrap';
  closeResult!: string;

  constructor(private bookService: BookService, private modalService: NgbModal) {

  constructor(private bookService: BookService) { }

  open(content:any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  show() {
    this.showModal = true; // Show-Hide Modal Check
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }

  getBooks() {
    this.bookService.getRandomBooks().subscribe((data) => {
      this.books = data.items;
    });
  }


}
