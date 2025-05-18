// auth.service.ts
import { Injectable, inject } from '@angular/core';
import { 
  Auth, 
  authState, 
  User as FirebaseUser, 
  signInWithEmailAndPassword, 
  signOut, 
  UserCredential, 
  createUserWithEmailAndPassword 
} from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';
import { user as AppUser } from '../models/user'; 

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<FirebaseUser | null>(null);
  public currentUser: Observable<FirebaseUser | null> = this.currentUserSubject.asObservable();

  private authResolvedSubject = new ReplaySubject<boolean>(1);
  public isAuthResolved$: Observable<boolean> = this.authResolvedSubject.asObservable();

  // Az inject használata biztonságos Firebase contexthez
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  constructor() {
    authState(this.auth).subscribe(user => {
      this.currentUserSubject.next(user);
      this.authResolvedSubject.next(true);  
    });
  }

  signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password).then(cred => {
      this.currentUserSubject.next(cred.user);
      return cred;
    });
  }

  signOut(): Promise<void> {
    this.currentUserSubject.next(null);
    return signOut(this.auth).then(() => {
      this.router.navigateByUrl('/home');
    });
  }

  async signUp(email: string, password: string, userData: Partial<AppUser>): Promise<UserCredential> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      await this.createUserData(userCredential.user.uid, {
        ...userData,
        id: userCredential.user.uid,
        email,
      });
      return userCredential;
    } catch (error) {
      console.error('Hiba a regisztráció során:', error);
      throw error;
    }
  }

  private async createUserData(userId: string, userData: Partial<AppUser>): Promise<void> {
    const userRef = doc(this.firestore, 'users', userId); // biztosan injection contextben
    return setDoc(userRef, userData);
  }

  getCurrentUser(): FirebaseUser | null {
    return this.currentUserSubject.value;
  }

  get isLoggedIn(): boolean {
    return this.currentUserSubject.value !== null;
  }
}
