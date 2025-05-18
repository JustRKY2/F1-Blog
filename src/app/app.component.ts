import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { ArticlesComponent } from './articles/articles.component';
import { DriversComponent } from './drivers/drivers.component';
import { HomeComponent } from './home/home.component';
import { RacesComponent } from './races/races.component';
import { TeamsComponent } from './teams/teams.component';
import { BirthdateFormatPipe } from './pipes/birthdate-format.pipe';
import { CountryFlagDirective } from './directives/country-flag.directive';
import { FoundedHighlightDirective } from './directives/founded-highlight.directive';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    ArticlesComponent,
    DriversComponent,
    HomeComponent,
    RacesComponent,
    TeamsComponent,
    BirthdateFormatPipe,
    CountryFlagDirective,
    FoundedHighlightDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'f1-blog';
  isLoggedIn = false;
  private authSubscription?: Subscription;

  constructor(
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.currentUser.subscribe(user => {
      this.isLoggedIn = !!user;

      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('isLoggedIn', this.isLoggedIn ? 'true' : 'false');
      }
    });
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

  logout(): void {
    this.authService.signOut();
  }
}