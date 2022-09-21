import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-opciones',
  templateUrl: './perfil-opciones.component.html',
  styleUrls: ['./perfil-opciones.component.scss'],
})
export class PerfilOpcionesComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss(null, 'goBack');
  }
  startCapture(type) {
    this.modalCtrl.dismiss(type, 'select');
  }
}
