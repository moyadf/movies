import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  movies: MovieModel[] = [];
  show = false;
  buttonClicked = false;

  constructor(
    private movie_service: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.show = true;
    this.movie_service.getMovies().subscribe((resp) => {
      this.movies = resp;
      console.log('sidebar', this.movies);
      this.show = false;
    });
  }

  deleteMovie(movie: MovieModel, idx: number) {
    Swal.fire({
      title: 'Are you sure',
      text: `Are you sure to delete the movie: ${movie.title}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then((resp) => {
      if (resp.value) {
        this.movies.splice(idx, 1);
        this.movie_service.deleteMovie(movie.id).subscribe();     
      }
      
      this.router.navigate(['home']);
      
    }).finally();
  }
}
