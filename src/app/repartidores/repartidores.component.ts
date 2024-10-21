import { Component, EventEmitter, Output } from '@angular/core';
import { RepartidoresListadoComponent } from '../componentes/repartidores-listado/repartidores-listado.component';
import { CommonModule } from '@angular/common';
import { RepartidorDetalleComponent } from '../componentes/repartidor-detalle/repartidor-detalle.component';
import { PaisDetalleComponent } from '../componentes/pais-detalle/pais-detalle.component';

@Component({
  selector: 'app-repartidores',
  standalone: true,
  imports: [
    CommonModule,
    RepartidoresListadoComponent,
    RepartidorDetalleComponent,
    PaisDetalleComponent
  ],
  templateUrl: './repartidores.component.html',
  styleUrl: './repartidores.component.scss'
})
export class RepartidoresComponent {
  repartidorSeleccionado!: any;

  @Output() repartidorSeleccionadoParaDetalle: EventEmitter<any> = new EventEmitter<any>();

  alSeleccionarUnRepartidor(repartidor: any): void {
    console.log('repartidor seleccionado: ', repartidor);

    this.repartidorSeleccionado = repartidor;
    this.repartidorSeleccionadoParaDetalle.emit(repartidor);
  }
}
