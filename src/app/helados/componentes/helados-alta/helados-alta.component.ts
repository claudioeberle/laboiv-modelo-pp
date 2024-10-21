import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { HeladoElegidoService } from '../../../services/helado-elegido.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-helados-alta',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './helados-alta.component.html',
  styleUrl: './helados-alta.component.scss'
})

export class HeladosAltaComponent {
  public altaForm: FormGroup;
  public prompt:string = '';

  constructor(
    private fb: FormBuilder, 
    private firestore:Firestore,
    private router:Router,
    private heladoElegidoService:HeladoElegidoService
  ) {

    this.altaForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.min(0)]],
      peso: ['', [Validators.required, Validators.min(250), Validators.max(1000)]]
    });

    this.heladoElegidoService.heladoElegido$.subscribe((helado: string) => {
      this.altaForm.patchValue({ helado });
    });
    
  }

  async onSubmit(): Promise<void> {
    console.log('SUBMIT');
    if (this.altaForm.valid) {
      const heladoData = {
        ...this.altaForm.getRawValue(),
        fecha: new Date()
      };

      console.log(heladoData);

      try {
        const heladosCollection = collection(this.firestore, 'helados');
        await addDoc(heladosCollection, heladoData);
        this.altaForm.reset();
        this.SetTimeOutPrompt();
        console.log('Helado guardado exitosamente!');
      } catch (error) {
        console.error('Error al guardar el helado: ', error);
      }
    } else {
      this.altaForm.markAllAsTouched();
      console.log('Datos incorrectos!')
    }
  }

  SetTimeOutPrompt(){
    this.prompt = '¡Helado Cargado con Éxito!';
    setTimeout(() => {
      this.prompt = '';
    }, 2000);
  }
}
