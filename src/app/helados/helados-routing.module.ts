import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeladosComponent } from '../helados/componentes/helados/helados.component';
import { HeladosAltaComponent } from './componentes/helados-alta/helados-alta.component';
import { HeladosModificarComponent } from './componentes/helados-modificar/helados-modificar.component';
import { HeladosBajaComponent } from './componentes/helados-baja/helados-baja.component';
import { HeladosListadosComponent } from './componentes/helados-listados/helados-listados.component';

const routes: Routes = [
  { path: '', component: HeladosComponent },
  { path: 'alta-helado', component: HeladosAltaComponent },
  { path: 'modificar-helado', component: HeladosModificarComponent },
  { path: 'baja-helado', component: HeladosBajaComponent },
  { path: 'listado-helados', component: HeladosListadosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HeladosRoutingModule { }
