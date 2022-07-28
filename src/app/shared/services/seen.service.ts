import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movie } from '../models/imdbMovies.model';

@Injectable({
  providedIn: 'root'
})
export class SeenService {
  private baseUrl = 'https://mooli-3d0bf-default-rtdb.firebaseio.com/seenList/-N85rm2-iiM4AsN7ObzU/'
  private movies: Movie[]

  constructor(private http: HttpClient) { }

  OnSendRequest(id: string, seen: boolean) {
    this.http.put(this.baseUrl + id + '.json', {seen}).subscribe({next: (respuestaData => {
        console.log('Se ha posteado ' + respuestaData);
      })
    })
  }

  OnUploadSeen(id: string, seen: boolean) {
    this.http.post(this.baseUrl + id + '.json', {seen}).subscribe({next: (respuestaData => {
        this.OnSendRequest(id, false);
      })
    })
  }
  
  OnGetSeen(id: string) {
    return this.http.get(this.baseUrl + id + '.json')
  }
}
