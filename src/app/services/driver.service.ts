import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query, where, orderBy, limit, startAfter, CollectionReference } from '@angular/fire/firestore';
import { Driver } from '../models/driver';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private driversCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.driversCollection = collection(this.firestore, 'Drivers') as CollectionReference;
  }

  // 1. WHERE lekérdezés
  getDriversByCountry(country: string): Observable<Driver[]> {
    const q = query(this.driversCollection, where('country', '==', country));
    return collectionData(q, { idField: 'id' }) as Observable<Driver[]>;
  }

  // 2. ORDER BY lekérdezés
  getDriversOrderedByBirthDate(): Observable<Driver[]> {
    const q = query(this.driversCollection, orderBy('birthDate', 'asc'));
    return collectionData(q, { idField: 'id' }) as Observable<Driver[]>;
  }

  // 3. LIMIT lekérdezés
  getLimitedDrivers(count: number): Observable<Driver[]> {
    const q = query(this.driversCollection, limit(count));
    return collectionData(q, { idField: 'id' }) as Observable<Driver[]>;
  }

  // 4. LAPOZÁS lekérdezés (ehhez az utolsó dokumentum kell)
  getDriversPaged(startAfterDoc: any): Observable<Driver[]> {
    const q = query(this.driversCollection, orderBy('name'), startAfter(startAfterDoc), limit(3));
    return collectionData(q, { idField: 'id' }) as Observable<Driver[]>;
  }
  getAllDrivers(): Observable<Driver[]> {
    const q = query(this.driversCollection);
    return collectionData(q, { idField: 'id' }) as Observable<Driver[]>;
  }
}
