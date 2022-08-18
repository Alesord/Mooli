import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = environment.URL_FLAT;
  private _userAutenticado: boolean = false;
  private _userKey: string;

  constructor(private http: HttpClient) { }

  get userAutenticado() {
    return this._userAutenticado
  }

  get userKey() {
    return this._userKey
  }

  login(userKey: string) {
    this._userAutenticado = true;
    this._userKey = userKey;
  }

  logout() {
    this._userAutenticado = false;
  }

  getUserey() {
    this.http.post(`${this.url}/usersBD.json`,{nombre: 'a'}).subscribe()
  }
}
