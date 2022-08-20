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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _buscar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar-routing.module */ 1149);
/* harmony import */ var _buscar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buscar.page */ 3717);







let BuscarPageModule = class BuscarPageModule {
};
BuscarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _buscar_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuscarPageRoutingModule
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _buscar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar.page.html?ngResource */ 7644);
/* harmony import */ var _buscar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buscar.page.scss?ngResource */ 5066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let BuscarPage = class BuscarPage {
    constructor() { }
    ngOnInit() {
    }
};
BuscarPage.ctorParameters = () => [];
BuscarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-buscar',
        template: _buscar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_buscar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BuscarPage);



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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>buscar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_peliculas_buscar_buscar_module_ts.js.map