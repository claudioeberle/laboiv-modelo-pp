import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pais-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pais-detalle.component.html',
  styleUrl: './pais-detalle.component.scss'
})
export class PaisDetalleComponent implements OnChanges{

  @Input() pais!: string | undefined;
  countryDetails: any;
  errorMessage: string = '';

  constructor(private paisesService: PaisesService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pais'] && this.pais) {
      this.getPaisDetails(this.pais);
    }
  }

  getPaisDetails(nombre: string) {
    this.paisesService.getPaisporNombre(nombre).subscribe({
      next: (data) => {
        this.countryDetails = data;
      },
      error: (err) => {
        this.errorMessage = 'Error trayendo pais ${nombre}';
        console.error(err);
      }
    });
  }

}
