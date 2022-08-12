import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Lista } from 'src/app/shared/models/list.model';
import { ImdbService } from 'src/app/shared/services/imdb.service';
import { ListService } from 'src/app/shared/services/list.service';
import { SeenService } from 'src/app/shared/services/seen.service';
import { CrearListaComponent } from './crear-lista/crear-lista.component';

@Component({
  selector: 'app-mis-listas',
  templateUrl: './mis-listas.page.html',
  styleUrls: ['./mis-listas.page.scss'],
})
export class MisListasPage implements OnInit {

  loadedMovies: any[] = [];
  loadedLists: any;
  allIds: any[] = [];
  isLoaded: boolean = false;
  userKey: string = 'usuario1h18'

  constructor(
    private listService: ListService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
      console.log('Entrando a mis listas')
      this.loadedLists = this.listService.getAllLists2()
      this.isLoaded = true;
  }

  onAddList() {
    this.modalCtrl
    .create({ component: CrearListaComponent, componentProps: {idUser: this.userKey} })
    .then(modalElement => {
      modalElement.present();
      modalElement.onDidDismiss().then((data) => {
        if (data.data[0]) {
          this.loadedLists.push({nombre: data.data[1], contenido: ['']})
        }
      })
    })
  }

  onDelete(listNombre: string){
    let listId: string = listNombre.toLowerCase().replace(/\s/g, '-')
    this.listService.deleteList(listId)
  }
}
