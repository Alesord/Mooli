"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageRoutingModule": () => (/* binding */ AuthPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page */ 3561);




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage
    }
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageModule": () => (/* binding */ AuthPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 431);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page */ 3561);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ 7225);








let AuthPageModule = class AuthPageModule {
};
AuthPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_1__.AuthPage, _register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent],
        entryComponents: [_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent]
    })
], AuthPageModule);



/***/ }),

/***/ 3561:
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPage": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _auth_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page.html?ngResource */ 2708);
/* harmony import */ var _auth_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page.scss?ngResource */ 7783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth.service */ 629);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ 7225);









let AuthPage = class AuthPage {
    constructor(authService, router, modalCtrl, alertController, loadingCtrl) {
        this.authService = authService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(3)]
            })
        });
    }
    ngOnInit() {
        this.loginForm.reset();
        console.log('El usuario está autenticado? : ' + this.authService.userAutenticado);
        console.log(this.authService.autoLogin2().then(res => {
            console.log(!!res);
            if (!!res) {
                this.router.navigateByUrl('/peliculas');
            }
        }));
    }
    onLogin() {
        this.isLoading = true;
        this.loadingCtrl.create({
            keyboardClose: true,
            spinner: 'bubbles',
            message: 'Iniciando sesión...'
        }).then(loadingEl => {
            loadingEl.present();
            this.authService.iniciarSesion(this.loginForm.value.username, this.loginForm.value.password)
                .subscribe(res => {
                this.authService.userKey = res.localId;
                console.log(this.authService.userKey);
                this.router.navigateByUrl('/peliculas');
                loadingEl.dismiss();
            }, error => {
                loadingEl.dismiss();
                let errorMsg = error.error.error.message;
                console.log(error);
                if (errorMsg === 'EMAIL_NOT_FOUND') {
                    this.showAlert('mail no registrado');
                }
                else if (errorMsg === 'INVALID_PASSWORD') {
                    this.showAlert('Contraseña incorrecta, prueba nuevamente');
                }
            });
            this.loginForm.reset();
        });
    }
    onRegister() {
        this.modalCtrl
            .create({ component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent })
            .then(modalElement => {
            modalElement.present();
            modalElement.onDidDismiss().then((data) => {
            });
        });
    }
    showAlert(msg) {
        this.alertController.create({
            header: 'Fallo al iniciar sesión',
            message: msg,
            buttons: ['Ok']
        })
            .then(alertElement => alertElement.present());
    }
};
AuthPage.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
AuthPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-auth',
        template: _auth_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_auth_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthPage);



/***/ }),

/***/ 7225:
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.html?ngResource */ 4966);
/* harmony import */ var _register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.scss?ngResource */ 8041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);







let RegisterComponent = class RegisterComponent {
    constructor(modalCtrl, authService) {
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.alreadyRegistered = false;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(5)]
            })
        });
    }
    ngOnInit() {
        console.log(this.opt);
    }
    registrar() {
        this.authService.registrar(this.registerForm.value.username, this.registerForm.value.password).subscribe(res => {
            console.log(res);
            this.modalCtrl.dismiss();
        });
    }
    onCancel() {
        this.modalCtrl.dismiss();
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
RegisterComponent.propDecorators = {
    opt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input, args: ['opt',] }]
};
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-register',
        template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterComponent);



/***/ }),

/***/ 7783:
/*!************************************************!*\
  !*** ./src/app/auth/auth.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8041:
/*!******************************************************************!*\
  !*** ./src/app/auth/register/register.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 2708:
/*!************************************************!*\
  !*** ./src/app/auth/auth.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>auth</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"loginForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size-md=\"6\" offset-md=\"3\" class=\"ion-text-center\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Username</ion-label>\r\n            <ion-input formControlName='username' autocomplete=\"new-password\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size-md=\"6\" offset-md=\"3\" class=\"ion-text-center\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Contraseña</ion-label>\r\n            <ion-input type=\"password\" formControlName='password' autocomplete=\"new-password\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"block\" color=\"primary\" (click)=\"onLogin()\" [disabled]=\"!loginForm.valid\">\r\n            Iniciar Sesion\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button (click)=\"onRegister()\">\r\n            Registrarte\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n";

/***/ }),

/***/ 4966:
/*!******************************************************************!*\
  !*** ./src/app/auth/register/register.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Registráte</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"onCancel()\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"registerForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size-md=\"6\" offset-md=\"3\" class=\"ion-text-center\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Username</ion-label>\r\n            <ion-input formControlName='username' autocomplete=\"new-password\"></ion-input>\r\n            <span slot=\"error\" *ngIf=\"alreadyRegistered\">Usuario ya registrado</span>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size-md=\"6\" offset-md=\"3\" class=\"ion-text-center\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Contraseña</ion-label>\r\n            <ion-input type=\"password\" formControlName='password' autocomplete=\"new-password\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"block\" color=\"primary\" (click)=\"registrar()\">\r\n            Registrarme\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map