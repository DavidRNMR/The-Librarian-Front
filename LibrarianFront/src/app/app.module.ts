import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { HomeModule } from './home/home.module';

const APP_ROUTES: Route[] = [
  { path: '', component: AppComponent },
  { path: "login", component: LoginComponent, pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
