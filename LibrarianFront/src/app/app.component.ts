import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibrarianFront';

  public load:boolean;

  constructor(){

    this.load=false;
  }

  ngOnInit(){
    
  }
}
