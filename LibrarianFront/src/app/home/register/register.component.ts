import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
import { Registro } from '../interfaces/registro';
import { RegistroService } from '../services/registro.service';
import { UsersService } from "../services/users.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit{

  nuevoRegistro: Registro ={
    nombre: '',
    correo: '',
    password: ''
  }

  constructor(public registroSer: RegistroService) { }

  ngOnInit(): void {

  }

  crearRegistro(){
    console.log(this.nuevoRegistro);
    this.registroSer.postUsuario(this.nuevoRegistro).subscribe((datos:any)=>{
      Swal.fire({
        icon: 'success',
        title: 'Usuario Creado',
        text: 'Añadido correctamente!',
      })
    });
  }

  //Funcion para la validacion de los formularios
  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }



  // register() {
  //   const user = { email: this.email, password: this.password };
  //   this.userService.register(user).subscribe(data => {
  //     console.log(data);
  //   });
  // }
}
