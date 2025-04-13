export interface Race {
    id: number;
    name: string;
    circuit: string;
    date: Date;
    round: number;
    season: number;
    winnerDriverId?: number;
    winnerTeamId?: number;
    circuitImageUrl?: string;
  }