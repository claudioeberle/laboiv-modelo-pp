import { CanActivateFn } from '@angular/router';
import { SesionService } from '../services/sesion.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const session = inject(SesionService);
  const router = inject(Router);

  if(!session.isAdminLevelSession()){
    router.navigateByUrl("/");
  }

  return session.isAdminLevelSession();
};