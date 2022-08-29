import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/imdbMovies.model';


@Pipe({
  name: 'genero'
})
export class GeneroPipe implements PipeTransform {

  mensaje: 'La combinación que buscaste no existe'

  
  transform(movie: Movie[] , data: string): Movie[] {
    
    let peliculasFiltradas: any[]=[]

    if(data !== undefined){
      console.log(data)
        movie.filter(res=>{
          res.genres.includes(data)
          peliculasFiltradas.push()
          // console.log(peliculasFiltradas)
        })
        return peliculasFiltradas
    };
    if(data === undefined){
      return movie
    }

  }
}
  // if( dato !== null ) {
    //     return datoList.filter(res=>{
      //         return res.value.includes(dato)
      //     });
      // }
    // else if(dato = movie[i].directors){
    //    movie.filter(res=>{
    //      res.datos.includes(dato)
    //   })
    // }
    // else if(dato == movie[i].datos && movie[i].directors){
      
    //   movie.filter(res=>{
    //     res.datos.includes(dato)
    //     res.directors.includes(dato)})
      
    //     if(movie.length >= 1){
    //     return  movie.filter(res=>{
    //       res.datos.includes(dato)
    //       res.directors.includes(dato)
    //     })
    //   }
    // }
    // else
    // {
    //   return movie.filter(res=>{
    //     return res.directors.includes(dato)
    //   })
    // }
    
      
  


// movie: Movie[]