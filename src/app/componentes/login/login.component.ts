import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  correo:string = '';
  contrasena:string = '';
  prompt:string = '';

  constructor(private auth:Auth, private router:Router, private sesionService:SesionService){}

  logEmpleado(){
    this.correo = 'empleado@mail.com';
    this.contrasena = '123456';
  }

  logAdmin(){
    this.correo = 'admin@mail.com';
    this.contrasena = '123456';
  }

  IniciarSesion(){
    signInWithEmailAndPassword(this.auth, this.correo, this.contrasena).then((res: any)=>{
      console.log(res);
      console.log('SESION INICIADA: ' + this.correo);
      this.sesionService.setSessionState(true);
      this.router.navigate(['/home'])
    })
    .catch((e: { code: string; })=>{
      console.log(e);
      this.prompt = 'Usuario y/o Contraseña erróneos';
      setTimeout(()=>{
        this.prompt = '';
      }, 1500);
    })
  }

}
