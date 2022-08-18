import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Movie } from 'src/app/shared/models/imdbMovies.model';
import { ImdbService } from 'src/app/shared/services/imdb.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { SeenService } from 'src/app/shared/services/seen.service';

@Component({
  selector: 'app-ver-todas',
  templateUrl: './ver-todas.page.html',
  styleUrls: ['./ver-todas.page.scss'],
})
export class VerTodasPage implements OnInit, OnDestroy {

  title: number = 0
  loadedMovies: Movie[] = [];
  moviesIds: string[]
  status: boolean = false;
  unsub: Subject<void> = new Subject()
  constructor (
    private imdbService: ImdbService,
    private seenService: SeenService,
    private notificationsService: NotificationsService,
    ) {}

  ngOnInit() {
  this.imdbService.getMovies()
  .pipe(takeUntil(this.unsub))
  .subscribe(res => {
    for(let key in res){
      this.loadedMovies.push(res[key])
    }
    this.onNotificationCreate()
  })
  this.status = true;
  this.notificationsService.inicializar()
  }

  onNotificationCreate() {
    let randomNo: number = Math.floor(Math.random()*this.loadedMovies.length)
    console.log(this.loadedMovies[randomNo].title)
    let notifTitle: string = 'Ya viste la pelicula '
    let notifBody: string = 'Vela ahora mismo que te va a encantar!'
    let randomMovieTitle: string = this.loadedMovies[randomNo].title
    let randomMovieId: string = this.loadedMovies[randomNo].id
    this.notificationsService.createNotification(notifTitle, notifBody, randomMovieTitle, randomMovieId )
  }
  

  ionViewDidLeave() {
    this.unsub.next();
    this.unsub.unsubscribe();
  }

  ngOnDestroy() {
    this.unsub.next();
    this.unsub.unsubscribe();
  }

}
