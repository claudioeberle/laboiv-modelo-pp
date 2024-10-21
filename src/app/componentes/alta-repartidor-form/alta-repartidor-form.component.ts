import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaisElegidoService } from '../../services/pais-elegido.service';

@Component({
  selector: 'app-alta-repartidor-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './alta-repartidor-form.component.html',
  styleUrl: './alta-repartidor-form.component.scss'
})
export class AltaRepartidorFormComponent {

  public altaForm: FormGroup;
  public paisOrigen:string = '';
  public prompt:string = '';

  constructor(
    private fb: FormBuilder, 
    private firestore:Firestore,
    private router:Router,
    private paisElegidoService:PaisElegidoService
  ) {

    this.altaForm = this.fb.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(65)]],
      capacidad: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      pais: [{ value: this.paisOrigen, disabled: true }, Validators.required],
      unidad: ['', Validators.required],
    });

    this.paisElegidoService.paisElegido$.subscribe((pais: string) => {
      this.altaForm.patchValue({ pais });
    });
    
  }

  async onSubmit(): Promise<void> {
    console.log('SUBMIT');
    if (this.altaForm.valid) {
      const repartidorData = {
        ...this.altaForm.getRawValue(),
        fecha: new Date()
      };

      console.log(repartidorData);

      try {
        const repartidoresCollection = collection(this.firestore, 'repartidores');
        await addDoc(repartidoresCollection, repartidorData);
        this.SetTimeOutPrompt();
        console.log('Repartidor guardado exitosamente!');
      } catch (error) {
        console.error('Error al guardar el repartidor: ', error);
      }
    } else {
      this.altaForm.markAllAsTouched();
      console.log('Datos incorrectos!')
    }
  }

  SetTimeOutPrompt(){
    this.prompt = '¡Repartidor Cargado con Éxito!';
    setTimeout(() => {
      this.prompt = '';
      this.router.navigate(['home']);
    }, 2000);
  }



}
