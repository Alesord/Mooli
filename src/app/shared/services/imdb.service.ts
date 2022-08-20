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

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(this.baseUrl)
  }

  done(data){
    console.log(data[0])
    return data
  }

  findMovie(id: string) {
    return this.http.get(this.expUrl + '/' + id + '.json')
  }
  
  postM(data, id: string) {
    this.http.put('https://mooli-3d0bf-default-rtdb.firebaseio.com/peliculasBD/' + id + '.json', data).subscribe()
  }

}
