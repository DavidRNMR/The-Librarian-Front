import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UsersService } from '../services/users.service';
import { ChangePassword } from '../interfaces/registro';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {





  changePasswordDTO: ChangePassword = {
    email: '',
    password: '',
    newPassword: ''
  };


  constructor(public changePassword: UsersService) { }

  ngOnInit(): void {
  }



  changePassworCallService(){

    console.log("Console Log" + this.changePasswordDTO.email+this.changePasswordDTO.password+this.changePasswordDTO.newPassword);

     this.changePassword.putChangePassword(this.changePasswordDTO).subscribe({
      next: (datos: any) => {

        Swal.fire({
          title: 'Custom animation with Animate.css',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      },
      error:(error) => {

        Swal.fire({
          icon: 'error',
          title: 'Oops...algo salio mal',
        });
      }
    })




  }

}
