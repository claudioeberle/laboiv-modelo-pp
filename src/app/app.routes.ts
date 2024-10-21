import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { AltaRepartidorComponent } from './componentes/alta-repartidor/alta-repartidor.component';
import { HeladosComponent } from './componentes/helados/helados.component';
import { RepartidoresComponent } from './repartidores/repartidores.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'login',component: LoginComponent },
    { path: 'home', component: HomeComponent},
    { path: 'logout', component: LogoutComponent },
    { path: 'repartidorAlta', component: AltaRepartidorComponent},
    { path: 'helados', component: HeladosComponent },
    { path: 'repartidores', component: RepartidoresComponent}
];
