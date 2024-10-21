import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { RepartidoresService } from '../../services/repartidores.service';

@Component({
  selector: 'app-repartidores-listado',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './repartidores-listado.component.html',
  styleUrl: './repartidores-listado.component.scss'
})
export class RepartidoresListadoComponent implements OnInit{

  repartidores$!: Observable<any[]>;

  @Output() repartidorSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private repartidoresService: RepartidoresService
  ) {}

  ngOnInit(): void {
    this.repartidores$ = this.repartidoresService.getRepartidores();
  }

  seleccionarRepartidor(repartidor: any): void {
    this.repartidorSeleccionado.emit(repartidor);
  }

}
