import { Injectable } from '@angular/core';
import { Driver } from '../models/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private drivers: Driver[] = [
    {
      id: 1,
      name: 'Lewis Hamilton',
      teamId: 1,
      nationality: 'British',
      dateOfBirth: new Date('1985-01-07'),
      wins: 103,
      championships: 7,
      driverNumber: 44,
      imageUrl: 'https://example.com/hamilton.jpg'
    },
    {
      id: 2,
      name: 'Max Verstappen',
      teamId: 2,
      nationality: 'Dutch',
      dateOfBirth: new Date('1997-09-30'),
      wins: 54,
      championships: 3,
      driverNumber: 1,
      imageUrl: 'https://example.com/verstappen.jpg'
    }
  ];

  constructor() { }

  getDrivers(): Driver[] {
    return this.drivers;
  }

  getDriverById(id: number): Driver | undefined {
    return this.drivers.find(driver => driver.id === id);
  }
}