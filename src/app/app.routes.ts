import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'drivers',
        loadComponent: () => import('./drivers/drivers.component').then(m => m.DriversComponent)
    },
    {
        path: 'teams',
        loadComponent: () => import('./teams/teams.component').then(m => m.TeamsComponent)
    },
    {
        path: 'races',
        loadComponent: () => import('./races/races.component').then(m => m.RacesComponent)
    },
    {
        path: 'articles',
        loadComponent: () => import('./articles/articles.component').then(m => m.ArticlesComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'signup',
        loadComponent: () => import('./signup/signup.component').then(m => m.SignupComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
    },      
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        loadComponent: () => import('./page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
    },
];
