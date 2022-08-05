import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { MovieData } from 'src/app/shared/models/list.model';
import { ImdbService } from 'src/app/shared/services/imdb.service';
import { ListService } from 'src/app/shared/services/list.service';
import { SeenService } from 'src/app/shared/services/seen.service';

@Component({
  selector: 'app-ver-detalles',
  templateUrl: './ver-detalles.page.html',
  styleUrls: ['./ver-detalles.page.scss'],
})
export class VerDetallesPage implements OnInit {

  loadedMovie: any;
  loadedMovies: any;
  loadedLists: any;
  loadedId: string;
  loaded: boolean = false;
  seen: any;
  seenObject: any;
  option: string;
  chosenOpt: string;
  indexOfList: any;
  movieData: MovieData

  constructor(
    private router: ActivatedRoute,
    private navCtrl: NavController,
    private imdbService: ImdbService,
    private seenService: SeenService,
    public toastController: ToastController,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(pM => {
      if (!pM.has('peliculaId')) {
        this.navCtrl.navigateBack('/peliculas/tabs/ver-todas')
      }
      this.loadedId = pM.get('peliculaId');

      this.imdbService.findMovie(this.loadedId).subscribe(res => {
        this.loadedMovie = res;
        this.updateSeen();
        this.loaded = true
      })
    })

    this.loadedLists = this.listService.getAllLists();
    console.log('Hola ' + this.loadedLists)
  }

  updateSeen() {
    this.seenService.OnGetSeen(this.loadedId).subscribe({next: (bool: boolean) => {
      this.seenObject = bool;
      this.seen = this.seenObject.seen;
    }})
  }


  toggleSeen() {
    this.seen = !this.seen; 
    console.log(this.seen);
    if (this.seen == false) {
      this.option = 'no vista'
    } 
    if (this.seen == true) {
      this.option = 'vista'
    }
    this.presentToast();
    this.seenService.OnSendRequest(this.loadedId, this.seen);
  }

  onShow() {
    this.indexOfList = this.loadedLists.findIndex(obj => {
      return obj.nombreLista === this.chosenOpt
    })
    this.chosenOpt = this.chosenOpt.toLowerCase().replace(/\s/g, '-')
    console.log('Seleccionaste la opcion ' +  this.indexOfList)
    this.movieData = {
      titulo: this.loadedMovie.title,
      imagen: this.loadedMovie.image
    }
    this.onSend();
  }

  onSend(){
    this.listService.MovieToList(this.chosenOpt, this.loadedId, this.movieData)
  }
  onNew() {
    this.listService.newList(this.loadedLists[this.indexOfList], this.indexOfList)
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Marcado como ' + this.option,
      duration: 1000,
      position: 'bottom'
    });
    toast.present()
  }

  
}