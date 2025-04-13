export interface Article {
    id: number;
    title: string;
    content: string;
    author: string;
    publishDate: Date;
    tags: string[];
    featuredImageUrl?: string;
    relatedDriverIds?: number[];
    relatedTeamIds?: number[];
    relatedRaceIds?: number[];
  }