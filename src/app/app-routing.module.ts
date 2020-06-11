import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component' 
import { TopfiveComponent } from './pages/topfive/topfive.component';

const routes: Routes = [
  { path: 'home', component: MoviesComponent },
  { path: 'movie/new', component: MovieComponent },
  { path: 'movie/top-five', component: TopfiveComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
  
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes, {useHash: true} )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
