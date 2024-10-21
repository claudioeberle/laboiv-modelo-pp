import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { deleteDoc, doc, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-helados-baja',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './helados-baja.component.html',
  styleUrl: './helados-baja.component.scss'
})
export class HeladosBajaComponent {
  @Input() heladoSeleccionado: any;
  public prompt: string = '';

  constructor(private firestore: Firestore, private router: Router) {}

  async eliminarHelado(): Promise<void> {
    if (this.heladoSeleccionado && this.heladoSeleccionado.id) {
      try {
        const heladoDoc = doc(this.firestore, `helados/${this.heladoSeleccionado.id}`);
        await deleteDoc(heladoDoc);

        this.prompt = '¡Helado eliminado con éxito!';
        setTimeout(() => {
          this.prompt = '';
          this.heladoSeleccionado = '';
        }, 2000);
      } catch (error) {
        console.error('Error al eliminar el helado: ', error);
      }
    } else {
      console.error('No hay helado seleccionado para eliminar');
    }
  }



}
