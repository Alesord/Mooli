import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { LevelUpService } from 'src/app/shared/services/level-up.service';

@Component({
  selector: 'app-nivel2',
  templateUrl: './nivel2.component.html',
  styleUrls: ['./nivel2.component.scss'],
})
export class Nivel2Component implements OnInit {

  tokenExist: boolean;
  token: number | string;

  constructor(
    private modalCtrl: ModalController,
    private levelUp: LevelUpService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,

  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.levelUp.checkTokenExist().subscribe(res => {
      if (!!res) {
        console.log('Existe')
        this.tokenExist = true
        this.token = JSON.parse(JSON.stringify(res)).token
        console.log(this.token)
      } else {
        console.log('No existe')
        this.tokenExist = false
      }
    })
  }

  level2AuthForm = new FormGroup({
    password: new FormControl
      (null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(4), Validators.maxLength(4)]
      })
  })

  onCancel() {
    this.modalCtrl.dismiss()
  }

  onTokenLogin() {
    this.loadingCtrl.create({
      keyboardClose: true,
      spinner: 'bubbles',
      message: 'Cargando cambio de acceso...'
    }).then(loadingEl => {
      loadingEl.present()
      if (this.tokenExist) {
        if (this.token == this.level2AuthForm.value.password) {
          this.levelUp.levelUp()
          loadingEl.dismiss()
        } else {
          loadingEl.dismiss()
          this.showAlert()
        }
      } else {
        this.levelUp.setLevelUpToken(this.level2AuthForm.value.password).subscribe(next => {
          this.levelUp.levelUp()
          loadingEl.dismiss()
        })
      }
    })
    this.modalCtrl.dismiss()
  }

  showAlert() {
    this.alertController.create({
      header: 'Fallo al subir nivel',
      message: `Token incorrecto`,
      buttons: ['Ok']
    })
      .then(alertElement => alertElement.present())
  }
}
