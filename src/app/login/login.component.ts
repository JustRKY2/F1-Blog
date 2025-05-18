import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { AuthService} from "../services/auth.service"
import { Subscription } from 'rxjs';
import { NgZone } from '@angular/core'; // a tetején



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = new FormControl('');
  password = new FormControl('');
  isLoading: boolean = false;
  loginError: string = '';
  showLoginForm: boolean = true;
  authSubscription?: Subscription;


  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  async login() {
    const emailValue = this.email.value || '';
    const passwordValue = this.password.value || '';
  
    if (!emailValue) {
      this.loginError = 'Please enter a valid email address';
      this.isLoading = false;
      this.showLoginForm = true;
      return;
    }
  
    if (!passwordValue || passwordValue.length < 6) {
      this.loginError = 'Password must be at least 6 characters long';
      this.isLoading = false;
      this.showLoginForm = true;
      return;
    }
  
    this.isLoading = true;
    this.showLoginForm = false;
    this.loginError = '';
  
    try {
      const userCredential = await this.authService.signIn(emailValue, passwordValue);
      console.log('Login successful:', userCredential.user);
      this.router.navigateByUrl('/home');
    } catch (error: any) {
      console.error('Login error:', error);
      this.isLoading = false;
      this.showLoginForm = true;
  
      switch(error.code) {
        case 'auth/user-not-found':
          this.loginError = 'No account found with this email address';
          break;
        case 'auth/wrong-password':
          this.loginError = 'Incorrect password';
          break;
        case 'auth/invalid-credential':
          this.loginError = 'Invalid email or password';
          break;
        default:
          this.loginError = 'Authentication failed. Please try again later.';
      }
    }
  }
  
  
  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
  
  

  ngOnDestroy() {
    this.authSubscription?.unsubscribe();
  }
}