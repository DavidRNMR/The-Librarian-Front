import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { MainBooksComponent } from './home/main-books/main-books.component';
import { ViewBookComponent } from './home/view-book/view-book.component';
import { SearchIsbnComponent } from './home/components/search-isbn/search-isbn.component';
import { SearchTitleComponent } from './home/components/search-title/search-title.component';
import { SearchAuthorComponent } from './home/components/search-author/search-author.component';
import { MyBooksComponent } from './home/my-books/my-books.component';
import { ResetPasswordComponent } from './home/reset-password/reset-password.component';

const APP_ROUTES: Routes = [

  {path: '', component: MainBooksComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: ResetPasswordComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'vista/:id', component: ViewBookComponent},
  {path: 'isbn/:isbn', component: SearchIsbnComponent},
  {path: 'title/:title', component: SearchTitleComponent},
  {path: 'mybooks/:id', component: MyBooksComponent},
  {path: 'author/:author', component: SearchAuthorComponent},
  {path: 'pdf',component:MyBooksComponent},
  {path: '**', redirectTo: ''}

]

@NgModule({
  imports:[
    RouterModule.forRoot( APP_ROUTES,{scrollPositionRestoration: 'enabled'} )
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{}
