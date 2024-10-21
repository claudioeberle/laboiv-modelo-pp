import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { CommonModule } from '@angular/common';
import { PaisElegidoService } from '../../services/pais-elegido.service';

@Component({
  selector: 'app-alta-repartidor-paises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alta-repartidor-paises.component.html',
  styleUrl: './alta-repartidor-paises.component.scss'
})
export class AltaRepartidorPaisesComponent implements OnInit{

  data:any = '';

  constructor(private paisesService:PaisesService, private paisElegidoService:PaisElegidoService) {}   
  
  ngOnInit(){
    this.paisesService.getByRegion('Europe').subscribe(data => {
      this.data = Array.isArray(data) ? data : Object.values(data);
      console.log(this.data);
   
    })
  }

  SeleccionPais(nombre: string) {
    console.log(nombre);
    this.paisElegidoService.setPaisElegido(nombre);
  }
}
