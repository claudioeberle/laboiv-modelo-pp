import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AltaRepartidorComponent } from './componentes/alta-repartidor/alta-repartidor.component';
import { RepartidoresComponent } from './repartidores/repartidores.component';
import { sesionGuard } from './guards/sesion.guard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'logout', redirectTo: '/home' },
    { path: 'login',component: LoginComponent },
    { path: 'home', component: HomeComponent},
    { path: 'repartidorAlta', component: AltaRepartidorComponent, canActivate: [sesionGuard]},
    {   path: 'helados',
        loadChildren: () => import('./helados/helados.module').then(m => m.HeladosModule), 
        canActivate: [adminGuard]},
    { path: 'repartidores', component: RepartidoresComponent, canActivate: [sesionGuard]}
];
