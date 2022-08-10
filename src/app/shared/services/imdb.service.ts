import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movie } from '../models/imdbMovies.model';
import { environment } from 'src/environments/environment';
import { ElementFinder } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {
  private baseUrl = environment.URL_BD_JSON;
  private movies: Movie[]


  local=localStorage.getItem('movie')
  constructor(private http: HttpClient) { }

  // if(localStorage.getItem('movie') !== undefined && localStorage.getItem('movie')){
  //   console.log(this.local)
  //   return this.local
  // }else()=>{
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
