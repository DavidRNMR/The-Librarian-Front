import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from "../services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;
  formGrp!: FormGroup;

  constructor(public userService: UsersService, private router: Router, formBuilder: FormBuilder) {
    this.formGrp = formBuilder.group({
      emailctrl: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {

  }

  login(){
    this.userService
      .postLogin({
        "correo": this.email,
        "password": this.password
      })
      .subscribe((datos: any) => {
        localStorage.setItem('token', datos.accessToken);
        this.router.navigate(["/"]);
      });
  }

  get emailid(){
    return this.formGrp.controls;
  }

  doSubmit() {
    console.log(this.formGrp.value);
  }



  // login() {
  //   const user = {email: this.email, password: this.password};
  //   this.userService.login(user).subscribe( data => {
  //     console.log(data);
  //   });
  // }

}

