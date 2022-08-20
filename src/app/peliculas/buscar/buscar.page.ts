import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckboxCustomEvent, IonModal, ModalController } from '@ionic/angular';
import { ChartComponent } from 'src/app/component/chart/chart.component';
import { ImdbService } from 'src/app/shared/services/imdb.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  status: boolean = false;
  loadedMovies: any;
  filterGenre: any;
  filterDirector: any;
  searchTitle = '';
  filtrado= '';
  filtradoD= '';
  loadedGenres: '';
  searchGenre: string[] = [];
  filtersGenre: string[] = [];
  searchDirector: string[] = [];
  filtersDirector: string[] = [];
  //   @Input() genreInput: string;
  // presentingElement = null;

  @ViewChild(IonModal) modal: IonModal;

  movie= localStorage.getItem('movie')

  constructor(
      private imdbService: ImdbService,
      public modalCtrl: ModalController,
      // private navParams: NavParams
  ) {
  }
  // console.log(navParams.get('genre')) 

  local=localStorage.getItem('movie')

  ngOnInit() {
    if(localStorage.getItem('movie') !== undefined){
      this.loadedMovies = this.imdbService.getMovieLocalStorage() 
      this.status=true
      console.log('LS')
      this.filters()

    }
    else
    {
    this.imdbService.getMovies().subscribe(res => {
    this.loadedMovies = res;
    // console.log(this.loadedMovies)
    this.status = true;
    this.filters()
    })
    console.log('Sv')
    }
    
    }


    filters(){
      for (let i in this.loadedMovies) {
        for (let g of this.loadedMovies[i].genreList) {
           // console.log(x.value)
           this.searchGenre.push(g.value)
           this.filtersGenre = [...new Set(this.searchGenre)];
           // console.log(this.filtersGenre)
          }
        for (let d of this.loadedMovies[i].directorList){
          this.searchDirector.push(d.name)
          this.filtersDirector = [...new Set(this.searchDirector)]
              // console.log(this.filtersDirector)
          }
        }
    }
    // this.presentingElement = document.querySelector('.ion-page');
  

  // searchCustomer(event){
  //   const text= event.target.value
  //   this.searchMovie = this.movie 
  //   if(text && text.trim() != ''){
  //     this.searchMovie = this.searchMovie.filter((movie: any)=>{
  //       return (movie.title.toLowercase().indexOf(text.toLowercase()) > -1)
  //     })
  //   }
  // }
  searchMovie(event) {
      const text = event.target.value
      this.searchTitle = text
  }

//   cancel() {
//       return this.modalCtrl.dismiss(null, 'cancel');
//   }

//   async saveTest(){
//     this.save()
//     return this.modalCtrl.dismiss(this.genreInput, 'confirm')
//   }

//   async save() {
//       // return this.modalCtrl.dismiss(this.name, 'confirm');
//       const { data } = await this.modal.onDidDismiss();
//       console.log(data);
//      this.filterGenre = data
//      console.log(this.filterGenre)
//   }




  filterModal() {
      // const ev = event as CheckboxCustomEvent
      this.modalCtrl
      .create({
          component: ChartComponent,
          componentProps: {
              genero: this.filtersGenre,
              director: this.filtersDirector,
              status: this.status
          }
      })
      .then(modal =>{
        modal.present();
        return modal.onDidDismiss()})
      .then((res: 
        {
          role: string;
        }) =>{
        if(res.role === 'confirm') {
          console.log(res)
          this.filterGenre = res
          console.log(this.filterGenre)

          // const genre = this.filterGenre
          // this.filtrado = genre
          // const director = this.filterGenre
          // this.filtradoD = director
        }
      })
      
    }
  }