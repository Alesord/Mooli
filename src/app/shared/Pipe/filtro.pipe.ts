import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/imdbMovies.model';


@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(movie: Movie[], text: string): Movie[] {
  
      if( text.length === 0 ) {
        return movie
      }

      text= text.toLocaleLowerCase();

      return movie.filter(value=>{
        return value.title.toLocaleLowerCase().includes(text)
      });
  }

}