export interface Registro {
  nombre: string,
  correo: string,
  password: string,

}


export interface Login {

  email: string,
  password: string
}


export interface ChangePassword {

  email: string,
  password: string,
  newPassword: string
}
