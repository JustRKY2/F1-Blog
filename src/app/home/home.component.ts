import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';
import { RaceService } from '../services/race.service';
import { Race } from '../models/race';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  featuredArticles: Article[] = [];
  upcomingRaces: Race[] = [];

  constructor(
    private articleService: ArticleService,
    private raceService: RaceService
  ) {
    this.featuredArticles = this.articleService.getFeaturedArticles();
    this.upcomingRaces = this.raceService.getUpcomingRaces();
  }
}