import { Injectable } from '@angular/core';
import { Firestore, docData, doc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Observable, of, switchMap } from 'rxjs';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private firestore: Firestore,
    private authService: AuthService
  ) {}

  getUserProfile(): Observable<user | null> {
    return this.authService.currentUser.pipe(
      switchMap(currentUser => {
        if (!currentUser?.uid) {
          return of(null);
        }

        const userDocRef = doc(this.firestore, `users/${currentUser.uid}`);
        return docData(userDocRef) as Observable<user>;
      })
    );
  }
}
