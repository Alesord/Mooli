import { Component, OnInit } from '@angular/core';
import { ImdbService } from 'src/app/shared/services/imdb.service';

@Component({
  selector: 'app-ver-todas',
  templateUrl: './ver-todas.page.html',
  styleUrls: ['./ver-todas.page.scss'],
})
export class VerTodasPage implements OnInit {

  loadedMovies: any;

  constructor (
    private imdbService: ImdbService
    ) {}

  ngOnInit() {
  this.imdbService.getMovies().subscribe(res => {
    this.loadedMovies = res;
    console.log(this.loadedMovies[0])
  })
  }




}
