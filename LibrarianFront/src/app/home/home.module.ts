import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MainBooksComponent } from './main-books/main-books.component';
import { AnimatedMainComponent } from './animated-main/animated-main.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { RouterModule } from '@angular/router';
import { StripHtmlPipe } from './components/pipeclean.component';
import { SearchIsbnComponent } from './components/search-isbn/search-isbn.component';
import { SearchTitleComponent } from './components/search-title/search-title.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainBooksComponent,
    AnimatedMainComponent,
    StripHtmlPipe,
    ViewBookComponent,
    SearchIsbnComponent,
    SearchTitleComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    MainBooksComponent,
    AnimatedMainComponent,
    ViewBookComponent,
    SearchIsbnComponent,
    SearchTitleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule



  ]
})
export class HomeModule { }
