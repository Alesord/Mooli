"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_peliculas_ver-todas_ver-detalles_ver-detalles_module_ts"],{

/***/ 1980:
/*!*********************************************************************************!*\
  !*** ./src/app/peliculas/ver-todas/ver-detalles/ver-detalles-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerDetallesPageRoutingModule": () => (/* binding */ VerDetallesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ver_detalles_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-detalles.page */ 1314);




const routes = [
    {
        path: '',
        component: _ver_detalles_page__WEBPACK_IMPORTED_MODULE_0__.VerDetallesPage
    }
];
let VerDetallesPageRoutingModule = class VerDetallesPageRoutingModule {
};
VerDetallesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerDetallesPageRoutingModule);



/***/ }),

/***/ 9183:
/*!*************************************************************************!*\
  !*** ./src/app/peliculas/ver-todas/ver-detalles/ver-detalles.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerDetallesPageModule": () => (/* binding */ VerDetallesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ver_detalles_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-detalles-routing.module */ 1980);
/* harmony import */ var _ver_detalles_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ver-detalles.page */ 1314);







let VerDetallesPageModule = class VerDetallesPageModule {
};
VerDetallesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ver_detalles_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerDetallesPageRoutingModule
        ],
        declarations: [_ver_detalles_page__WEBPACK_IMPORTED_MODULE_1__.VerDetallesPage]
    })
], VerDetallesPageModule);



/***/ }),

/***/ 1314:
/*!***********************************************************************!*\
  !*** ./src/app/peliculas/ver-todas/ver-detalles/ver-detalles.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerDetallesPage": () => (/* binding */ VerDetallesPage)
/* harmony export */ });
/* harmony import */ var C_Users_Alejandro_Documents_Ayi_group_Indep_Proyectos_Mooli_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ver_detalles_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ver-detalles.page.html?ngResource */ 7807);
/* harmony import */ var _ver_detalles_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ver-detalles.page.scss?ngResource */ 7004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_app_shared_services_imdb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/imdb.service */ 8697);
/* harmony import */ var src_app_shared_services_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/list.service */ 2499);
/* harmony import */ var src_app_shared_services_seen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/seen.service */ 82);
/* harmony import */ var src_app_shared_services_calendar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/calendar.service */ 8864);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);














let VerDetallesPage = class VerDetallesPage {
  // Prueba de push
  constructor(router, navCtrl, imdbService, seenService, toastController, listService, calendarService) {
    this.router = router;
    this.navCtrl = navCtrl;
    this.imdbService = imdbService;
    this.seenService = seenService;
    this.toastController = toastController;
    this.listService = listService;
    this.calendarService = calendarService;
    this.loadedLists = [];
    this.loaded = false;
    this.unsub = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
    this.todayDate = moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD');
  }

  ngOnInit() {
    this.router.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsub)).subscribe(pM => {
      if (!pM.has('peliculaId')) {
        this.navCtrl.navigateBack('/peliculas/tabs/ver-todas');
      }

      this.loadedId = pM.get('peliculaId');
      this.imdbService.findMovie(this.loadedId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsub)).subscribe(res => {
        this.loadedMovie = res;
        this.updateSeen();
        this.loaded = true;
      });
    });
    this.listService.displayExistingLists().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(response => {
      for (let k in response) {
        this.loadedLists.push(response[k]);
        console.log(this.loadedLists);
      }
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsub)).subscribe();
  }

  updateSeen() {
    this.seenService.OnGetSeen(this.loadedId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsub)).subscribe({
      next: bool => {
        this.seenObject = bool;
        this.seen = this.seenObject.seen;
      }
    });
  }

  toggleSeen() {
    this.seen = !this.seen;
    console.log(this.seen);

    if (this.seen == false) {
      this.option = 'no vista';
    }

    if (this.seen == true) {
      this.option = 'vista';
    }

    this.presentToast();
    this.seenService.OnSendRequest(this.loadedId, this.seen).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsub)).subscribe();
  }

  onShow() {
    this.indexOfList = this.loadedLists.findIndex(obj => {
      return obj.nombreLista === this.chosenOpt;
    });
    this.chosenOpt = this.chosenOpt.toLowerCase().replace(/\s/g, '-');
    console.log('Seleccionaste la opcion ' + this.indexOfList);
    this.movieData = {
      titulo: this.loadedMovie.title,
      imagen: this.loadedMovie.image
    };
    this.onSend();
  }

  setReminder() {
    console.log(this.date);
    console.log('Reminder set to: ' + moment__WEBPACK_IMPORTED_MODULE_7__(this.date).format('YYYY-MM-DD'));
    this.calendarService.onAddReminder(this.loadedId, this.date).subscribe(next => {
      console.log(next);
      this.confirm();
    });
  }

  onSend() {
    this.listService.MovieToList(this.chosenOpt, this.loadedId, this.movieData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsub)).subscribe();
  }

  presentToast() {
    var _this = this;

    return (0,C_Users_Alejandro_Documents_Ayi_group_Indep_Proyectos_Mooli_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: 'Marcado como ' + _this.option,
        duration: 1000,
        position: 'bottom'
      });
      toast.present();
    })();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event) {
    const ev = event;

    if (ev.detail.role === 'confirm') {
      console.log(this.date);
    }
  }

  ngOnDestroy() {
    this.unsub.next();
    this.unsub.unsubscribe();
  }

};

VerDetallesPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController
}, {
  type: src_app_shared_services_imdb_service__WEBPACK_IMPORTED_MODULE_3__.ImdbService
}, {
  type: src_app_shared_services_seen_service__WEBPACK_IMPORTED_MODULE_5__.SeenService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
}, {
  type: src_app_shared_services_list_service__WEBPACK_IMPORTED_MODULE_4__.ListService
}, {
  type: src_app_shared_services_calendar_service__WEBPACK_IMPORTED_MODULE_6__.CalendarService
}];

VerDetallesPage.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonModal]
  }]
};
VerDetallesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-ver-detalles',
  template: _ver_detalles_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_ver_detalles_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], VerDetallesPage);


/***/ }),

/***/ 2499:
/*!*************************************************!*\
  !*** ./src/app/shared/services/list.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListService": () => (/* binding */ ListService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 629);






let ListService = class ListService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.userId = this.authService.userKey;
        this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL_USERS}/${this.userId}/listas/`;
        this.plainUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL_USERS}/${this.userId}/listas.json`;
    }
    OnCreateNewList(data, folderName) {
        console.log('poniendo lista en ' + this.baseUrl + folderName + '.json', data);
        return this.http.put(this.baseUrl + folderName + '.json', data);
    }
    deleteList(listId) {
        return this.http.delete(this.baseUrl + listId + '.json');
    }
    removeMovie(listId, movieId) {
        console.log(movieId);
        console.log(`${this.baseUrl}${listId}/contenido/${movieId}.json`);
        return this.http.delete(`${this.baseUrl}${listId}/contenido/${movieId}.json`);
    }
    displayExistingLists() {
        return this.http.get(this.plainUrl);
    }
    getAllLists() {
        let array = [];
        let arrayX = [];
        this.http.get(this.plainUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
            for (let k in response) {
                array.push(response[k]);
            }
            for (let x in array) {
                arrayX.push({
                    nombre: array[x].nombre,
                    contenido: []
                });
                for (let cont in array[x].contenido) {
                    if (cont !== '0') { //Filtro para que no tire el 0 que se genera al crear una lista nueva siempre
                        arrayX[x].contenido.push({
                            id: cont,
                            imagen: array[x].contenido[cont].imagen,
                            titulo: array[x].contenido[cont].titulo
                        });
                    }
                }
            }
        })).subscribe();
        return arrayX;
    }
    getList(ind, movieId) {
        const gotList = [];
        let exist = false;
        this.http.get(this.plainUrl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            for (const key in res[ind].listContent) {
                gotList.push(res[ind].listContent[key]);
                console.log(gotList);
                if (res[ind].listContent[key] === movieId) {
                    exist = true;
                }
            }
            console.log('El id es ' + movieId);
            if (exist === false) {
                console.log('Primero' + [{ ...gotList }]);
                gotList.push(movieId);
                console.log('Segundo' + gotList);
            }
            console.log('esta peli ' + exist);
            let x = gotList.reduce(function (s, a) {
                s.push(a);
                console.log('coso ' + s);
                return s;
            }, []);
            console.log(x);
            this.http.put(this.baseUrl + ind + '/listContent.json', x).subscribe({ next: respuesta => {
                } });
        })).subscribe();
    }
    MovieToList(chosenOpt, loadedId, data) {
        return this.http.put(this.baseUrl + '/' + chosenOpt + '/contenido/' + loadedId + '.json', data);
    }
};
ListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService }
];
ListService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], ListService);



/***/ }),

/***/ 82:
/*!*************************************************!*\
  !*** ./src/app/shared/services/seen.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeenService": () => (/* binding */ SeenService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 629);





let SeenService = class SeenService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        // URL_BD_SEEN: `${URL_MOOLI}/users/-N8PnJ6s8FDh77vUleJp/seenList/`,
        this.userId = this.authService.userKey;
        this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL_USERS}/${this.userId}/seenList/`;
    }
    OnSendRequest(id, seen) {
        return this.http.patch(this.baseUrl + id + '.json', { seen });
    }
    OnGetSeen(id) {
        return this.http.get(this.baseUrl + id + '.json');
    }
};
SeenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService }
];
SeenService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], SeenService);



/***/ }),

/***/ 7004:
/*!************************************************************************************!*\
  !*** ./src/app/peliculas/ver-todas/ver-detalles/ver-detalles.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".secondary-text {\n  color: gray;\n}\n\n.toggledClass {\n  color: aqua;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlci1kZXRhbGxlcy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxBeWklMjBncm91cFxcSW5kZXBcXFByb3llY3Rvc1xcTW9vbGlcXHNyY1xcYXBwXFxwZWxpY3VsYXNcXHZlci10b2Rhc1xcdmVyLWRldGFsbGVzXFx2ZXItZGV0YWxsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InZlci1kZXRhbGxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Vjb25kYXJ5LXRleHQge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi50b2dnbGVkQ2xhc3Mge1xyXG4gICAgY29sb3I6IGFxdWE7XHJcbn0iLCIuc2Vjb25kYXJ5LXRleHQge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnRvZ2dsZWRDbGFzcyB7XG4gIGNvbG9yOiBhcXVhO1xufSJdfQ== */";

/***/ }),

/***/ 7807:
/*!************************************************************************************!*\
  !*** ./src/app/peliculas/ver-todas/ver-detalles/ver-detalles.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/peliculas/tabs/ver-todas\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-select placeholder=\"Añadir a lista\" [(ngModel)]=\"chosenOpt\" (ionChange)=\"onShow()\" detail=\"false\">\r\n          <div *ngFor=\"let item of loadedLists\">\r\n            <ion-select-option value=\"{{ item.nombre }}\">{{ item.nombre }}</ion-select-option>\r\n          </div>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-buttons slot=\"end\" *ngIf=\"loaded\">\r\n      <ion-button id=\"open-modal\" expand=\"block\">\r\n        <ion-icon name=\"calendar-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button (click)=\"toggleSeen()\" [ngClass]=\"{toggledClass: seen == true}\">\r\n        <ion-icon name=\"checkbox-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Contenido -->\r\n<ion-content *ngIf=\"loaded\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"7\">\r\n        <ion-card>\r\n          <ion-img [src]=loadedMovie.image>\r\n          </ion-img>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"5\">\r\n        <h3>\r\n          {{ loadedMovie.title }}\r\n        </h3>\r\n        <label class=\"secondary-text\">\r\n          {{ loadedMovie.runtimeStr }}\r\n          <br>\r\n          {{ loadedMovie.genres}}\r\n        </label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <h4>De qué trata?</h4>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            {{ loadedMovie.plot }}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!--Inline modal-->\r\n  <ion-modal trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\">\r\n    <ng-template>\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-buttons slot=\"start\">\r\n            <ion-button (click)=\"cancel()\">Cancelar</ion-button>\r\n          </ion-buttons>\r\n          <ion-title>Crear recordatorio</ion-title>\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"setReminder()\" [strong]=\"true\">Confirmar</ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content class=\"ion-padding\">\r\n        <ion-item>\r\n          <ion-datetime \r\n          displayFormat=\"MM/DD/YYYY\" \r\n          pickerFormat=\"MMMM YYYY\"\r\n          min=\"{{ todayDate }}\"\r\n          [(ngModel)]=\"date\"\r\n          ></ion-datetime>\r\n        </ion-item>\r\n      </ion-content>\r\n    </ng-template>\r\n  </ion-modal>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_peliculas_ver-todas_ver-detalles_ver-detalles_module_ts.js.map