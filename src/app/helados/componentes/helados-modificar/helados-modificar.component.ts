import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-helados-modificar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './helados-modificar.component.html',
  styleUrl: './helados-modificar.component.scss'
})
export class HeladosModificarComponent implements OnChanges{

  @Input() heladoSeleccionado: any;
  public modificarForm: FormGroup;
  public prompt: string = '';

  constructor(
    private fb: FormBuilder, 
    private firestore: Firestore,
    private router: Router
  ) {

    this.modificarForm = this.fb.group({
      nombre: [{ value: '', disabled: true }, Validators.required],
      tipo: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.min(0)]],
      peso: ['', [Validators.required, Validators.min(250), Validators.max(1000)]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ANTES Actualizando formulario con helado: ', this.heladoSeleccionado);

    if (changes['heladoSeleccionado'] && this.heladoSeleccionado) {
      console.log('DESPUES Actualizando formulario con helado: ', this.heladoSeleccionado);
      this.modificarForm.patchValue(this.heladoSeleccionado);
    }
  }

  async onSubmit(): Promise<void> {
    if (this.modificarForm.valid) {
      const heladoData = {
        ...this.modificarForm.getRawValue(),
        nombre: this.heladoSeleccionado.nombre,
        fechaModificacion: new Date()
      };

      try {
        const heladoDoc = doc(this.firestore, `helados/${this.heladoSeleccionado.id}`);
        await updateDoc(heladoDoc, heladoData);
        this.modificarForm.reset();
        this.prompt = '¡Helado modificado con éxito!';
        setTimeout(() => {
          this.prompt = '';
        }, 2000);
      } catch (error) {
        console.error('Error al modificar el helado: ', error);
      }
    } else {
      this.modificarForm.markAllAsTouched();
      console.log('Formulario inválido');
    }
  }
}
