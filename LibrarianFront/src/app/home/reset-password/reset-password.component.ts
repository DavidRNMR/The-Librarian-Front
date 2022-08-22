import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

   email!: string;
   password!: string;
   newPassword!: string;



  constructor(public changePassword: UsersService) { }

  ngOnInit(): void {
  }



  changePassworCallService(){

    console.log("Console Log" + this.email+this.password+this.newPassword);
    
     this.changePassword.putChangePassword(this.email, this.password, this.newPassword).subscribe( data => {});
  }

}
