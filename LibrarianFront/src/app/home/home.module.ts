import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MainBooksComponent } from './main-books/main-books.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainBooksComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    MainBooksComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class HomeModule { }
