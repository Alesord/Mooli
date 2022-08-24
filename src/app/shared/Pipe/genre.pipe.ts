import { Pipe, PipeTransform } from '@angular/core';
import { GenreList, Movie } from '../models/imdbMovies.model';


@Pipe({
  name: 'genero'
})
export class GeneroPipe implements PipeTransform {

  transform(movie: Movie[] , genre: string): Movie[] {
  
    // if( genre !== null ) {
    //     return genreList.filter(res=>{
    //         return res.value.includes(genre)
    //     });
    // }
    if(genre === undefined ){
      return movie
    }
    else
    // if(genre == movie[index].genres)
    {
      return movie.filter(res=>{
        return res.genres.includes(genre)
      })
    }
    // else
    // {
    //   return movie.filter(res=>{
    //     return res.directors.includes(genre)
    //   })
    // }
    
      
  }

}
// movie: Movie[]