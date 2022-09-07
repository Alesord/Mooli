 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/auth.service';
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
    private levelUp: LevelUpService
  ) { }

  ngOnInit() {}

  onLevel2() {
    this.modalCtrl
    .create({ component: Nivel2Component})
    .then(modalElement => {
      modalElement.present();
      modalElement.onDidDismiss().then((data) => {
      })
    })
  }
  
  onLogout() {
    this.authService.logout()
    this.router.navigateByUrl('/auth');
    this.levelUp.levelDown()
  }
  
}
