import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  alreadyRegistered: boolean = false;
  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService
  ) { }

  ngOnInit() {}
  
  registerForm = new FormGroup({
    username: new FormControl
      (null, {
        updateOn: 'blur',
        validators: [Validators.email, Validators.required]
      }),
    password: new FormControl
      (null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(5)]
      })
  })

  register(){
    this.alreadyRegistered = false;
    this.authService.checkLogin().subscribe({next: respuesta => {
      for (let i of Object.values(respuesta)) {
        if (i.login === this.registerForm.controls.username.value) {
          this.alreadyRegistered = true;
          this.registerForm.reset()
          return
        }
      }
      if (!this.alreadyRegistered) {
        this.authService.register(this.registerForm.value.username, this.registerForm.value.password)
      }
    }})
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }
}
