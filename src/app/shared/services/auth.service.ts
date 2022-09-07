import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage'
import { BehaviorSubject, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User, Usuario } from '../models/user.model';

export interface AuthResponseData {
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
  constructor(
    private http: HttpClient,
    private router: Router
    ) {}

  url: string = environment.URL_FLAT;
  firebaseAPIKey: string = environment.firebaseAPIKey;
  private _userAutenticado: boolean = false;
  public userKey: string = '';
  private _user = new BehaviorSubject<Usuario>(null);
  estado = this._user.asObservable()

  get userIsAuthenticated() {
    return this._user.asObservable().pipe(
      map(user => {
        console.log(user)
        if (user) {
          console.log('HOLA HOLA HOLA')
          return !!user.token;
        } else {
          console.log('FALSO FALSO FALSO')
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

  logout() {
    this._userAutenticado = false;
    Storage.remove({key: 'authData'})
    this.router.navigateByUrl('/auth');
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

  async autoLogin2(): Promise<boolean> {
  console.log('Intentando autologin')
  const storedData = await Storage.get({key: 'authData'})
  const loadedData = JSON.parse(storedData.value)

  if(!loadedData){
    console.log('No data')
  }else{
    console.log('Si hay data, cargando...')
    const expirationTime = new Date(loadedData.tokenExpDate)
    if (expirationTime <= new Date()){
      console.log('Token expirado.')
      this._userAutenticado = false;
      return false
    }
    //Se crea una constante usuario con los datos traidos, por ahora solo se usa el userId
    const usuario = new Usuario(
      loadedData.userId,
      loadedData.email,
      loadedData.token,
      expirationTime
    )
    console.log(loadedData.userId)
    this.userKey = loadedData.userId
    if (!this._user.getValue()) {
      this._user.next(usuario);
      console.log(this._user)
      this._userAutenticado = true;
    }
    return usuario ? true : false
  }
   
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
