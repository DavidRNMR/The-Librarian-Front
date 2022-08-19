import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../interfaces/books';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {

  public load:boolean;

  @Input() books: Item[]=[];

  constructor() {

    this.load=false;
   }

  ngOnInit(): void {

    setTimeout(()=>{
      this.load=true;
    }, 750);
  }

}
