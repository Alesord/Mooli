import { Component, OnInit } from '@angular/core';
import { ImdbService } from 'src/app/shared/services/imdb.service';
import { SeenService } from 'src/app/shared/services/seen.service';

@Component({
  selector: 'app-ver-todas',
  templateUrl: './ver-todas.page.html',
  styleUrls: ['./ver-todas.page.scss'],
})
export class VerTodasPage implements OnInit {

  title: number = 0
  loadedMovies: any;
  loadedMovies2: any[];
  status: boolean = false;

  constructor (
    private imdbService: ImdbService,
    private seenService: SeenService
    ) {}

  ngOnInit() {
  this.loadedMovies = this.imdbService.getMovies()
  console.log(this.loadedMovies)
  this.status = true;
  }




}
