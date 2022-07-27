import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { MovieFetcherService } from 'src/app/shared/services/movie-fetcher.service';

@Component({
  selector: 'app-ver-todas',
  templateUrl: './ver-todas.page.html',
  styleUrls: ['./ver-todas.page.scss'],
})
export class VerTodasPage implements OnInit {

  loadedMovies: Movie[];

  constructor (private movieFetcherService: MovieFetcherService) {}

  ngOnInit() {
  this.loadedMovies = this.movieFetcherService.loadMovieList();
  console.log(this.loadedMovies)
  }

  

}
