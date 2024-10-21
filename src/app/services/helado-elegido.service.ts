import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeladoElegidoService {

  private heladoElegidoSubject = new BehaviorSubject<string>('');
  public heladoElegido$ = this.heladoElegidoSubject.asObservable();

  constructor() { }

  setHeladoElegido(helado: string) {
    this.heladoElegidoSubject.next(helado);
  }
}