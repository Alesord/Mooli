"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_peliculas_buscar_buscar_module_ts"],{

/***/ 1149:
/*!***********************************************************!*\
  !*** ./src/app/peliculas/buscar/buscar-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuscarPageRoutingModule": () => (/* binding */ BuscarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _buscar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar.page */ 3717);




const routes = [
    {
        path: '',
        component: _buscar_page__WEBPACK_IMPORTED_MODULE_0__.BuscarPage
    }
];
let BuscarPageRoutingModule = class BuscarPageRoutingModule {
};
BuscarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BuscarPageRoutingModule);



/***/ }),

/***/ 510:
/*!***************************************************!*\
  !*** ./src/app/peliculas/buscar/buscar.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuscarPageModule": () => (/* binding */ BuscarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _buscar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar-routing.module */ 1149);
/* harmony import */ var _buscar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buscar.page */ 3717);
/* harmony import */ var src_app_shared_Pipe_filtro_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Pipe/filtro.module */ 6282);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/component.module */ 5051);









let BuscarPageModule = class BuscarPageModule {
};
BuscarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _buscar_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuscarPageRoutingModule,
            src_app_shared_Pipe_filtro_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule
        ],
        declarations: [_buscar_page__WEBPACK_IMPORTED_MODULE_1__.BuscarPage]
    })
], BuscarPageModule);



/***/ }),

/***/ 3717:
/*!*************************************************!*\
  !*** ./src/app/peliculas/buscar/buscar.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuscarPage": () => (/* binding */ BuscarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _buscar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar.page.html?ngResource */ 7644);
/* harmony import */ var _buscar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buscar.page.scss?ngResource */ 5066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_component_chart_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/chart/chart.component */ 8809);
/* harmony import */ var src_app_shared_services_imdb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/imdb.service */ 8697);







let BuscarPage = class BuscarPage {
  constructor(imdbService, modalCtrl) {
    this.imdbService = imdbService;
    this.modalCtrl = modalCtrl;
    this.status = false;
    this.searchTitle = '';
    this.searchGenre = [];
    this.searchDirector = [];
    this.movie = localStorage.getItem('movie'); // console.log(navParams.get('genre')) 

    this.local = localStorage.getItem('movie');
  }

  ngOnInit() {
    if (localStorage.getItem('movie') !== null) {
      this.loadedMovies = this.imdbService.getMovieLocalStorage();
      this.status = true;
      console.log('LS');
      this.filters();
      console.log('AAJSLKDJASKLDJASLK');
      console.log(localStorage.getItem('movie'));
    } else {
      this.imdbService.getMovies().subscribe(res => {
        this.loadedMovies = res;
        console.log(this.loadedMovies);
        this.status = true;
        this.filters();
      });
      console.log('Sv');
    }

    ;
  }

  filters() {
    for (let i in this.loadedMovies) {
      for (let g of this.loadedMovies[i].genreList) {
        this.searchGenre.push(g.value);
        this.filtersGenre = [...new Set(this.searchGenre)]; // console.log(this.filtersGenre)
      }

      ;

      for (let d of this.loadedMovies[i].directorList) {
        this.searchDirector.push(d.name);
        this.filtersDirector = [...new Set(this.searchDirector)]; // console.log(this.filtersDirector)
      }

      ;
    }

    ;
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
    const text = event.target.value;
    this.searchTitle = text;
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
    this.modalCtrl.create({
      component: src_app_component_chart_chart_component__WEBPACK_IMPORTED_MODULE_2__.ChartComponent,
      componentProps: {
        generos: this.filtersGenre,
        directores: this.filtersDirector,
        status: this.status
      }
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(res => {
      if (res.role === 'confirm') {
        this.filterData = res.data;
        console.log(this.filterData); // const genre = this.filterGenre
        // return  this.filtrado = genre
        // const director = this.filterGenre
        // this.filtradoD = director
      }

      ;
    });
  }

};

BuscarPage.ctorParameters = () => [{
  type: src_app_shared_services_imdb_service__WEBPACK_IMPORTED_MODULE_3__.ImdbService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}];

BuscarPage.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonModal]
  }]
};
BuscarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-buscar',
  template: _buscar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [_buscar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
})], BuscarPage);

;

/***/ }),

/***/ 6282:
/*!**********************************************!*\
  !*** ./src/app/shared/Pipe/filtro.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _filtro_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtro.pipe */ 3609);
/* harmony import */ var _genre_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genre.pipe */ 2725);




let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _filtro_pipe__WEBPACK_IMPORTED_MODULE_0__.FiltroPipe,
            _genre_pipe__WEBPACK_IMPORTED_MODULE_1__.GeneroPipe
        ],
        exports: [
            _filtro_pipe__WEBPACK_IMPORTED_MODULE_0__.FiltroPipe,
            _genre_pipe__WEBPACK_IMPORTED_MODULE_1__.GeneroPipe
        ]
    })
], PipesModule);



/***/ }),

/***/ 3609:
/*!********************************************!*\
  !*** ./src/app/shared/Pipe/filtro.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroPipe": () => (/* binding */ FiltroPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let FiltroPipe = class FiltroPipe {
    transform(movie, text) {
        if (text.length === 0) {
            return movie;
        }
        text = text.toLocaleLowerCase();
        return movie.filter(value => {
            return value.title.toLocaleLowerCase().includes(text);
        });
    }
};
FiltroPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filtro'
    })
], FiltroPipe);



/***/ }),

/***/ 2725:
/*!*******************************************!*\
  !*** ./src/app/shared/Pipe/genre.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneroPipe": () => (/* binding */ GeneroPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let GeneroPipe = class GeneroPipe {
    transform(movie, data) {
        // const {generoUsuario , directorUsuario} = data;
        if (data === undefined) {
            return movie;
        }
        if (data.generoUsuario.length && data.directorUsuario.length) {
            return movie.filter(item => {
                if (item.genreList.find(item => item.value.includes(data.generoUsuario)) &&
                    item.directorList.find(item => item.name.includes(data.directorUsuario))) {
                    return item.genreList.find(item => item.value.includes(data.generoUsuario)) &&
                        item.directorList.find(item => item.name.includes(data.directorUsuario));
                }
            });
        }
        if (data.generoUsuario.length) {
            return movie.filter(movie => {
                return movie.genreList.find(item => item.value.includes(data.generoUsuario));
                console.log(movie.genreList.find(item => item.value.includes(data.generoUsuario)));
            });
        }
        if (data.directorUsuario.length) {
            return movie.filter(movie => {
                return movie.directorList.find(item => item.name.includes(data.directorUsuario));
            });
        }
    }
};
GeneroPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'genero'
    })
], GeneroPipe);



/***/ }),

/***/ 8697:
/*!*************************************************!*\
  !*** ./src/app/shared/services/imdb.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImdbService": () => (/* binding */ ImdbService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




let ImdbService = class ImdbService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL_BD_JSON;
        this.expUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL_BD_JSON_EXP;
        this.movies = [];
        this.movie = JSON.parse(localStorage.getItem('movie'));
    }
    getMovies() {
        return this.http.get(this.baseUrl);
    }
    findMovie(id) {
        return this.http.get(this.expUrl + '/' + id + '.json');
    }
    postM(data, id) {
        this.http.put('https://mooli-3d0bf-default-rtdb.firebaseio.com/peliculasBD/' + id + '.json', data).subscribe();
    }
    getMovieLocalStorage() {
        return this.movie;
        // console.log(this.local)
    }
    ;
    findMovieLs(id) {
        // if(this.movie.id === id){
        //   this.test = this.movie
        // }
        for (let x of this.movie) {
            if (x.id === id) {
                this.test = x;
            }
        }
        return this.test;
        // for(let x of this.movie){
        //   this.idLs.push(x.id)   
        // }
        // return this.idLs
    }
    localStorage(x) {
        // JSON.stringify
        return localStorage.setItem('movie', JSON.stringify((x)));
        // JSON.parse
        // JSON.parse(localStorage.getItem('movie'));
    }
    ;
};
ImdbService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ImdbService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ImdbService);



/***/ }),

/***/ 5066:
/*!**************************************************************!*\
  !*** ./src/app/peliculas/buscar/buscar.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXNjYXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7644:
/*!**************************************************************!*\
  !*** ./src/app/peliculas/buscar/buscar.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot=\"end\">\r\n    <ion-button href=\"/src/app/component/upper-toolbar/upper-toolbar.component.html\">\r\n      <ion-icon name=\"notifications-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n      <ion-title>Buscador</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n      <ion-searchbar placeholder=\"Buscar Pelicula\" animated (ionChange)=\"searchMovie($event)\"></ion-searchbar>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<!-- <ion-list *ngIf=\"loadedMovies.lenght === 0\">\r\n<ion-row offset=\"1\">\r\n  <ion-col size=\"6\" *ngFor=\"let i of [1,1,1,1]\">\r\n    <ion-card>\r\n      <ion-skeleton-text style=\"width: 100%; height: 190px\"></ion-skeleton-text>\r\n      <ion-skeleton-text style=\"width:70%\"></ion-skeleton-text>\r\n    </ion-card>\r\n  </ion-col>\r\n</ion-row>\r\n</ion-list> -->\r\n\r\n<!-- loadedMovies.lenght > 0 -->\r\n\r\n<ion-content>\r\n  <ion-button color=\"primary\" margin (click)=\"filterModal()\"  expand=\"block\">Filtrar</ion-button>\r\n  \r\n\r\n  <!-- *ngFor=\"let i of loadedGenres\" -->\r\n<!-- test -->\r\n  <ion-list *ngIf=\"status\">\r\n      <ion-row offset=\"1\">\r\n          <ion-col size=\"6\" *ngFor=\"let movie of loadedMovies | filtro:searchTitle | genero:filterData\">\r\n              <ion-card [routerLink]=\"['/', 'peliculas','tabs' ,'ver-todas', movie.id]\">\r\n                  <ion-img src=\"{{ movie.image }}\"></ion-img>\r\n                  <ion-card-header>\r\n                      <ion-label class=\"ion-text-center\">{{ movie.title }}</ion-label>\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                      <ion-buttons>\r\n                          <ion-button [routerLink]=\"['/', 'peliculas','tabs' ,'ver-todas', movie.id]\">\r\n                              <ion-icon name=\"arrow-forward-outline\" color=\"primary\"></ion-icon>\r\n                          </ion-button>\r\n                      </ion-buttons>\r\n                  </ion-card-content>\r\n              </ion-card>\r\n          </ion-col>\r\n      </ion-row>\r\n  </ion-list>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_peliculas_buscar_buscar_module_ts.js.map