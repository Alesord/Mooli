import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = environment.URL_FLAT;
  private _userAutenticado: boolean = false;
  private _userKey: string;

  usersX: User = {
    login: 'user@user.com',
    password: 'user',
    token: '-N8PnJ6s8FDh77vUleJp'
  }

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

  register(username: string, password: string) {
    let newUser: User = {
      login: username,
      password: password,
      token: this.crearToken()
    }
    console.log(newUser.token)
    console.log(newUser)
    this.http.put(`${this.url}/usersBD/${newUser.token}.json`, newUser).subscribe()
    
    this.http.put(`${this.url}/usersBD/${newUser.token}.json`, newUser).subscribe()
  }

  logout() {
    this._userAutenticado = false;
  }

  checkLogin() {
    return this.http.get(`${this.url}/usersBD.json`)
  }

  crearToken() {
    var result = '-';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = 19;
    for (var i = 0; i < 19; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }
}
