import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Movie } from 'src/app/shared/models/imdbMovies.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CalendarService } from 'src/app/shared/services/calendar.service';
import { ImdbService } from 'src/app/shared/services/imdb.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { SeenService } from 'src/app/shared/services/seen.service';
import * as moment from 'moment';

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
  todayDate: string = moment().format('YYYY-MM-DD')
  constructor (
    private imdbService: ImdbService,
    private notificationsService: NotificationsService,
    private authService: AuthService,
    private router: Router,
    private calendarService: CalendarService
    ) {}

  ngOnInit() {
  this.imdbService.getMovies()
  .pipe(takeUntil(this.unsub))
  .subscribe(res => {
    for(let key in res){
      this.loadedMovies.push(res[key])
    }
    this.onNotificationCreate()
    this.checkReminder()
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
    this.notificationsService.createNotification(notifTitle, notifBody, randomMovieTitle )
  }
  
  checkReminder() {
    this.calendarService.onCheckReminder().subscribe(res => {
      console.log('Date retrieved: ' + !!res)
      console.log(new Date().toISOString())
      if (!!res) {
        console.log('Hay reminders')
        console.log(res)
        for (let i in res) {
          let dateToCompare = moment(res[i].date).format('YYYY-MM-DD')
          if (dateToCompare <= this.todayDate) {
            this.imdbService.findMovie(i).subscribe(nextEl => {
              let movie = JSON.parse(JSON.stringify(nextEl))
              console.log('Tienes una alerta para ver ' + movie.title)
              this.notificationsService.createNotification('Tenés un recordatorio', `${movie.title} te espera HOY para que la veas y disfrutés de una tarde de película`, movie.title)
            })
          }
        }
      } else {
        console.log('No hay reminders')
      }
    })
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.unsub.next();
    this.unsub.unsubscribe();
  }

}
