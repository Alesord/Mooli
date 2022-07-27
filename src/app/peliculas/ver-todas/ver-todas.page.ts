import { Component, OnInit } from '@angular/core';
import { ImdbService } from 'src/app/shared/services/imdb.service';
import { MovieFetcherService } from 'src/app/shared/services/movie-fetcher.service';
import { Movie } from 'src/app/shared/models/imdbMovies.model';

@Component({
  selector: 'app-ver-todas',
  templateUrl: './ver-todas.page.html',
  styleUrls: ['./ver-todas.page.scss'],
})
export class VerTodasPage implements OnInit {

  loadedMovies: any;

  constructor (
    private movieFetcherService: MovieFetcherService,
    private imdbService: ImdbService
    ) {}

  ngOnInit() {
  }




}
