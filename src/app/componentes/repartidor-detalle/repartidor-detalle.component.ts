import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repartidor-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repartidor-detalle.component.html',
  styleUrl: './repartidor-detalle.component.scss'
})
export class RepartidorDetalleComponent {
  @Input() repartidorSeleccionado!: any;

}
