import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class HeladosService {

  constructor(private firestore:Firestore) { }

  getHelados(){
    let col = collection(this.firestore, 'helados');
    return collectionData(col, { idField: 'id' });
  }

}
