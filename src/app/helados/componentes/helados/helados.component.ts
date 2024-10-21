import { Component, EventEmitter, Output } from '@angular/core';
import { HeladosAltaComponent } from "../helados-alta/helados-alta.component";
import { HeladosModificarComponent } from "../helados-modificar/helados-modificar.component";
import { HeladosBajaComponent } from "../helados-baja/helados-baja.component";
import { HeladosListadosComponent } from "../helados-listados/helados-listados.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-helados',
  standalone: true,
  imports: [
    HeladosAltaComponent, 
    HeladosModificarComponent, 
    HeladosBajaComponent, 
    HeladosListadosComponent
  ],
  templateUrl: './helados.component.html',
  styleUrl: './helados.component.scss'
})
export class HeladosComponent {
  heladoSeleccionadoModificar!: any;
  heladoSeleccionadoEliminar!: any;

  @Output() heladoSeleccionadoParaModificar: EventEmitter<any> = new EventEmitter<any>();
  @Output() heladoSeleccionadoParaEliminar: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router:Router) {}

  SeleccionarHeladoModificar(helado: any) {
    console.log('helado seleccionado Modif: ', helado);

    this.heladoSeleccionadoModificar = helado;
    this.heladoSeleccionadoParaModificar.emit(helado);
  }
  
  SeleccionarHeladoEliminar(helado: any) {
    console.log('helado seleccionado Elim: ', helado);

    this.heladoSeleccionadoEliminar = helado;
    this.heladoSeleccionadoParaEliminar.emit(helado);
  }

  goHome(){
    this.router.navigateByUrl('home');
  }
}
