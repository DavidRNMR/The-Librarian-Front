import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../../interfaces/books';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {

  title = 'appBootstrap';

  closeResult!: string;

  @Input() books: Item[]=[];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {

  }

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

}
