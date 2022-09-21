import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthResponseData, AuthService } from '../shared/services/auth.service';
import { FotosService } from '../shared/services/fotos.service';
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
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private fotoService: FotosService
  ) { }

  isLoading: boolean = false;

  ngOnInit() {
    console.log(this.fotoService.urlnj);
    this.loginForm.reset() ;
    console.log('El usuario está autenticado? : ' + this.authService.userAutenticado)
    console.log(this.authService.autoLogin2().then(res => {
      console.log(!!res)
      if (!!res) {
        this.router.navigateByUrl('/peliculas')
      }
    }))
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
    this.isLoading = true;
    this.loadingCtrl.create({
      keyboardClose: true,
      spinner: 'bubbles',
      message: 'Iniciando sesión...'
    }).then(loadingEl => {
      loadingEl.present()
      this.authService.iniciarSesion(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe(res => {
          this.authService.userKey = res.localId
          console.log(this.authService.userKey)
          this.router.navigateByUrl('/peliculas')
          loadingEl.dismiss()
        },
          error => {
            loadingEl.dismiss()
            let errorMsg = error.error.error.message
            console.log(error)
            if (errorMsg === 'EMAIL_NOT_FOUND') {
              this.showAlert('mail no registrado')
            } else if (errorMsg === 'INVALID_PASSWORD') {
              this.showAlert('Contraseña incorrecta, prueba nuevamente')
            }
          })
    this.loginForm.reset() 
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
