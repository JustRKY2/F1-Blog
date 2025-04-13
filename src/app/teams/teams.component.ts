import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CountryFlagDirective } from '../directives/country-flag.directive';
import { FoundedHighlightDirective } from '../directives/founded-highlight.directive';

export interface Team {
  id: number;              // Egyedi azonosító
  name: string;            // Csapat neve
  country: string;         // Ország
  founded: string;         // Alapítás dátuma
  teamPrincipal: string;   // Csapatvezető neve
  headquarters: string;    // Székhely (pl. város)
  hoverColor:string;
  imageUrl: string;
}

@Component({
  selector: 'app-teams',
  imports: [CommonModule,CountryFlagDirective,FoundedHighlightDirective],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  teams: Team[] = [
    {
      id: 1,
      name: 'Mercedes',
      country: 'Germany',
      founded: '1954',
      teamPrincipal: 'Toto Wolff',
      headquarters: 'Brackley, United Kingdom', // Mercedes székhelye
      hoverColor:'grey',
      imageUrl: 'assets/teams/mercedes.png',

    },
    {
      id: 2,
      name: 'Red Bull Racing',
      country: 'Austria',
      founded: '2005',
      teamPrincipal: 'Christian Horner',
      headquarters: 'Milton Keynes, United Kingdom', // Red Bull Racing székhelye
      hoverColor:"blue",
      imageUrl: 'assets/teams/redbull.png',
    },
    {
      id: 3,
      name: 'Ferrari',
      country: 'Italy',
      founded: '1939',
      teamPrincipal: 'Mattia Binotto',
      headquarters: 'Maranello, Italy', // Ferrari székhelye
      hoverColor:'red',
      imageUrl: 'assets/teams/ferrari.png',
    }
  ];
}