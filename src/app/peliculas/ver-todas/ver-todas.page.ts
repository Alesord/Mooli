import { Component, OnInit } from '@angular/core';

import { ImdbService } from 'src/app/shared/services/imdb.service';

@Component({
  selector: 'app-ver-todas',
  templateUrl: './ver-todas.page.html',
  styleUrls: ['./ver-todas.page.scss'],
})
export class VerTodasPage implements OnInit {

  loadedMovies: any;
  status: boolean = false;

  constructor (
    private imdbService: ImdbService,
    ) {}

    movie= localStorage.getItem('movie')

  ngOnInit() {
    if( this.movie !== null ){
      this.loadedMovies = this.imdbService.getMovieLocalStorage() 
      this.status = true;
      console.log(this.loadedMovies)
      console.log('Soy la Local Storage')

    }
    else
    {
      // console.log(this.imdbService.getItemLS())
    this.imdbService.getMovies().subscribe(res => {
    this.loadedMovies = res;
    console.log(this.loadedMovies)
    this.status = true;
    for(let i in this.loadedMovies){
      this.imdbService.localStorage(this.loadedMovies)
        
    }
    console.log('Soy el service')
  })

  }
}

}
