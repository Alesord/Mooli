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

  movieLocalStorage(){
  if(localStorage.getItem(this.local) !== undefined && localStorage.getItem(this.local)){
  JSON.parse(localStorage.getItem(this.local))
    console.log(this.local)
    return this.local
  }}
  
  getMovies(){
      // console.log(typeof(this.baseUrl))
    return this.http.get(this.baseUrl)
   
  }
  
      


  findMoviee(id: string, array: Movie[]){
    return array.find(p => p.id === id)
  }

  findMovie(id: string) {
    return this.http.get(this.baseUrl + '/' + id)
  }
  

}