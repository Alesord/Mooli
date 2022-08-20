import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeenService {
  private baseUrl = environment.URL_BD_SEEN

  constructor(private http: HttpClient) { }

  OnSendRequest(id: string, seen: boolean) {
    return this.http.put(this.baseUrl + id + '.json', {seen})
  }
  
  OnGetSeen(id: string) {
    return this.http.get(this.baseUrl + id + '.json')
  }
}
