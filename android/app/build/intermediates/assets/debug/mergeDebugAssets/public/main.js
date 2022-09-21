(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.guard */ 3870);




const routes = [
    {
        path: '',
        redirectTo: 'peliculas',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then(m => m.AuthPageModule)
    },
    {
        path: 'peliculas',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_peliculas_peliculas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./peliculas/peliculas.module */ 5362)).then(m => m.PeliculasPageModule),
        canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'agregar-a-lista',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_shared_modals_agregar-a-lista_agregar-a-lista_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shared/modals/agregar-a-lista/agregar-a-lista.module */ 6896)).then(m => m.AgregarAListaPageModule),
        canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/auth.service */ 629);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/network */ 4984);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);







let AppComponent = class AppComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.isAuth = !this.authService.estado;
        console.log(this.isAuth);
        _capacitor_network__WEBPACK_IMPORTED_MODULE_3__.Network.addListener('networkStatusChange', status => {
            console.log('Network status changed', status);
            this.router.navigateByUrl('/peliculas/tabs/mis-listas');
            console.log('All is gutt');
            console.log(status.connected);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/component.module */ 5051);
/* harmony import */ var _shared_services_level_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/level-up.service */ 9916);
/* harmony import */ var _shared_services_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/network.service */ 776);











let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy },
            _shared_services_level_up_service__WEBPACK_IMPORTED_MODULE_3__.LevelUpService,
            _shared_services_network_service__WEBPACK_IMPORTED_MODULE_4__.NetworkService
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3870:
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/auth.service */ 629);






let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canLoad(route, segments) {
        return this.authService.userIsAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(isAuthenticated => {
            console.log('Entrando en auth guard');
            if (!isAuthenticated) {
                console.log('Trying autologin');
                console.log(this.authService.autoLogin2());
                return this.authService.autoLogin2().then(data => {
                    console.log('la data es: ' + data);
                    return data;
                });
            }
            else {
                console.log((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(isAuthenticated));
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(isAuthenticated);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(isAuthenticated => {
            console.log(isAuthenticated);
            if (!isAuthenticated) {
                this.router.navigateByUrl('/auth');
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 8809:
/*!****************************************************!*\
  !*** ./src/app/component/chart/chart.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartComponent": () => (/* binding */ ChartComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _chart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart.component.html?ngResource */ 9297);
/* harmony import */ var _chart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart.component.scss?ngResource */ 5933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ChartComponent = class ChartComponent {
    constructor() { }
    ngOnInit() { }
};
ChartComponent.ctorParameters = () => [];
ChartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-chart',
        template: _chart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChartComponent);



/***/ }),

/***/ 5051:
/*!***********************************************!*\
  !*** ./src/app/component/component.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentModule": () => (/* binding */ ComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart/chart.component */ 8809);
/* harmony import */ var _side_drawer_side_drawer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-drawer/side-drawer.component */ 9869);
/* harmony import */ var _upper_toolbar_upper_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upper-toolbar/upper-toolbar.component */ 1562);
/* harmony import */ var _side_drawer_nivel2_nivel2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-drawer/nivel2/nivel2.component */ 5468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);










let ComponentModule = class ComponentModule {
};
ComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _chart_chart_component__WEBPACK_IMPORTED_MODULE_0__.ChartComponent,
            _side_drawer_side_drawer_component__WEBPACK_IMPORTED_MODULE_1__.SideDrawerComponent,
            _upper_toolbar_upper_toolbar_component__WEBPACK_IMPORTED_MODULE_2__.UpperToolbarComponent,
            _side_drawer_nivel2_nivel2_component__WEBPACK_IMPORTED_MODULE_3__.Nivel2Component
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
        ],
        exports: [_side_drawer_side_drawer_component__WEBPACK_IMPORTED_MODULE_1__.SideDrawerComponent]
    })
], ComponentModule);



/***/ }),

/***/ 5468:
/*!******************************************************************!*\
  !*** ./src/app/component/side-drawer/nivel2/nivel2.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nivel2Component": () => (/* binding */ Nivel2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nivel2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nivel2.component.html?ngResource */ 2572);
/* harmony import */ var _nivel2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nivel2.component.scss?ngResource */ 6640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_shared_services_level_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/level-up.service */ 9916);







let Nivel2Component = class Nivel2Component {
    constructor(modalCtrl, levelUp, loadingCtrl, alertController) {
        this.modalCtrl = modalCtrl;
        this.levelUp = levelUp;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.level2AuthForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(4)]
            })
        });
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.levelUp.checkTokenExist().subscribe(res => {
            let resParsed = JSON.parse(JSON.stringify(res)).token;
            if (!!resParsed) {
                console.log('Existe');
                this.tokenExist = true;
                console.log(this.token);
            }
            else {
                console.log('No existe');
                this.tokenExist = false;
            }
        });
    }
    onCancel() {
        this.modalCtrl.dismiss();
    }
    onTokenLogin() {
        this.loadingCtrl.create({
            keyboardClose: true,
            spinner: 'bubbles',
            message: 'Cargando cambio de acceso...'
        }).then(loadingEl => {
            loadingEl.present();
            if (this.tokenExist) {
                if (this.token == this.level2AuthForm.value.password) {
                    this.levelUp.levelUp();
                    loadingEl.dismiss();
                }
                else {
                    loadingEl.dismiss();
                    this.showAlert();
                }
            }
            else {
                this.levelUp.setLevelUpToken(this.level2AuthForm.value.password).subscribe(next => {
                    this.levelUp.levelUp();
                    loadingEl.dismiss();
                });
            }
        });
        this.modalCtrl.dismiss();
    }
    showAlert() {
        this.alertController.create({
            header: 'Fallo al subir nivel',
            message: `Token incorrecto`,
            buttons: ['Ok']
        })
            .then(alertElement => alertElement.present());
    }
};
Nivel2Component.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_shared_services_level_up_service__WEBPACK_IMPORTED_MODULE_2__.LevelUpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
Nivel2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-nivel2',
        template: _nivel2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nivel2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Nivel2Component);



/***/ }),

/***/ 9869:
/*!****************************************************************!*\
  !*** ./src/app/component/side-drawer/side-drawer.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideDrawerComponent": () => (/* binding */ SideDrawerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _side_drawer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-drawer.component.html?ngResource */ 6490);
/* harmony import */ var _side_drawer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-drawer.component.scss?ngResource */ 6681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var src_app_shared_services_fotos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/fotos.service */ 4203);
/* harmony import */ var src_app_shared_services_level_up_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/level-up.service */ 9916);
/* harmony import */ var _nivel2_nivel2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nivel2/nivel2.component */ 5468);










let SideDrawerComponent = class SideDrawerComponent {
    constructor(modalCtrl, authService, router, levelUp, fotoService) {
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.router = router;
        this.levelUp = levelUp;
        this.fotoService = fotoService;
    }
    ngOnInit() {
        this.fotoService.loadSaved();
        this.foto = this.fotoService.fotoPerfil;
        this.authService.user.subscribe(user => {
            if (user) {
                this.usuario = user;
                this.nickname = user.email.split('@')[0];
            }
            // this.fotosService.getFoto() No sirve porque no esta guardada en localhost
        });
    }
    ionViewDidLeave() {
        console.log('HOLAAAAAAAAAAAAAAAAAAA');
    }
    onLevel2() {
        this.modalCtrl
            .create({ component: _nivel2_nivel2_component__WEBPACK_IMPORTED_MODULE_5__.Nivel2Component })
            .then(modalElement => {
            modalElement.present();
            modalElement.onDidDismiss().then((data) => {
            });
        });
    }
    goToProfile() {
        this.router.navigateByUrl('/peliculas/tabs/mi-perfil');
    }
    onLogout() {
        this.authService.logout();
        this.router.navigateByUrl('/auth');
        this.levelUp.levelDown();
    }
};
SideDrawerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_shared_services_level_up_service__WEBPACK_IMPORTED_MODULE_4__.LevelUpService },
    { type: src_app_shared_services_fotos_service__WEBPACK_IMPORTED_MODULE_3__.FotosService }
];
SideDrawerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-side-drawer',
        template: _side_drawer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_side_drawer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SideDrawerComponent);



/***/ }),

/***/ 1562:
/*!********************************************************************!*\
  !*** ./src/app/component/upper-toolbar/upper-toolbar.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpperToolbarComponent": () => (/* binding */ UpperToolbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _upper_toolbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upper-toolbar.component.html?ngResource */ 4481);
/* harmony import */ var _upper_toolbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upper-toolbar.component.scss?ngResource */ 8815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let UpperToolbarComponent = class UpperToolbarComponent {
    constructor() { }
    ngOnInit() { }
};
UpperToolbarComponent.ctorParameters = () => [];
UpperToolbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-upper-toolbar',
        template: _upper_toolbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_upper_toolbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpperToolbarComponent);



/***/ }),

/***/ 3709:
/*!*********************************************!*\
  !*** ./src/app/shared/models/user.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Usuario": () => (/* binding */ Usuario)
/* harmony export */ });
class Usuario {
    constructor(userId, email, _token, tokenExpDate) {
        this.userId = userId;
        this.email = email;
        this._token = _token;
        this.tokenExpDate = tokenExpDate;
    }
    get token() {
        if (!this.tokenExpDate || this.tokenExpDate <= new Date()) {
            return null;
        }
        return this._token;
    }
}


/***/ }),

/***/ 629:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var C_Users_Alejandro_Documents_Ayi_group_Indep_Proyectos_Mooli_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model */ 3709);










let AuthService = class AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.URL_FLAT;
    this.firebaseAPIKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseAPIKey;
    this._userAutenticado = false;
    this.userKey = '';
    this._user = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this.estado = this._user.asObservable();
  }

  get userIsAuthenticated() {
    return this._user.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(user => {
      console.log(user);

      if (user) {
        console.log('HOLA HOLA HOLA');
        return !!user.token;
      } else {
        console.log('FALSO FALSO FALSO');
        return false;
      }
    }));
  }

  get userAutenticado() {
    return this._userAutenticado;
  }

  get userId() {
    return this._user.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(usuario => {
      if (usuario) {
        console.log('Existe un usuario, retornando');
        return usuario.userId;
      } else {
        return false;
      }
    }));
  }

  get user() {
    return this._user.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(usuario => {
      if (usuario) {
        console.log('Existe un usuario, retornando');
        console.log(usuario);
        return usuario;
      } else {
        return false;
      }
    }));
  }

  logout() {
    this._userAutenticado = false;
    _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.remove({
      key: 'authData'
    });
    this.router.navigateByUrl('/auth');
  }

  registrar(email, password) {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseAPIKey}`, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(this.setUserData.bind(this)));
  }

  iniciarSesion(email, password) {
    this._userAutenticado = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.firebaseAPIKey}`, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(this.setUserData.bind(this)));
  }

  autoLogin2() {
    var _this = this;

    return (0,C_Users_Alejandro_Documents_Ayi_group_Indep_Proyectos_Mooli_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Intentando autologin');
      const storedData = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({
        key: 'authData'
      });
      const loadedData = JSON.parse(storedData.value);

      if (!loadedData) {
        console.log('No data');
      } else {
        console.log('Si hay data, cargando...');
        const expirationTime = new Date(loadedData.tokenExpDate);

        if (expirationTime <= new Date()) {
          console.log('Token expirado.');
          _this._userAutenticado = false;
          return false;
        } //Se crea una constante usuario con los datos traidos, por ahora solo se usa el userId


        const usuario = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__.Usuario(loadedData.userId, loadedData.email, loadedData.token, expirationTime);
        console.log(loadedData.userId);
        _this.userKey = loadedData.userId;

        if (!_this._user.getValue()) {
          _this._user.next(usuario);

          console.log(_this._user);
          _this._userAutenticado = true;
        }

        return usuario ? true : false;
      }
    })();
  }

  storeAuthData(userId, token, tokenExpDate, email) {
    const data = {
      userId: userId,
      token: token,
      tokenExpDate: tokenExpDate,
      email: email
    };
    _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.set({
      key: 'authData',
      value: JSON.stringify(data)
    });
  }

  setUserData(userData) {
    const expirationTime = new Date(new Date().getTime() + +userData.expiresIn * 1000);

    this._user.next(new _models_user_model__WEBPACK_IMPORTED_MODULE_3__.Usuario(userData.localId, userData.email, userData.idToken, expirationTime));

    this.storeAuthData(userData.localId, userData.idToken, expirationTime.toISOString(), userData.email);
  }

};

AuthService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}];

AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
  providedIn: 'root'
})], AuthService);


/***/ }),

/***/ 4203:
/*!**************************************************!*\
  !*** ./src/app/shared/services/fotos.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotosService": () => (/* binding */ FotosService)
/* harmony export */ });
/* harmony import */ var C_Users_Alejandro_Documents_Ayi_group_Indep_Proyectos_Mooli_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/filesystem */ 1662);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ 629);









let FotosService = class FotosService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.photos = [];
    this.PHOTO_STORAGE = 'photos';
    this.fotoPerfil = {
      filepath: 'soon...',
      webviewPath: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg'
    };

    this.convertBlobToBase64 = blob => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.readAsDataURL(blob);
    });
  }

  addNewToGallery(src) {
    var _this = this;

    return (0,C_Users_Alejandro_Documents_Ayi_group_Indep_Proyectos_Mooli_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //Agregar Urls para uso futuro
      _this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.URL_USERS}/${_this.authService.userKey}/datos.json`;
      _this.urlnj = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.URL_USERS}/${_this.authService.userKey}/datos`; // Take a photo

      const fotoCapturada = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto({
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Uri,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource[src],
        quality: 100
      });
      _this.fotoPerfil = {
        filepath: "soon...",
        webviewPath: fotoCapturada.webPath
      }; //Guardar img y añadir en coleccion

      _this.fotoPerfil = yield _this.savePicture(fotoCapturada);
      _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.set({
        key: _this.PHOTO_STORAGE,
        value: JSON.stringify(_this.fotoPerfil)
      });

      _this.uploadPicture(_this.fotoPerfil).subscribe();
    })();
  }

  savePicture(uFoto) {
    var _this2 = this;

    return (0,C_Users_Alejandro_Documents_Ayi_group_Indep_Proyectos_Mooli_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const base64Data = yield _this2.readAsBase64(uFoto);
      const fileName = new Date().getTime() + '.jpeg';
      const savedFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.writeFile({
        path: fileName,
        data: base64Data,
        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data
      });
      return {
        filepath: fileName,
        webviewPath: uFoto.webPath
      };
    })();
  }

  readAsBase64(photo) {
    var _this3 = this;

    return (0,C_Users_Alejandro_Documents_Ayi_group_Indep_Proyectos_Mooli_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = yield fetch(photo.webPath);
      const blob = yield response.blob();
      return yield _this3.convertBlobToBase64(blob);
    })();
  }

  loadSaved() {
    var _this4 = this;

    return (0,C_Users_Alejandro_Documents_Ayi_group_Indep_Proyectos_Mooli_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const photoList = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.get({
        key: _this4.PHOTO_STORAGE
      });
      let x = JSON.parse(photoList.value);
      const readFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
        path: x.filepath,
        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data
      });
      _this4.fotoPerfil.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    })();
  }

  uploadPicture(data) {
    return this.http.put(`${this.urlnj}/imagen.json`, data);
  }

  deletePicture() {
    this.fotoPerfil = {
      filepath: 'soon...',
      webviewPath: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg'
    };
  }

};

FotosService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService
}];

FotosService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
})], FotosService);


/***/ }),

/***/ 9916:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/level-up.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelUpService": () => (/* binding */ LevelUpService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 629);






let LevelUpService = class LevelUpService {
    constructor(loadingCtrl, authService, http) {
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.http = http;
        this._isLevelTwo = false;
        this.userId = this.authService.userKey;
        this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL_USERS}/${this.userId}/datos/`;
        this.plainUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL_USERS}/${this.userId}/datos.json`;
    }
    getLevelUp() {
        return this._isLevelTwo;
    }
    checkTokenExist() {
        this.userId = this.authService.userKey;
        this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL_USERS}/${this.userId}/datos/`;
        this.plainUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL_USERS}/${this.userId}/datos.json`;
        return this.http.get(this.baseUrl + 'token.json');
    }
    setLevelUpToken(data) {
        return this.http.put(this.baseUrl + 'token.json', data);
    }
    levelUp() {
        this._isLevelTwo = true;
    }
    levelDown() {
        this._isLevelTwo = false;
    }
    whenLevelChange() {
        return this.loadingCtrl.create({
            keyboardClose: true,
            spinner: 'bubbles',
            message: 'Cargando cambio de acceso...'
        }).then(loadingEl => {
            loadingEl.present();
            this._isLevelTwo = !this._isLevelTwo;
            console.log(this._isLevelTwo + ' Holaaaa');
            loadingEl.dismiss();
            return !this._isLevelTwo;
        });
    }
};
LevelUpService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
LevelUpService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], LevelUpService);



/***/ }),

/***/ 776:
/*!****************************************************!*\
  !*** ./src/app/shared/services/network.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkService": () => (/* binding */ NetworkService)
/* harmony export */ });
/* harmony import */ var C_Users_Alejandro_Documents_Ayi_group_Indep_Proyectos_Mooli_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/network */ 4984);




let NetworkService = class NetworkService {
  constructor() {}

  check() {
    _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.addListener('networkStatusChange', status => {
      console.log('Network status dddddd', status);
    });

    const logCurrentNetworkStatus = /*#__PURE__*/function () {
      var _ref = (0,C_Users_Alejandro_Documents_Ayi_group_Indep_Proyectos_Mooli_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.getStatus();
        console.log('Network status:', status);
      });

      return function logCurrentNetworkStatus() {
        return _ref.apply(this, arguments);
      };
    }();
  }

};

NetworkService.ctorParameters = () => [];

NetworkService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], NetworkService);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// URL_VER_TODAS: `${URL_API}:80/api/cidi/ciudadano/login/oauth/v1`,
const URL_MOOLI = `https://mooli-3d0bf-default-rtdb.firebaseio.com`;
const environment = {
    production: false,
    firebaseAPIKey: 'AIzaSyBsVR-J6hrIt4YKwoEo_ZhhIKeJc0b_nuo',
    __NOTA1: { "Mooli.All.Movies.Nav": "8100" },
    URL_FLAT: URL_MOOLI,
    URL_VER_TODAS: `/peliculas/tabs/ver-todas/`,
    URL_BD_JSON: `${URL_MOOLI}/peliculasBD.json`,
    URL_BD_JSON_EXP: `${URL_MOOLI}/peliculasBD/`,
    URL_BD_SEEN: `${URL_MOOLI}/users/-N8PnJ6s8FDh77vUleJp/seenList/`,
    URL_BD_LIST: `${URL_MOOLI}/users/-N8PnJ6s8FDh77vUleJp/listas/`,
    URL_BD_LIST_PLAIN: `${URL_MOOLI}/users/-N8PnJ6s8FDh77vUleJp/listas.json`,
    // https://mooli-3d0bf-default-rtdb.firebaseio.com/users/-N8PnJ6s8FDh77vUleJp
    __NOTA2: { "Metodo.Provisional.Nav.User.Multiple": "8100" },
    URL_USERS: `${URL_MOOLI}/users`
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-46e842f3_js-node_modules_ionic_core_dist_esm_t-5e0416",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-46e842f3_js-node_modules_ionic_core_dist_esm_t-5e0416",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-toolbar {\n  --min-height:50px!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEF5aSUyMGdyb3VwXFxJbmRlcFxcUHJveWVjdG9zXFxNb29saVxcc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FDQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NTBweCFpbXBvcnRhbnQ7XHJcbiAgfSIsImlvbi10b29sYmFyIHtcbiAgLS1taW4taGVpZ2h0OjUwcHghaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 5933:
/*!*****************************************************************!*\
  !*** ./src/app/component/chart/chart.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 6640:
/*!*******************************************************************************!*\
  !*** ./src/app/component/side-drawer/nivel2/nivel2.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "span {\n  color: red;\n  font-size: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5pdmVsMi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEF5aSUyMGdyb3VwXFxJbmRlcFxcUHJveWVjdG9zXFxNb29saVxcc3JjXFxhcHBcXGNvbXBvbmVudFxcc2lkZS1kcmF3ZXJcXG5pdmVsMlxcbml2ZWwyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJuaXZlbDIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDE7XHJcbn0iLCJzcGFuIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxO1xufSJdfQ== */";

/***/ }),

/***/ 6681:
/*!*****************************************************************************!*\
  !*** ./src/app/component/side-drawer/side-drawer.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".avatar {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtZHJhd2VyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxBeWklMjBncm91cFxcSW5kZXBcXFByb3llY3Rvc1xcTW9vbGlcXHNyY1xcYXBwXFxjb21wb25lbnRcXHNpZGUtZHJhd2VyXFxzaWRlLWRyYXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzaWRlLWRyYXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXJ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiB9IiwiLmF2YXRhciB7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */";

/***/ }),

/***/ 8815:
/*!*********************************************************************************!*\
  !*** ./src/app/component/upper-toolbar/upper-toolbar.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cHBlci10b29sYmFyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <app-side-drawer *ngIf=\"true\"></app-side-drawer>\r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n";

/***/ }),

/***/ 9297:
/*!*****************************************************************!*\
  !*** ./src/app/component/chart/chart.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\r\n  chart works!\r\n</p>\r\n";

/***/ }),

/***/ 2572:
/*!*******************************************************************************!*\
  !*** ./src/app/component/side-drawer/nivel2/nivel2.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Ingreso nivel 2</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onCancel()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"level2AuthForm\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\" size=\"10\" offset=\"1\">\n        <h2>Ingresá tu contraseña de nivel 2</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"floating\" *ngIf=\"!tokenExist\">Token nuevo (4 Caracteres)</ion-label>\n          <ion-label position=\"floating\" *ngIf=\"tokenExist\">Ingresá tu token</ion-label>\n          <ion-input type=\"password\" formControlName='password' autocomplete=\"new-password\"></ion-input>\n          <span slot=\"error\" *ngIf=\"!level2AuthForm.valid && level2AuthForm.touched\">El token debe ser de 4 numeros</span>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" color=\"primary\" (click)=\"onTokenLogin()\" [disabled]=\"!level2AuthForm.valid\">\n          Ingresar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>";

/***/ }),

/***/ 6490:
/*!*****************************************************************************!*\
  !*** ./src/app/component/side-drawer/side-drawer.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-menu side=\"start\" menuId=\"main-menu\" contentId=\"main\" swipeGesture=\"false\">\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title> Mooli</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-menu-toggle>\r\n        <ion-item>\r\n          <ion-avatar class=\"avatar\" (click)=\"goToProfile()\">\r\n            <img alt=\"Silhouette of a person's head\" [src]=\"foto.webviewPath\" />\r\n          </ion-avatar>\r\n        </ion-item>\r\n        <ion-item (click)=\"goToProfile()\">\r\n          <ion-label class=\"ion-text-center\">{{ nickname }}</ion-label>\r\n        </ion-item>\r\n        <ion-item RouterLink=\"\">\r\n          <ion-icon name=\"key-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label> Recuperar contraseña</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"finger-print-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label (click)=\"onLevel2()\"> Acceso de nivel 2</ion-label>\r\n        </ion-item>\r\n        <ion-item (click)=\"onLogout()\">\r\n          <ion-icon name=\"exit\" slot=\"start\"></ion-icon>\r\n          <ion-label>Cerrar sesion</ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>";

/***/ }),

/***/ 4481:
/*!*********************************************************************************!*\
  !*** ./src/app/component/upper-toolbar/upper-toolbar.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n<!-- Notificaciones --><h1>Hi</h1>\r\n<ion-buttons>\r\n    <ion-button routerLink=\"\">\r\n        <ion-icon>\r\n\r\n        </ion-icon>\r\n    </ion-button>\r\n</ion-buttons>\r\n</ion-header>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map