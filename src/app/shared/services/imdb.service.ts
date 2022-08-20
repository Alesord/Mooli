import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movie } from '../models/imdbMovies.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ImdbService {
  private baseUrl = environment.URL_BD_JSON;
  private movies: Movie[]

  local=localStorage.getItem('movie')

  constructor(private http: HttpClient) { }

  getMovieLocalStorage(){
  return JSON.parse(localStorage.getItem('movie'));
    // console.log(this.local)
    
  };

  // getItemLS(){
  //   localStorage.getItem(this.local)
  // }
  
  getMovies(){
      // console.log(typeof(this.baseUrl))
    return this.http.get(this.baseUrl)
   
  }
  
  idLs: string[]=[]

  findMovie(id: string) {
    // if(localStorage.getItem('movie') !== undefined){
    //   for(let x of localStorage.getItem('movie')){
    //     this.idLs.push(x.id)
    //   }
    // }
    // else
    // {
    return this.http.get(this.baseUrl + '/' + id)
    // }
}

  localStorage(x: string){
  // JSON.stringify
    return localStorage.setItem('movie', JSON.stringify((x)));
  // JSON.parse
     
  // JSON.parse(localStorage.getItem('movie'));
};
}
