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
  private movies: Movie[]

  constructor(private http: HttpClient) { }

  getMovies(){
    let x: any[] = []
    this.http.get(this.baseUrl).subscribe(res => {
      for(let key in res){
        x.push(res[key])
      }
    })
    return x;
  }

  findMoviee(id: string, array: Movie[]){
    return array.find(p => p.id === id)
  }

  findMovie(id: string) {
    return this.http.get(this.expUrl + '/' + id + '.json')
  }
  
  postM(data, id: string) {
    this.http.put('https://mooli-3d0bf-default-rtdb.firebaseio.com/peliculasBD/' + id + '.json', data).subscribe()
  }

}
