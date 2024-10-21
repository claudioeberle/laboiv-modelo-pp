import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisElegidoService {

  private paisElegidoSubject = new BehaviorSubject<string>('');
  public paisElegido$ = this.paisElegidoSubject.asObservable();

  constructor() { }

  setPaisElegido(pais: string) {
    this.paisElegidoSubject.next(pais);
  }
}
