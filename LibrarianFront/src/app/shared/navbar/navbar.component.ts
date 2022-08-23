import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersService } from '../../home/services/users.service';
import { BookService } from '../../home/services/book.service';
import { Item } from 'src/app/home/interfaces/books';
import { SharedDataService } from '../../home/services/shared-data.service';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  showHiddenOptions: boolean = false;

  books: Item[] = [];
  author!: string;
  isbn!:string;
  title!:string;
  message!: string;
  subscription!: Subscription;


  constructor(
    private usuarios: UsersService,
    private router: Router,
    private sharedText: SharedDataService,
    public translate: TranslateService
  ) {
    // Register translation languages
    translate.addLangs(['es', 'en', 'fr', 'de']);
    // Set default language
    translate.setDefaultLang(translate.getBrowserLang()!);
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
    this.susbscription();

  }

  susbscription(){
    this.subscription = this.sharedText.currentMessage.subscribe(
      (message) => {
        (this.message = message)
      }
    );
  }


  newMessage() {

    this.sharedText.changeMessage(this.isbn);
    this.isbn = '';

  }

  newTitleMessage() {
    this.sharedText.changeMessage(this.title);
    this.title = '';
  }

  newAuthorMessage() {
    this.sharedText.changeMessage(this.author);
    this.author = '';
  }

  logout() {
    Swal.fire({
      title: this.translate.instant('LOGOUT_CONFIRMATION_ALERT_TEXT'),
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translate.instant('LOGOUT_CONFIRMATION_ALERT_YES_BUTTON'),
      cancelButtonText: this.translate.instant('LOGOUT_CONFIRMATION_ALERT_NO_BUTTON')
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(this.translate.instant('LOGOUT_SUCCESSFULL_ALERT_TEXT'), '', 'success');
        this.usuarios.logOut();
        this.showHiddenOptions = false;
        this.router.navigate(['']);
      }
    });
  }

  isLogged() {
    return this.usuarios.isLogged();
  }

  goHomeOrLogin() {
    this.showHiddenOptions = false;
    if (this.isLogged()) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
