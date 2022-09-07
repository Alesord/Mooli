import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthResponseData, AuthService } from '../shared/services/auth.service';
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
    private formBuilder: FormBuilder,
  ) { }

  isLoading: boolean = false;

  ngOnInit() {
    this.loginForm("","")
    // this.usuarioForm.reset() 
    console.log('El usuario está autenticado? : ' + this.authService.userAutenticado)
    console.log(this.authService.autoLogin2().then(res => {
      console.log(!!res)
      if (!!res) {
        this.router.navigateByUrl('/peliculas')
      }
    }))
  }

  // loginForm = new FormGroup({
  //   username: new FormControl
  //     (null, {
  //       updateOn: 'blur',
  //       validators: [Validators.email, Validators.required]
  //     }),
  //   password: new FormControl
  //     (null, {
  //       updateOn: 'blur',
  //       validators: [Validators.required, Validators.min(3)]
  //     })
  // })

  usuarioForm!: FormGroup

  loginForm(
    username:string,
    password:string
  ){
    this.usuarioForm = this.formBuilder.group({
      username:[username,[Validators.required, Validators.email]],
      password:[password,[Validators.required, Validators.minLength(5)]]
    })
  }
  validfield(campo:string){
    return this.usuarioForm.controls[campo].errors
      && this.usuarioForm.controls[campo].touched
  }

  onLogin() {
    this.isLoading = true;
    this.loadingCtrl.create({
      keyboardClose: true,
      spinner: 'bubbles',
      message: 'Iniciando sesión...'
    }).then(loadingEl => {
      loadingEl.present()
      this.authService.iniciarSesion(this.usuarioForm.value.username, this.usuarioForm.value.password)
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
    this.usuarioForm.reset() 
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
