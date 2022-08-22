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
  
  movie = JSON.parse(localStorage.getItem('movie'))
  
  getMovieLocalStorage(){
  return this.movie;
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
  test: string

  findMovieLs(id: string){
    
    // if(this.movie.id === id){
    //   this.test = this.movie
    // }
    
    for(let x of this.movie){
      if(x.id === id){
        this.test= x
      }
    }
    return this.test
    
    // for(let x of this.movie){
    //   this.idLs.push(x.id)   
    // }
    // return this.idLs
  }

  findMovie(id: string) {
    return this.http.get(this.baseUrl + '/' + id)
}

  localStorage(x: string){
  // JSON.stringify
    return localStorage.setItem('movie', JSON.stringify((x)));
  // JSON.parse
     
  // JSON.parse(localStorage.getItem('movie'));
};
}
