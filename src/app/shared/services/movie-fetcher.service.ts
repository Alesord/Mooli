import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieFetcherService {

  constructor() { }

  private movieList: Movie[] = [
    {
      title: 'Piratas del caribe',
      duration: 1,
      description: 'piratas que viajan por el caribe jajaj que mas'
    },
    {
      title: 'Piratas del caribe 2',
      duration: 1,
      description: 'piratas que viajan por el caribe jajaj que mas'
    },
    {
      title: 'Piratas del caribe 3',
      duration: 1,
      description: 'piratas que viajan por el caribe jajaj que mas'
    }
  ]
  
  loadMovieList () {
    return [...this.movieList]
  }
}
