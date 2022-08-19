import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
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
  ) { }

  ngOnInit() {
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
    this.authService.checkLogin().subscribe({next: respuesta => {
      for (let i of Object.values(respuesta)) {
        if (i.login === this.loginForm.controls.username.value) {
          this.authService.login(i.token)
          console.log('Credenciales correctas: iniciando sesion')
          this.router.navigateByUrl('/peliculas')
          return
        }
      }
    }})
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
}
