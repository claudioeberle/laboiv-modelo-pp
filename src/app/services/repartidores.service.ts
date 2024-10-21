import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class RepartidoresService {

  constructor(private firestore:Firestore) { }

  getRepartidores(){
    let col = collection(this.firestore, 'repartidores');
    return collectionData(col);
  }




}
