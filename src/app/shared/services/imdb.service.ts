import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {
  private baseUrl = 'http://localhost:3001/items'


  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(this.baseUrl)
  }


  
}
