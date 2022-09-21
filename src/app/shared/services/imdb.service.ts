import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movie } from '../models/imdbMovies.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {
  private baseUrl = environment.URL_BD_JSON;
  private expUrl = environment.URL_BD_JSON_EXP;
  private movies: Movie[] = []
  test: string
  movie = JSON.parse(localStorage.getItem('movie'))

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.baseUrl)
  }

  findMovie(id: string) {
    return this.http.get(this.expUrl + '/' + id + '.json')
  }

  postM(data, id: string) {
    this.http.put('https://mooli-3d0bf-default-rtdb.firebaseio.com/peliculasBD/' + id + '.json', data).subscribe()
  }

  getMovieLocalStorage() {
    return this.movie;
    // console.log(this.local)
  };

  findMovieLs(id: string) {

    // if(this.movie.id === id){
    //   this.test = this.movie
    // }

    for (let x of this.movie) {
      if (x.id === id) {
        this.test = x
      }
    }
    return this.test

    // for(let x of this.movie){
    //   this.idLs.push(x.id)   
    // }
    // return this.idLs
  }
  localStorage(x: string) {
    // JSON.stringify
    return localStorage.setItem('movie', JSON.stringify((x)));
    // JSON.parse

    // JSON.parse(localStorage.getItem('movie'));
  };
}
