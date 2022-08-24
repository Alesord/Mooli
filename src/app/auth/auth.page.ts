import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth.service';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private modalCtrl: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.authService.autoLogin2()
    console.log('--------')
    console.log(this.authService.autoLogin2())
    console.log('--------')
    this.loginForm.reset()
  }

  loginForm = new FormGroup({
    username: new FormControl
      (null, {
        updateOn: 'blur',
        validators: [Validators.email, Validators.required]
      }),
    password: new FormControl
      (null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(3)]
      })
  })

  onLogin() {
    this.authService.iniciarSesion(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe(res => {
      console.log(res.localId)
    },
    error => {
      let errorMsg = error.error.error.message
      console.log(error)
      if (errorMsg === 'EMAIL_NOT_FOUND') {
        this.showAlert('mail no registrado')
      } else if (errorMsg === 'INVALID_PASSWORD') {
        this.showAlert('Contraseña incorrecta, prueba nuevamente')
      }
    })
  }

  onRegister() {
    this.modalCtrl
    .create({ component: RegisterComponent})
    .then(modalElement => {
      modalElement.present();
      modalElement.onDidDismiss().then((data) => {
      })
    })
  }

  showAlert(msg: string) {
    this.alertController.create({
      header: 'Fallo al iniciar sesión',
      message: msg,
      buttons: ['Ok']
    })
    .then(alertElement => alertElement.present())
  }
}
