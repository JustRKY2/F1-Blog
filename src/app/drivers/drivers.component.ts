import { Component } from '@angular/core';
import { BirthdateFormatPipe } from '../pipes/birthdate-format.pipe';
import { CommonModule } from '@angular/common';

export interface Driver {
  id: number; // Egyedi azonosító
  name: string; // Név
  country: string; // Ország
  team: string; // Csapat
  birthDate: string; // Születési dátum
  imageUrl: string;
}

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [BirthdateFormatPipe,CommonModule],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.scss'
})
export class DriversComponent {
  drivers: Driver[] = [
    {
      id: 1,
      name: 'Lewis Hamilton',
      country: 'United Kingdom',
      team: 'Mercedes',
      birthDate: '1985-01-07',
      imageUrl: 'assets/driverimg/1.png',
    },
    {
      id: 2,
      name: 'Max Verstappen',
      country: 'Netherlands',
      team: 'Red Bull Racing',
      birthDate: '1997-09-30',
      imageUrl: 'assets/driverimg/2.png',
    },
    {
      id: 3,
      name: 'Charles Leclerc',
      country: 'Monaco',
      team: 'Ferrari',
      birthDate: '1997-10-16',
      imageUrl: 'assets/driverimg/3.png',
    }
    // További versenyzők adatai
  ];

  ngOnInit(): void {
    console.log(this.drivers); // Ellenőrizd a tömb adatainak helyességét
  }

}
