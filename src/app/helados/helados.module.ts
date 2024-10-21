import { NgModule } from '@angular/core';
import { HeladosRoutingModule } from './helados-routing.module';
import { HeladosComponent } from '../helados/componentes/helados/helados.component';
import { HeladosAltaComponent } from './componentes/helados-alta/helados-alta.component';
import { HeladosModificarComponent } from './componentes/helados-modificar/helados-modificar.component';
import { HeladosBajaComponent } from './componentes/helados-baja/helados-baja.component';
import { HeladosListadosComponent } from './componentes/helados-listados/helados-listados.component';
import { Firestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [],
  imports: [
    HeladosRoutingModule,
  ]
})
export class HeladosModule {}
