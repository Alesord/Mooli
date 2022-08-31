"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_peliculas_peliculas_module_ts"],{

/***/ 2733:
/*!*******************************************************!*\
  !*** ./src/app/peliculas/peliculas-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeliculasPageRoutingModule": () => (/* binding */ PeliculasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _peliculas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peliculas.page */ 476);




const routes = [
    {
        path: 'tabs',
        component: _peliculas_page__WEBPACK_IMPORTED_MODULE_0__.PeliculasPage,
        children: [
            {
                path: 'ver-todas',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_services_calendar_service_ts-src_app_shared_services_imdb_service_ts-n-94c50b"), __webpack_require__.e("src_app_peliculas_ver-todas_ver-todas_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ver-todas/ver-todas.module */ 7294)).then(m => m.VerTodasPageModule)
                    },
                    {
                        path: ':peliculaId',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_services_calendar_service_ts-src_app_shared_services_imdb_service_ts-n-94c50b"), __webpack_require__.e("default-src_app_peliculas_ver-todas_ver-detalles_ver-detalles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ver-todas/ver-detalles/ver-detalles.module */ 9183)).then(m => m.VerDetallesPageModule)
                    }
                ]
            },
            {
                path: 'buscar',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_peliculas_buscar_buscar_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./buscar/buscar.module */ 510)).then(m => m.BuscarPageModule)
            },
            {
                path: 'mis-listas',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_peliculas_mis-listas_mis-listas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mis-listas/mis-listas.module */ 9655)).then(m => m.MisListasPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: '/peliculas/tabs/ver-todas',
        pathMatch: 'full'
    }
];
let PeliculasPageRoutingModule = class PeliculasPageRoutingModule {
};
PeliculasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PeliculasPageRoutingModule);



/***/ }),

/***/ 5362:
/*!***********************************************!*\
  !*** ./src/app/peliculas/peliculas.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeliculasPageModule": () => (/* binding */ PeliculasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _peliculas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peliculas-routing.module */ 2733);
/* harmony import */ var _peliculas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./peliculas.page */ 476);







let PeliculasPageModule = class PeliculasPageModule {
};
PeliculasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _peliculas_routing_module__WEBPACK_IMPORTED_MODULE_0__.PeliculasPageRoutingModule
        ],
        declarations: [_peliculas_page__WEBPACK_IMPORTED_MODULE_1__.PeliculasPage]
    })
], PeliculasPageModule);



/***/ }),

/***/ 476:
/*!*********************************************!*\
  !*** ./src/app/peliculas/peliculas.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeliculasPage": () => (/* binding */ PeliculasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _peliculas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peliculas.page.html?ngResource */ 4387);
/* harmony import */ var _peliculas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./peliculas.page.scss?ngResource */ 8508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let PeliculasPage = class PeliculasPage {
    constructor() { }
    ngOnInit() {
    }
};
PeliculasPage.ctorParameters = () => [];
PeliculasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-peliculas',
        template: _peliculas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_peliculas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PeliculasPage);



/***/ }),

/***/ 8508:
/*!**********************************************************!*\
  !*** ./src/app/peliculas/peliculas.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWxpY3VsYXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4387:
/*!**********************************************************!*\
  !*** ./src/app/peliculas/peliculas.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\r\n  <ion-tab-bar>\r\n\r\n    <ion-tab-button tab=\"ver-todas\">\r\n      <ion-label>Inicio</ion-label>\r\n      <ion-icon name=\"home-outline\"></ion-icon>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"mis-listas\">\r\n      <ion-label>Mis Listas</ion-label>\r\n      <ion-icon name=\"albums-outline\"></ion-icon>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"buscar\">\r\n      <ion-label>Buscar</ion-label>\r\n      <ion-icon name=\"search-outline\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n  </ion-tab-bar>\r\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_peliculas_peliculas_module_ts.js.map