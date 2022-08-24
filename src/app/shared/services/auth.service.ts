import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage'
import { BehaviorSubject, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User, Usuario } from '../models/user.model';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  url: string = environment.URL_FLAT;
  firebaseAPIKey: string = environment.firebaseAPIKey;
  private _userAutenticado: boolean = false;
  private _userKey: string = '-JPFHCKSQLECIGSLMOKI';
  private _user = new BehaviorSubject<Usuario>(null);

  get userIsAuthenticated() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return !!user.token;
        } else {
          return false;
        }
      })
    );
  }
  get userAutenticado() {
    return this._userAutenticado
  }

  get userId() {
    return this._user.asObservable().pipe(map(usuario => {
      if (usuario) {
        return usuario.userId
      } else {
        return false
      }
    }))
  }

  get userKey() {
    return this._userKey
  }

  logout() {
    this._userAutenticado = false;
  }

  registrar(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseAPIKey}`
      , {email: email, password: password, returnSecureToken: true}
      )
      .pipe(tap(this.setUserData.bind(this)))  
  }

  iniciarSesion(email: string, password: string) {
    this._userAutenticado = true;
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.firebaseAPIKey}`
    , {email: email, password: password, returnSecureToken: true}
    )
    .pipe(tap(this.setUserData.bind(this)))
  }

  autoLogin2() {
    let x: boolean = false;
    const loadData = Storage.get({key: 'authData'})
    let storedData: Usuario
    console.log(!loadData)
    loadData.then(res => {
      storedData = (JSON.parse(res.value))
      if (!storedData) {
        console.log('No hay data guardada, iniciar sesion')
      } else {
        console.log('Data encontrada, cargando')
        const expirationTime = new Date(storedData.tokenExpDate)
        if (expirationTime <= new Date()) {
          this._userAutenticado = false;
          console.log(this._userAutenticado)

        } else {
          const user = new Usuario(storedData.userId, storedData.email, storedData.token, storedData.tokenExpDate)
          console.log(user)
          this._userAutenticado = true;
          console.log(this._userAutenticado)
        }
      }
    })
    console.log(this._userAutenticado)
    return x;
  }
  autoLogin() {
    console.log('Entrando en autologin')
    return from(Storage.get({key: 'authData'}))
    .pipe(map(storedData => {
      //If chek para ver si no hay data en el storage
      if (!storedData || !storedData.value) {
        return null;
      }
      const parsedData = JSON.parse(storedData.value) as { userId: string; token: string; tokenExpDate: string; email: string};
      const expirationTime = new Date(parsedData.tokenExpDate);
      //check para ver si queda tiempo de expiracion
      if (expirationTime <= new Date()) {
        return null
      };
      const user = new Usuario(parsedData.userId, parsedData.email, parsedData.token, expirationTime);
      console.log(user)
      return user
    }),
    tap(user => {
      if (user) {
        console.log('next user')
        this._user.next(user);
      }
    }),
    map(user => {
      console.log('return !!user')
      return !!user;
    })
    )
  }

  private storeAuthData(userId: string, token: string, tokenExpDate: string, email: string) {
    const data = {userId: userId, token: token, tokenExpDate: tokenExpDate, email: email};
    Storage.set({key: 'authData', value: JSON.stringify(data)})
  }

  private setUserData(userData: AuthResponseData) {
    const expirationTime = new Date(new Date().getTime() + (+userData.expiresIn * 1000))
    this._user.next(new Usuario(
      userData.localId,
      userData.email,
      userData.idToken,
      expirationTime
    ))
    this.storeAuthData(userData.localId, userData.idToken, expirationTime.toISOString(), userData.email)
  }
}
