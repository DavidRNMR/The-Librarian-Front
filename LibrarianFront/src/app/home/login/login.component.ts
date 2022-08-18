import { Component, OnInit } from '@angular/core';
import { FormGroup, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from "../services/users.service";
import { Login } from '../interfaces/registro';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 /* email!: string;
  password!: string;*/
  formGrp!: FormGroup;

  loginValidator: Login ={
    email: '',
    password: ''
  }



  constructor(public userService: UsersService, private router: Router) {

  }

  ngOnInit(): void {

  }

  login(){
    this.userService
      .postLogin({
        "correo": this.loginValidator.email,
        "password": this.loginValidator.password
      })
      .subscribe((datos: any) => {
        localStorage.setItem('token', datos.accessToken);
        this.router.navigate(["/"]);
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

