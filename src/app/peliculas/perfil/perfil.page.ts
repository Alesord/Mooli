import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { UsuarioFoto } from 'src/app/shared/models/foto.model';
import { Usuario } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FotosService } from 'src/app/shared/services/fotos.service';
import { environment } from 'src/environments/environment';
import { PerfilOpcionesComponent } from './perfil-opciones/perfil-opciones.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    public fotoService: FotosService,
    private modalCtrl: ModalController
  ) { }

  editMode: boolean = false;
  usuario: Usuario;
  nickname: string = '';
  nicknameSolid: string = '';
  foto: UsuarioFoto;
  editColor: string = '';

  ngOnInit() {
    this.authService.userK.subscribe(res => {
      if (res !== null) {
        this.fotoService.setUrls(res)
        this.fotoService.loadProfileData().subscribe(data => {
          this.nickname = data.nickname
          console.log(this.nickname)
          this.nicknameSolid = this.nickname
        })
      } else {
        console.log('es null')
      }
    })
    this.authService.user.subscribe(user => {
      if (user) {
        this.usuario = user;
      }
      // this.fotosService.getFoto() No sirve porque no esta guardada en localhost
    })
  }

  guardarCambios() {
    this.fotoService.saveInfo(this.nickname).subscribe();
    this.nicknameSolid = this.nickname;
    this.toggleEditMode();
  }

  addPhotoToGallery() {
    this.modalCtrl.create({
      component: PerfilOpcionesComponent,
      cssClass: 'transparent-modal'
    }).then(modalRes => {
      modalRes.present();
      modalRes.onDidDismiss().then(data => {
        if (data.role != 'goBack') {
          this.fotoService.addNewToGallery(data.data)
        } else {
          this.fotoService.deletePicture()
        }
      })
    })
  }

  toggleEditMode() {
    this.editMode = !this.editMode
    if (this.editMode) {
      this.editColor = 'primary';
    } else {
      this.editColor = '';
    }
    if (this.nickname !== this.nicknameSolid) {
      this.nickname = this.nicknameSolid;
    }
  }

  goBack() {
    this.router.navigateByUrl('/peliculas/tabs/ver-todas')
  }
}
