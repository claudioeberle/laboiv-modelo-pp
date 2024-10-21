import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private sessionState = new BehaviorSubject<boolean>(false);
  sessionState$ = this.sessionState.asObservable();
  setSessionState(state: boolean) {
    this.sessionState.next(state);
  }
}
