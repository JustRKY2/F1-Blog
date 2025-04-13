export interface Driver {
    id: number;
    name: string;
    teamId: number;
    nationality: string;
    dateOfBirth: Date;
    wins: number;
    championships: number;
    driverNumber: number;
    imageUrl?: string;
  }