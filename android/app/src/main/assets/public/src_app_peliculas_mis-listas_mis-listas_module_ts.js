"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_peliculas_mis-listas_mis-listas_module_ts"],{

/***/ 9749:
/*!***************************************************************************!*\
  !*** ./src/app/peliculas/mis-listas/crear-lista/crear-lista.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearListaComponent": () => (/* binding */ CrearListaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _crear_lista_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-lista.component.html?ngResource */ 4065);
/* harmony import */ var _crear_lista_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-lista.component.scss?ngResource */ 564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_shared_services_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/list.service */ 2499);







let CrearListaComponent = class CrearListaComponent {
    constructor(modalCtrl, listService) {
        this.modalCtrl = modalCtrl;
        this.listService = listService;
        this.listaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            nombreLista: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            contenidoLista: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl()
        });
    }
    ngOnInit() { }
    onCancel() {
        this.modalCtrl.dismiss();
    }
    onSubmit() {
        this.nameId = this.listaForm.get('nombreLista').value.toLowerCase().replace(/\s/g, '-');
        console.log(this.nameId);
        this.listaNueva = {
            nombre: this.listaForm.value.nombreLista,
            contenido: ['']
        };
        this.listService.nuevaLista(this.listaNueva, this.nameId);
        this.nameId = '';
        this.listaForm.reset;
        this.onCancel();
    }
};
CrearListaComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_shared_services_list_service__WEBPACK_IMPORTED_MODULE_2__.ListService }
];
CrearListaComponent.propDecorators = {
    idUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
CrearListaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-crear-lista',
        template: _crear_lista_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_crear_lista_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CrearListaComponent);



/***/ }),

/***/ 2081:
/*!*******************************************************************!*\
  !*** ./src/app/peliculas/mis-listas/mis-listas-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisListasPageRoutingModule": () => (/* binding */ MisListasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _mis_listas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mis-listas.page */ 7083);




const routes = [
    {
        path: '',
        component: _mis_listas_page__WEBPACK_IMPORTED_MODULE_0__.MisListasPage
    }
];
let MisListasPageRoutingModule = class MisListasPageRoutingModule {
};
MisListasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MisListasPageRoutingModule);



/***/ }),

/***/ 9655:
/*!***********************************************************!*\
  !*** ./src/app/peliculas/mis-listas/mis-listas.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisListasPageModule": () => (/* binding */ MisListasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mis_listas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mis-listas-routing.module */ 2081);
/* harmony import */ var _mis_listas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mis-listas.page */ 7083);
/* harmony import */ var _crear_lista_crear_lista_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crear-lista/crear-lista.component */ 9749);








let MisListasPageModule = class MisListasPageModule {
};
MisListasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _mis_listas_routing_module__WEBPACK_IMPORTED_MODULE_0__.MisListasPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [
            _mis_listas_page__WEBPACK_IMPORTED_MODULE_1__.MisListasPage,
            _crear_lista_crear_lista_component__WEBPACK_IMPORTED_MODULE_2__.CrearListaComponent
        ],
        entryComponents: [_crear_lista_crear_lista_component__WEBPACK_IMPORTED_MODULE_2__.CrearListaComponent]
    })
], MisListasPageModule);



/***/ }),

/***/ 7083:
/*!*********************************************************!*\
  !*** ./src/app/peliculas/mis-listas/mis-listas.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisListasPage": () => (/* binding */ MisListasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mis_listas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mis-listas.page.html?ngResource */ 9198);
/* harmony import */ var _mis_listas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mis-listas.page.scss?ngResource */ 4061);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_shared_services_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/list.service */ 2499);
/* harmony import */ var _crear_lista_crear_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-lista/crear-lista.component */ 9749);








let MisListasPage = class MisListasPage {
    constructor(router, listService, modalCtrl) {
        this.router = router;
        this.listService = listService;
        this.modalCtrl = modalCtrl;
        this.loadedMovies = [];
        this.allIds = [];
        this.isLoaded = false;
        this.userKey = 'usuario1h18';
    }
    ngOnInit() {
        this.loadedLists = this.listService.getAllLists2();
        this.check();
        this.isLoaded = true;
    }
    onAddList() {
        this.modalCtrl
            .create({ component: _crear_lista_crear_lista_component__WEBPACK_IMPORTED_MODULE_3__.CrearListaComponent, componentProps: { idUser: this.userKey } })
            .then(modalElement => {
            modalElement.present();
        });
    }
    check() {
        console.log('a');
        console.log(this.loadedLists);
    }
    onOpenList() {
    }
};
MisListasPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_shared_services_list_service__WEBPACK_IMPORTED_MODULE_2__.ListService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
MisListasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-mis-listas',
        template: _mis_listas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mis_listas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MisListasPage);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);





let ListService = class ListService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL_BD_LIST;
        this.plainUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL_BD_LIST_PLAIN;
        this.userId = 'a1';
        this.allLists = [
            {
                listName: 'Lista por ver',
                listContent: [
                    'tt0441773',
                    'tt10648342',
                    'tt5251328',
                    'tt9411972'
                ]
            },
            {
                listName: 'Lista de las buenas',
                listContent: [
                    'tt10648342',
                    'tt1649418'
                ]
            },
        ];
    }
    getMyList() {
        console.log(this.allLists + 'askdjaslkdjaslk');
        return this.allLists;
    }
    nuevaLista(data, folderName) {
        this.http.put(this.baseUrl + folderName + '.json', data).subscribe({ next: respuesta => {
                console.log(respuesta);
            } });
    }
    newList(data, id) {
        this.http.put(this.baseUrl + id + '.json', data).subscribe({ next: respuesta => {
            } });
    }
    newListDeep(data, id) {
        this.http.put(this.baseUrl + id + '/listContent.json', data).subscribe({ next: respuesta => {
            } });
    }
    getAllLists() {
        let array = [];
        this.http.get(this.plainUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            for (let k in response) {
                array.push(response[k]);
            }
        })).subscribe();
        return array;
    }
    getAllLists2() {
        let array = [];
        let arrayX = [];
        this.http.get(this.plainUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
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
        console.log(arrayX);
        return arrayX;
    }
    getList(ind, movieId) {
        const gotList = [];
        let exist = false;
        this.http.get(this.plainUrl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
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
            this.newListDeep(x, ind);
        })).subscribe();
    }
    MovieToList(chosenOpt, loadedId, data) {
        this.http.put(this.baseUrl + '/' + chosenOpt + '/contenido/' + loadedId + '.json', data).subscribe({ next: respuesta => {
                console.log(respuesta);
            } });
    }
};
ListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ListService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ListService);



/***/ }),

/***/ 564:
/*!****************************************************************************************!*\
  !*** ./src/app/peliculas/mis-listas/crear-lista/crear-lista.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci1saXN0YS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 4061:
/*!**********************************************************************!*\
  !*** ./src/app/peliculas/mis-listas/mis-listas.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXMtbGlzdGFzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4065:
/*!****************************************************************************************!*\
  !*** ./src/app/peliculas/mis-listas/crear-lista/crear-lista.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Crea tu lista</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"onCancel()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <form [formGroup]=\"listaForm\" (ngSubmit)=\"onSubmit()\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Ingresá el nombre de tu lista</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"nombreLista\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Colocá una imagen</ion-label>\r\n              <ion-input></ion-input>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"6\" offset=\"4\">\r\n          <ion-buttons color=\"primary\">\r\n            <ion-button type=\"submit\" color=\"primary\">\r\n              <ion-icon name=\"arrow-forward-sharp\"></ion-icon>Crear\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </ion-grid>\r\n</ion-content>";

/***/ }),

/***/ 9198:
/*!**********************************************************************!*\
  !*** ./src/app/peliculas/mis-listas/mis-listas.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Ver mis listas</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"onAddList()\">\r\n        <ion-icon name=\"add-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-accordion-group *ngFor=\"let list of loadedLists\">\r\n    <ion-accordion value=\"first\">\r\n      <ion-item slot=\"header\" color=\"light\">\r\n        <ion-label>{{list.nombre}}</ion-label>\r\n      </ion-item>\r\n      <div class=\"ion-padding\" slot=\"content\" *ngFor=\"let content of list.contenido\" [routerLink]=\"['/', 'peliculas','tabs' ,'ver-todas', content.id]\">\r\n          {{ content.titulo }}\r\n      </div>\r\n    </ion-accordion>\r\n  </ion-accordion-group>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_peliculas_mis-listas_mis-listas_module_ts.js.map