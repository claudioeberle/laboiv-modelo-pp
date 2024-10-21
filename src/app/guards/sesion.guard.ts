import { CanActivateFn } from '@angular/router';
import { SesionService } from '../services/sesion.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';


export const sesionGuard: CanActivateFn = (route, state) => {
  const session = inject(SesionService);
  const router = inject(Router);

  if(!session.isSessionActive()){
    router.navigateByUrl("/");
  }

  return session.isSessionActive();
};