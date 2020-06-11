import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopService {

  constructor( private httpClient: HttpClient ) { }

  getTopMovies() {
    return this.httpClient.get(`${environment.apiConstants.API_MOCK}`);
  }
}
