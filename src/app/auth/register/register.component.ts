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

  registrar() {
    this.authService.registrar(this.registerForm.value.username, this.registerForm.value.password).subscribe(res => {
      console.log(res)
      this.modalCtrl.dismiss()
    })
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }
}
