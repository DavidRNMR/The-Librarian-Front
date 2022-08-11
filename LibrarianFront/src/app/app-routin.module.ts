import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { MainBooksComponent } from './home/main-books/main-books.component';
import { ViewBookComponent } from './home/view-book/view-book.component';

const APP_ROUTES: Routes = [

  {path: '', component: MainBooksComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'vista/:id', component: ViewBookComponent},
  {path: '**', redirectTo: ''}

]

@NgModule({
  imports:[
    RouterModule.forRoot( APP_ROUTES )
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{}
