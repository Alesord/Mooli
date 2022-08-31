import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SeenService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }
  // URL_BD_SEEN: `${URL_MOOLI}/users/-N8PnJ6s8FDh77vUleJp/seenList/`,
  private userId: string = this.authService.userKey;
  private baseUrl = `${environment.URL_USERS}/${this.userId}/seenList/`
  
  OnSendRequest(id: string, seen: boolean) {
    return this.http.patch(this.baseUrl + id + '.json', {seen})
  }
  
  OnGetSeen(id: string) {
    return this.http.get(this.baseUrl + id + '.json')
  }
}
