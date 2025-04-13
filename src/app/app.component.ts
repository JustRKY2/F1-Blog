import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent,ArticlesComponent,DriversComponent,HomeComponent,RacesComponent,TeamsComponent,BirthdateFormatPipe,CountryFlagDirective,FoundedHighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'f1-blog';
}
