"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_peliculas_ver-todas_ver-todas_module_ts"],{

/***/ 7002:
/*!*****************************************************************!*\
  !*** ./src/app/peliculas/ver-todas/ver-todas-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerTodasPageRoutingModule": () => (/* binding */ VerTodasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ver_todas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-todas.page */ 6953);




const routes = [
    {
        path: '',
        component: _ver_todas_page__WEBPACK_IMPORTED_MODULE_0__.VerTodasPage
    },
    {
        path: 'ver-detalles',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_peliculas_ver-todas_ver-detalles_ver-detalles_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ver-detalles/ver-detalles.module */ 9183)).then(m => m.VerDetallesPageModule)
    }
];
let VerTodasPageRoutingModule = class VerTodasPageRoutingModule {
};
VerTodasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerTodasPageRoutingModule);



/***/ }),

/***/ 7294:
/*!*********************************************************!*\
  !*** ./src/app/peliculas/ver-todas/ver-todas.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerTodasPageModule": () => (/* binding */ VerTodasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ver_todas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-todas-routing.module */ 7002);
/* harmony import */ var _ver_todas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ver-todas.page */ 6953);







let VerTodasPageModule = class VerTodasPageModule {
};
VerTodasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ver_todas_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerTodasPageRoutingModule,
        ],
        declarations: [_ver_todas_page__WEBPACK_IMPORTED_MODULE_1__.VerTodasPage]
    })
], VerTodasPageModule);



/***/ }),

/***/ 6953:
/*!*******************************************************!*\
  !*** ./src/app/peliculas/ver-todas/ver-todas.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerTodasPage": () => (/* binding */ VerTodasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ver_todas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-todas.page.html?ngResource */ 7102);
/* harmony import */ var _ver_todas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ver-todas.page.scss?ngResource */ 5917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_imdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/imdb.service */ 8697);
/* harmony import */ var src_app_shared_services_seen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/seen.service */ 82);






let VerTodasPage = class VerTodasPage {
    constructor(imdbService, seenService) {
        this.imdbService = imdbService;
        this.seenService = seenService;
        this.title = 0;
        this.status = false;
    }
    ngOnInit() {
        this.loadedMovies = this.imdbService.getMovies();
        console.log(this.loadedMovies);
        this.status = true;
    }
};
VerTodasPage.ctorParameters = () => [
    { type: src_app_shared_services_imdb_service__WEBPACK_IMPORTED_MODULE_2__.ImdbService },
    { type: src_app_shared_services_seen_service__WEBPACK_IMPORTED_MODULE_3__.SeenService }
];
VerTodasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-ver-todas',
        template: _ver_todas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ver_todas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerTodasPage);



/***/ }),

/***/ 5917:
/*!********************************************************************!*\
  !*** ./src/app/peliculas/ver-todas/ver-todas.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXItdG9kYXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7102:
/*!********************************************************************!*\
  !*** ./src/app/peliculas/ver-todas/ver-todas.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Todas las Peliculas</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n <ion-grid *ngIf=\"status\">\r\n  <ion-row offset=\"1\">\r\n    <ion-col size=\"6\" *ngFor=\"let movie of loadedMovies\">\r\n      <ion-card [routerLink]=\"['/', 'peliculas','tabs' ,'ver-todas', movie.id]\">\r\n        <ion-img src=\"{{ movie.image }}\"></ion-img>\r\n        <ion-card-header>\r\n          <ion-label class=\"ion-text-center\">{{ movie.title }}</ion-label>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-buttons>\r\n            <ion-button [routerLink]=\"['/', 'peliculas','tabs' ,'ver-todas', movie.id]\">\r\n              <ion-icon name=\"arrow-forward-outline\" color=\"primary\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_peliculas_ver-todas_ver-todas_module_ts.js.map