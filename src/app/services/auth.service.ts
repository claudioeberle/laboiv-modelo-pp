import { Injectable } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usersCollection: any;
  emailInput: any;
  router: any;

  constructor(private auth:Auth) { }

  Autenticar(correo:string, contrasena:string){
    signInWithEmailAndPassword(this.auth, correo, contrasena).then((res: any)=>{
      console.log(res);
      this.router.navigate(['/home'])
    })
    .catch((e: { code: string; })=>{
      console.log(e);
    })
  }

  getUser(){
    return this.auth.currentUser;
  }
  
}
