import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieModel } from 'src/app/models/movie.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor( private movies_service : MoviesService, private route: ActivatedRoute, private router: Router ) { }

  movie = new MovieModel();
  image: any;
  id: any;

  queryParams = [];

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');

      this.movies_service.getMovie(this.id).subscribe( (resp: MovieModel) => {
        this.movie = resp;
        this.movie.id = this.id;
        this.image = resp.image;
      }).add;
  
    });
  }
}
