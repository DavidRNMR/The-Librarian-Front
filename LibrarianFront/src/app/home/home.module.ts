import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MainBooksComponent } from './main-books/main-books.component';
import { AnimatedMainComponent } from './animated-main/animated-main.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { RouterModule } from '@angular/router';
import { StripHtmlPipe } from './components/pipeclean.component';
import { SearchIsbnComponent } from './components/search-isbn/search-isbn.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainBooksComponent,
    AnimatedMainComponent,
    StripHtmlPipe,
    ViewBookComponent,
    SearchIsbnComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    MainBooksComponent,
    AnimatedMainComponent,
    ViewBookComponent,
    SearchIsbnComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,



  ]
})
export class HomeModule { }
