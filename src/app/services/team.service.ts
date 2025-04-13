import { Injectable } from '@angular/core';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teams: Team[] = [
    {
      id: 1,
      name: 'Mercedes-AMG Petronas F1 Team',
      base: 'Brackley, UK',
      teamPrincipal: 'Toto Wolff',
      chassis: 'Mercedes W15',
      engine: 'Mercedes',
      founded: 1970,
      championships: 8,
      logoUrl: 'https://example.com/mercedes-logo.png'
    },
    {
      id: 2,
      name: 'Oracle Red Bull Racing',
      base: 'Milton Keynes, UK',
      teamPrincipal: 'Christian Horner',
      chassis: 'Red Bull RB20',
      engine: 'Honda RBPT',
      founded: 2005,
      championships: 6,
      logoUrl: 'https://example.com/redbull-logo.png'
    }
  ];

  constructor() { }

  getTeams(): Team[] {
    return this.teams;
  }

  getTeamById(id: number): Team | undefined {
    return this.teams.find(team => team.id === id);
  }
}