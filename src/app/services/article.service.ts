import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = [
    {
      id: 1,
      title: 'Verstappen Dominates Season Opener in Bahrain',
      content: 'Max Verstappen started the 2024 season where he left off last year, with a dominant victory...',
      author: 'F1 Correspondent',
      publishDate: new Date('2024-03-02'),
      tags: ['race', 'verstappen', 'red bull'],
      featuredImageUrl: 'https://example.com/bahrain-race.jpg',
      relatedDriverIds: [2],
      relatedTeamIds: [2],
      relatedRaceIds: [1]
    },
    {
      id: 2,
      title: 'Mercedes Struggles Continue in Jeddah',
      content: 'Mercedes had another difficult weekend in Saudi Arabia as both drivers struggled for pace...',
      author: 'F1 Analyst',
      publishDate: new Date('2024-03-09'),
      tags: ['team', 'mercedes', 'struggles'],
      featuredImageUrl: 'https://example.com/mercedes-struggle.jpg',
      relatedDriverIds: [1],
      relatedTeamIds: [1],
      relatedRaceIds: [2]
    }
  ];

  constructor() { }

  getArticles(): Article[] {
    return this.articles;
  }

  getArticleById(id: number): Article | undefined {
    return this.articles.find(article => article.id === id);
  }

  getFeaturedArticles(): Article[] {
    return this.articles.slice(0, 3);
  }
}