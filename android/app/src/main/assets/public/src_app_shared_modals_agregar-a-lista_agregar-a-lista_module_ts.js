"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_shared_modals_agregar-a-lista_agregar-a-lista_module_ts"],{

/***/ 9955:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/modals/agregar-a-lista/agregar-a-lista-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarAListaPageRoutingModule": () => (/* binding */ AgregarAListaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _agregar_a_lista_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-a-lista.page */ 8631);




const routes = [
    {
        path: '',
        component: _agregar_a_lista_page__WEBPACK_IMPORTED_MODULE_0__.AgregarAListaPage
    }
];
let AgregarAListaPageRoutingModule = class AgregarAListaPageRoutingModule {
};
AgregarAListaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgregarAListaPageRoutingModule);



/***/ }),

/***/ 6896:
/*!*************************************************************************!*\
  !*** ./src/app/shared/modals/agregar-a-lista/agregar-a-lista.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarAListaPageModule": () => (/* binding */ AgregarAListaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _agregar_a_lista_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-a-lista-routing.module */ 9955);
/* harmony import */ var _agregar_a_lista_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar-a-lista.page */ 8631);







let AgregarAListaPageModule = class AgregarAListaPageModule {
};
AgregarAListaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _agregar_a_lista_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgregarAListaPageRoutingModule
        ],
        declarations: [_agregar_a_lista_page__WEBPACK_IMPORTED_MODULE_1__.AgregarAListaPage]
    })
], AgregarAListaPageModule);



/***/ }),

/***/ 8631:
/*!***********************************************************************!*\
  !*** ./src/app/shared/modals/agregar-a-lista/agregar-a-lista.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarAListaPage": () => (/* binding */ AgregarAListaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _agregar_a_lista_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-a-lista.page.html?ngResource */ 8224);
/* harmony import */ var _agregar_a_lista_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar-a-lista.page.scss?ngResource */ 1594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AgregarAListaPage = class AgregarAListaPage {
    constructor() { }
    ngOnInit() {
    }
};
AgregarAListaPage.ctorParameters = () => [];
AgregarAListaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-agregar-a-lista',
        template: _agregar_a_lista_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_agregar_a_lista_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgregarAListaPage);



/***/ }),

/***/ 1594:
/*!************************************************************************************!*\
  !*** ./src/app/shared/modals/agregar-a-lista/agregar-a-lista.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ3JlZ2FyLWEtbGlzdGEucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 8224:
/*!************************************************************************************!*\
  !*** ./src/app/shared/modals/agregar-a-lista/agregar-a-lista.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>agregar-a-lista</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_shared_modals_agregar-a-lista_agregar-a-lista_module_ts.js.map