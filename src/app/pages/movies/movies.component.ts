import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieModel } from 'src/app/models/movie.model';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  animations: [

    trigger('cardAnimation', 
    [
      transition('* => *', 
      [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('100ms', 
        [
         animate('.5s ease-in', keyframes(
         [
            style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))
          ]), { optional: true }),

        query(':leave', stagger('100ms', 
        [
         animate('.5s ease-in', keyframes(
         [
           style({ opacity: 0, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(-50%)', offset: 1 })
          ]))
          ]), { optional: true })
      ]),
    ]),
  ]
})

export class MoviesComponent implements OnInit {

  loading = false;
  movies: MovieModel [] = [];

  constructor( private movie_service : MoviesService, private router:Router, private activateR:ActivatedRoute) { }

  ngOnInit(): void {

    this.activateR.data.subscribe( data => {
      console.log('------------->', data);
    });
    
    this.loading = true;
    this.movie_service.getMovies().subscribe( (resp) => {
      this.movies = resp
      this.loading = false;
      
    });
  }

}
