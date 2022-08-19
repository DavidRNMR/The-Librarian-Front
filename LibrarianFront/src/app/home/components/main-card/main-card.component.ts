import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../interfaces/books';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {

  @Input() books: Item[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
