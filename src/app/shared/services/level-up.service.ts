import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LevelUpService {

  constructor(
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private http: HttpClient,
  ) { }
  private _isLevelTwo: boolean = false;
  private userId: string = this.authService.userKey;
  private baseUrl = `${environment.URL_USERS}/${this.userId}/datos/`
  private plainUrl = `${environment.URL_USERS}/${this.userId}/datos.json`

  getLevelUp() {
    return this._isLevelTwo
  }

  checkTokenExist() {
    this.userId = this.authService.userKey;
    this.baseUrl = `${environment.URL_USERS}/${this.userId}/datos/`
    this.plainUrl = `${environment.URL_USERS}/${this.userId}/datos.json`

    return this.http.get(this.baseUrl + 'token.json')
  }

  setLevelUpToken(data: number) {      
    return this.http.put(this.baseUrl + 'token.json', data)
  }

  levelUp() {
    this._isLevelTwo = true
  }

  levelDown() {
    this._isLevelTwo = false
  }

  whenLevelChange() {
   return this.loadingCtrl.create({
    keyboardClose: true,
    spinner: 'bubbles',
    message: 'Cargando cambio de acceso...'
   }).then(loadingEl => {
    loadingEl.present()
    this._isLevelTwo = !this._isLevelTwo
    console.log(this._isLevelTwo + ' Holaaaa')
    loadingEl.dismiss()
    return !this._isLevelTwo
   })
  }
}
