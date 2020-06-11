import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieModel } from '../models/movie.model';
import { environment } from 'src/environments/environment';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private httpClient : HttpClient ) { }

  addMovie ( movie:MovieModel ) {

    return this.httpClient.
            post(`${environment.apiConstants.API_DOMAIN}/movies.json`, movie)
              .pipe(
                map( (data : any) => {
                  movie.id = data.name;
                  return movie;
                })
              );
  }

  getMovies () {
    return this.httpClient.get(`${environment.apiConstants.API_DOMAIN}/movies.json`)
      .pipe(
        map( this.createMovieArr ),
        delay(1)
      );
  }

  getMovie ( id: string ) {
    return this.httpClient.get(`${environment.apiConstants.API_DOMAIN}/movies/${id}.json`);
  }

  deleteMovie ( id: string ) {
    return this.httpClient.delete(`${environment.apiConstants.API_DOMAIN}/movies/${id}.json`);
  }


  private createMovieArr ( movieObj: object ) {
    const movies : MovieModel[] = [];

    if (movieObj === null ) { return [];}

    Object.keys( movieObj ).forEach( key => {
      const movie : MovieModel = movieObj[key];
      movie.id = key;

      movies.push(movie);
    });

    return movies;
  }
}
