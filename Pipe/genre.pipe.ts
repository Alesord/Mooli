import { Input, Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/imdbMovies.model';
import { Filtros } from '../models/movie.model';


@Pipe({
  name: 'genero'
})
export class GeneroPipe implements PipeTransform {
  


  // @Input() filterData: Filtros
  mensaje: 'La combinación que buscaste no existe'
  
  
  transform(movie: Movie[] , data: Filtros): Movie[] {
    
    // const {generoUsuario , directorUsuario} = data;

    if(data === undefined){
      return movie
    }

    if (data.generoUsuario.length && data.directorUsuario.length) {
        return movie.filter(item => {
            
            if (item.genreList.find(item => item.value.includes(data.generoUsuario)) &&
                item.directorList.find(item => item.name.includes(data.directorUsuario))
                ) {
                  return item.genreList.find(item => item.value.includes(data.generoUsuario)) &&
                item.directorList.find(item => item.name.includes(data.directorUsuario))
                }
            
        })
    }
    
    if (data.generoUsuario.length) {
        return movie.filter(movie => {
            return movie.genreList.find(item => item.value.includes(data.generoUsuario) )
            console.log(movie.genreList.find(item => item.value.includes(data.generoUsuario) ))
        })
    }
    
    if (data.directorUsuario.length) {
       return movie.filter(movie => {
            return movie.directorList.find(item => item.name.includes(data.directorUsuario) )
        })
    }
    
}



    // if(data !== undefined){
    //   console.log(data)
    //     movie.filter(res=>{
    //       res.genres.includes(data)
    //       peliculasFiltradas.push()
    //       // console.log(peliculasFiltradas)
    //     })
    //     return peliculasFiltradas
    // };
    // if(data === undefined){
    //   return movie
    // }


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
}