import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

const APP_ROUTES: Route[] = [
  { path: '', component: AppComponent },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  {path: "register", component: RegisterComponent, pathMatch: "full"}
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
    SharedModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
