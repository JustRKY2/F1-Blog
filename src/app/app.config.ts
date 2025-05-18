import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp } from "firebase/app";
import { routes } from './app.routes';
import { provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideFirebaseApp(() =>
    initializeApp({
      projectId: "f1-blog-38b82",
      appId: "1:934596137690:web:442a7400a3bdfea8574be3",
      storageBucket: "f1-blog-38b82.firebasestorage.app",
      apiKey: "AIzaSyBjlDP9QirSuPrPdT69r8eNpevsIrJaR4Y",
      authDomain: "f1-blog-38b82.firebaseapp.com",
      messagingSenderId: "934596137690"
    })),
  provideAuth(() => getAuth()),
  provideFirestore(() => getFirestore()),
  ]
};