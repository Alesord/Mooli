import { Pipe, PipeTransform } from '@angular/core';
import { GenreList } from '../models/imdbMovies.model';


@Pipe({
  name: 'genero'
})
export class GeneroPipe implements PipeTransform {

  transform(genreList: GenreList[], genre: string, ): GenreList[] {
  
    if( genre !== null ) {
        return genreList.filter(value=>{
            return value.value.includes(genre)
        });
    }

      
      
  }

}
// movie: Movie[]