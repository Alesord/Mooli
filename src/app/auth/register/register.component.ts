import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.creatForm("","")
  }
  
  // registerForm = new FormGroup({
  //   username: new FormControl
  //     (null, {
  //       updateOn: 'blur',
  //       validators: [Validators.email, Validators.required]
  //     }),
  //   password: new FormControl
  //     (null, {
  //       updateOn: 'blur',
  //       validators: [Validators.required, Validators.min(5)]
  //     })
  // })
usuarioForm!: FormGroup

  creatForm(
    username:string,
    password:string
  ){
    this.usuarioForm = this.formBuilder.group({
      username:[username,[Validators.required, Validators.email]],
      password:[password,[Validators.required, Validators.minLength(5)]]
    })
  }

  registrar() {
    this.authService.registrar(this.usuarioForm.value.username, this.usuarioForm.value.password).subscribe(res => {
      console.log(res)
      this.modalCtrl.dismiss()
    })
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }

  validfield(campo:string){
    return this.usuarioForm.controls[campo].errors
      && this.usuarioForm.controls[campo].touched
  }
}
