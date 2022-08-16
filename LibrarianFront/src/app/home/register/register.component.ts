import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Registro } from '../interfaces/registro';
import { RegistroService } from '../services/registro.service';

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

  confirmPassword!: string;

  constructor(public registroSer: RegistroService, private router: Router) { }

  ngOnInit(): void {

  }

  crearRegistro(){
    this.registroSer.postUsuario(this.nuevoRegistro).subscribe((datos:any)=>{
      Swal.fire({
        icon: 'success',
        title: 'Usuario Creado',
        text: 'Añadido correctamente!',
      }).then( result => {
        this.router.navigate(["/login"]);
      });
    });
  }

  //Funcion para la validacion de los formularios
  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }
}
