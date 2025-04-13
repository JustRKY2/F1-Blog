import { Injectable } from '@angular/core';
import { Race } from '../models/race';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  private races: Race[] = [
    {
      id: 1,
      name: 'Bahrain Grand Prix',
      circuit: 'Bahrain International Circuit',
      date: new Date('2024-03-02'),
      round: 1,
      season: 2024,
      winnerDriverId: 2,
      winnerTeamId: 2,
      circuitImageUrl: 'https://example.com/bahrain-circuit.jpg'
    },
    {
      id: 2,
      name: 'Saudi Arabian Grand Prix',
      circuit: 'Jeddah Corniche Circuit',
      date: new Date('2024-03-09'),
      round: 2,
      season: 2024,
      winnerDriverId: 2,
      winnerTeamId: 2,
      circuitImageUrl: 'https://example.com/jeddah-circuit.jpg'
    }
  ];

  constructor() { }

  getRaces(): Race[] {
    return this.races;
  }

  getRaceById(id: number): Race | undefined {
    return this.races.find(race => race.id === id);
  }

  getUpcomingRaces(): Race[] {
    const today = new Date();
    return this.races.filter(race => race.date > today);
  }
}