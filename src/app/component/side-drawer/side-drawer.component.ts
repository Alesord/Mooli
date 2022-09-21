 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UsuarioFoto } from 'src/app/shared/models/foto.model';
import { Usuario, UsuarioPerfilData } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FotosService } from 'src/app/shared/services/fotos.service';
import { LevelUpService } from 'src/app/shared/services/level-up.service';
import { Nivel2Component } from './nivel2/nivel2.component';

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.scss'],
})
export class SideDrawerComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    private router: Router,
    private levelUp: LevelUpService,
    private fotoService: FotosService
  ) { }
  
  usuario: Usuario;
  nickname: string;
  foto: UsuarioFoto;
  coso: string;

  ngOnInit() {
    this.authService.userK.subscribe(res => {
      if (res !== null) {
        this.fotoService.setUrls(res)
        this.fotoService.loadProfileData().subscribe(data => {
          this.nickname = data.nickname
          console.log(this.nickname)
        })
      } else {
        console.log('es null')
      }
    })
    console.log('Cargando sidenav')
    this.fotoService.loadSaved()
    this.foto = this.fotoService.fotoPerfil
  }

  onLevel2() {
    this.modalCtrl
    .create({ component: Nivel2Component})
    .then(modalElement => {
      modalElement.present();
      modalElement.onDidDismiss().then((data) => {
      })
    })
  }
  
  goToProfile() {
    this.router.navigateByUrl('/peliculas/tabs/mi-perfil')
  }

  onLogout() {
    this.authService.logout()
    this.router.navigateByUrl('/auth');
    this.levelUp.levelDown()
  }
  
}
