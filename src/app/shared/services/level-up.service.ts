import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LevelUpService {

  constructor(
    private loadingCtrl: LoadingController,
  ) { }
  private _isLevelTwo: boolean = false;

  getLevelUp() {
    return this._isLevelTwo
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
