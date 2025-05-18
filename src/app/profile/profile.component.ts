import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Subscription } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { user } from '../models/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: user | null = null;
  isLoading = true;
  private subscription: Subscription | null = null;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.subscription = this.authService.isAuthResolved$
      .pipe(
        filter(resolved => resolved),  // várjuk, amíg az auth betölt
        switchMap(() => this.authService.currentUser),
        filter(user => user !== null), // várjuk, amíg a user bejön
        take(1),
        switchMap(() => this.userService.getUserProfile())
      )
      .subscribe({
        next: (data) => {
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Hiba a felhasználói profil betöltésekor:', error);
          this.isLoading = false;
        }
      });
  }
  
  

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getUserInitials(): string {
    if (!this.user || !this.user.name) return '?';

    const firstInitial = this.user.name.firstname ? this.user.name.firstname.charAt(0).toUpperCase() : '';
    const lastInitial = this.user.name.lastname ? this.user.name.lastname.charAt(0).toUpperCase() : '';

    return firstInitial + (lastInitial ? lastInitial : '');
  }
}
