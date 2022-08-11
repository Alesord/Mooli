import { Component, OnInit } from '@angular/core';
import { ImdbService } from 'src/app/shared/services/imdb.service';
import { SeenService } from 'src/app/shared/services/seen.service';

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
    private seenService: SeenService
    ) {}

    local=localStorage.getItem('movie')

  ngOnInit() {
    if(localStorage.getItem(this.local) !== undefined && localStorage.getItem(this.local)){
      this.loadedMovies = this.imdbService.movieLocalStorage() 
      
      console.log(this.loadedMovies[0])
    }
    else
    {
    this.imdbService.getMovies().subscribe(res => {
    this.loadedMovies = res;
    console.log(this.loadedMovies)
    this.status = true;
  })
  }
}



}
