import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Movie } from 'src/app/shared/models/imdbMovies.model';
import { ImdbService } from 'src/app/shared/services/imdb.service';
import { SeenService } from 'src/app/shared/services/seen.service';

@Component({
  selector: 'app-ver-detalles',
  templateUrl: './ver-detalles.page.html',
  styleUrls: ['./ver-detalles.page.scss'],
})
export class VerDetallesPage implements OnInit {

  loadedMovie: any;
  loadedMovies: any;
  loadedId: string;
  loaded: boolean = false;
  seen: any;
  seenObject: any;

  constructor(
    private router: ActivatedRoute,
    private navCtrl: NavController,
    private imdbService: ImdbService,
    private seenService: SeenService
  ) { }

  ngOnInit() {

    this.router.paramMap.subscribe(pM => {
      if (!pM.has('peliculaId')) {
        this.navCtrl.navigateBack('/peliculas/tabs/ver-todas')
      }
      this.loadedId = pM.get('peliculaId');
      console.log(this.loadedId)

      this.imdbService.findMovie(this.loadedId).subscribe(res => {
        this.loadedMovie = res;
        console.log(this.loadedMovie)
        this.updateSeen();
        this.loaded = true
      })
    })
    
  }

  toggleSeen() {
    this.seen = !this.seen; 
    console.log(this.seen);
    this.seenService.OnSendRequest(this.loadedId, this.seen);
  }

  updateSeen() {
    this.seenService.OnGetSeen(this.loadedId).subscribe({next: (bool: boolean) => {
      this.seenObject = bool;
      this.seen = this.seenObject.seen;
      console.log('El valor es ' + this.seen);
    }})
  }

}