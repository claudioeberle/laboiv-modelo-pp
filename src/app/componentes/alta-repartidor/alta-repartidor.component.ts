import { Component } from '@angular/core';
import { AltaRepartidorFormComponent } from '../alta-repartidor-form/alta-repartidor-form.component';
import { AltaRepartidorPaisesComponent } from '../alta-repartidor-paises/alta-repartidor-paises.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-repartidor',
  standalone: true,
  imports: [AltaRepartidorFormComponent, AltaRepartidorPaisesComponent],
  templateUrl: './alta-repartidor.component.html',
  styleUrl: './alta-repartidor.component.scss'
})
export class AltaRepartidorComponent {

  constructor(private router:Router) {}

  goHome(){
    this.router.navigateByUrl('home');
  }
}
