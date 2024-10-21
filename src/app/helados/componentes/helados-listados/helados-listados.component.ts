import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HeladosService } from '../../../services/helados.service';

@Component({
  selector: 'app-helados-listados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './helados-listados.component.html',
  styleUrl: './helados-listados.component.scss'
})
export class HeladosListadosComponent {

  helados$!: Observable<any[]>;

  @Output() heladoModificar: EventEmitter<any> = new EventEmitter<any>();
  @Output() heladoEliminar: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private heladosService: HeladosService
  ) {}

  ngOnInit(): void {
    this.helados$ = this.heladosService.getHelados();
  }

  modificarHelado(helado: any): void {
    this.heladoModificar.emit(helado);
  }

  eliminarHelado(helado: any): void {
    this.heladoEliminar.emit(helado);
  }

}