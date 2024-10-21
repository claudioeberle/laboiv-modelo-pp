import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private sessionState = new BehaviorSubject<boolean>(false);
  public user: any | null = null;
  private adminList: string[] = ['admin@mail.com'];

  sessionState$ = this.sessionState.asObservable();

  setSessionState(state: boolean) {
    this.sessionState.next(state);
  }

  isSessionActive(): boolean {
    return this.user != null;
  }

  closeSession(){
    this.user = null;
  }

  isAdminLevelSession(): boolean {
    return this.user != null && this.adminList.includes(this.user.email);
  }
}
