import { Component, OnInit, OnDestroy } from '@angular/core';
import { DriverService } from '../services/driver.service';
import { Driver } from '../models/driver';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BirthdateFormatPipe } from '../pipes/birthdate-format.pipe';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [CommonModule, BirthdateFormatPipe],
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit, OnDestroy {
  drivers: Driver[] = [];
  private sub?: Subscription;

  constructor(private driverService: DriverService,
  @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('DRIVERS INIT');
      this.loadAllDrivers();
    }
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  loadAllDrivers(): void {
    if (this.sub) this.sub.unsubscribe();
    this.sub = this.driverService.getAllDrivers().subscribe(data => {
      this.drivers = this.normalizeDrivers(data);
    });
  }

  loadDutchDrivers(): void {
    if (this.sub) this.sub.unsubscribe();
    this.sub = this.driverService.getDriversByCountry('Netherlands').subscribe(data => {
      this.drivers = this.normalizeDrivers(data);
    });
  }

  loadOrderedByBirthDate(): void {
    if (this.sub) this.sub.unsubscribe();
    this.sub = this.driverService.getDriversOrderedByBirthDate().subscribe(data => {
      this.drivers = this.normalizeDrivers(data);
    });
  }

  loadLimitedDrivers(): void {
    if (this.sub) this.sub.unsubscribe();
    this.sub = this.driverService.getLimitedDrivers(1).subscribe(data => {
      this.drivers = this.normalizeDrivers(data);
    });
  }

  private normalizeDrivers(data: any[]): Driver[] {
    return data.map(driver => ({
      id: driver.id,
      name: (driver.name || '').replace(/"/g, ''),
      team: driver.team,
      country: driver.country,
      birthDate:driver.birthDate,
      imageUrl: driver.imageUrl || driver.imageURL || 'assets/default.png'
    }));
  }
}
