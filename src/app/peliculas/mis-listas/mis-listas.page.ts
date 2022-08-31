import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Lista } from 'src/app/shared/models/list.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ImdbService } from 'src/app/shared/services/imdb.service';
import { LevelUpService } from 'src/app/shared/services/level-up.service';
import { ListService } from 'src/app/shared/services/list.service';
import { SeenService } from 'src/app/shared/services/seen.service';
import { CrearListaComponent } from './crear-lista/crear-lista.component';

@Component({
  selector: 'app-mis-listas',
  templateUrl: './mis-listas.page.html',
  styleUrls: ['./mis-listas.page.scss'],
})
export class MisListasPage implements OnInit, OnDestroy {

  constructor(
    private listService: ListService,
    private modalCtrl: ModalController,
    private authService: AuthService,
    private router: Router,
    public levelUpService: LevelUpService,
  ) { }

  loadedMovies: any[] = [];
  loadedLists: any;
  allIds: any[] = [];
  isLoaded: boolean = false;
  isLevel2: boolean = this.levelUpService.getLevelUp();
  userKey: string = 'usuario1h18'
  unsub: Subject<void> = new Subject()

  ngOnInit() {
  }

  ionViewWillEnter() {
      console.log('Entrando a mis listas')
      this.loadedLists = this.listService.getAllLists()
      console.log(this.loadedLists)
      console.log(this.loadedLists.find(x => x.nombre === 'Test'))
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
    .pipe(takeUntil(this.unsub))
    .subscribe()
  }

  onLogout() {
    this.authService.logout()
    this.router.navigateByUrl('/auth');
  }

  ngOnDestroy() {
    this.unsub.next();
    this.unsub.unsubscribe();
  }

}
