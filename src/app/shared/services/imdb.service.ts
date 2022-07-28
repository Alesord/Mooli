import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movie } from '../models/imdbMovies.model';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {
  private baseUrl = 'http://localhost:3001/items'
  private movies: Movie[]

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(this.baseUrl)
  }

  findMoviee(id: string, array: Movie[]){
    return array.find(p => p.id === id)
  }

  findMovie(id: string) {
    return this.http.get(this.baseUrl + '/' + id)
  }
  
}
