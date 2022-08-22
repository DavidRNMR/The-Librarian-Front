import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormGroup, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { Login } from '../interfaces/registro';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  /* email!: string;
  password!: string;*/
  formGrp!: FormGroup;

  loginValidator: Login = {
    email: '',
    password: '',
  };

  constructor(public userService: UsersService, private router: Router, public translate: TranslateService) {
    // Register translation languages
    translate.addLangs(['es', 'en', 'fr', 'de']);
    // Set default language
    translate.setDefaultLang(navigator.language);
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {}

  login() {

    this.userService
      .postLogin({
        correo: this.loginValidator.email,
        password: this.loginValidator.password,
      })
      .subscribe({
        next: (datos: any) => {

          localStorage.setItem('token', datos.accessToken),
          this.router.navigate(['/']);


        },
        error:(error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email o contraseña no validos',
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
  }



  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }

  // login() {
  //   const user = {email: this.email, password: this.password};
  //   this.userService.login(user).subscribe( data => {
  //     console.log(data);
  //   });
  // }
}
