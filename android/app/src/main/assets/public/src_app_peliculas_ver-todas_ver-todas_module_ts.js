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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ver_todas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-todas.page.html?ngResource */ 7102);
/* harmony import */ var _ver_todas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ver-todas.page.scss?ngResource */ 5917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ 629);
/* harmony import */ var src_app_shared_services_calendar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/calendar.service */ 8864);
/* harmony import */ var src_app_shared_services_imdb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/imdb.service */ 8697);
/* harmony import */ var src_app_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notifications.service */ 4779);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);












let VerTodasPage = class VerTodasPage {
    constructor(imdbService, notificationsService, authService, router, calendarService) {
        this.imdbService = imdbService;
        this.notificationsService = notificationsService;
        this.authService = authService;
        this.router = router;
        this.calendarService = calendarService;
        this.title = 0;
        this.loadedMovies = [];
        this.status = false;
        this.unsub = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.todayDate = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD');
    }
    ngOnInit() {
        this.imdbService.getMovies()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.unsub))
            .subscribe(res => {
            for (let key in res) {
                this.loadedMovies.push(res[key]);
            }
            this.onNotificationCreate();
            this.checkReminder();
        });
        this.status = true;
        this.notificationsService.inicializar();
    }
    onNotificationCreate() {
        let randomNo = Math.floor(Math.random() * this.loadedMovies.length);
        console.log(this.loadedMovies[randomNo].title);
        let notifTitle = 'Ya viste la pelicula ';
        let notifBody = 'Vela ahora mismo que te va a encantar!';
        let randomMovieTitle = this.loadedMovies[randomNo].title;
        let randomMovieId = this.loadedMovies[randomNo].id;
        this.notificationsService.createNotification(notifTitle, notifBody, randomMovieTitle);
    }
    checkReminder() {
        this.calendarService.onCheckReminder().subscribe(res => {
            console.log('Date retrieved: ' + !!res);
            console.log(new Date().toISOString());
            if (!!res) {
                console.log('Hay reminders');
                console.log(res);
                for (let i in res) {
                    let dateToCompare = moment__WEBPACK_IMPORTED_MODULE_6__(res[i].date).format('YYYY-MM-DD');
                    if (dateToCompare <= this.todayDate) {
                        this.imdbService.findMovie(i).subscribe(nextEl => {
                            let movie = JSON.parse(JSON.stringify(nextEl));
                            console.log('Tienes una alerta para ver ' + movie.title);
                            this.notificationsService.createNotification('Tenés un recordatorio', `${movie.title} te espera para ver`, movie.title);
                        });
                    }
                }
            }
            else {
                console.log('No hay reminders');
            }
        });
    }
    onLogout() {
        this.authService.logout();
    }
    ngOnDestroy() {
        this.unsub.next();
        this.unsub.unsubscribe();
    }
};
VerTodasPage.ctorParameters = () => [
    { type: src_app_shared_services_imdb_service__WEBPACK_IMPORTED_MODULE_4__.ImdbService },
    { type: src_app_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_shared_services_calendar_service__WEBPACK_IMPORTED_MODULE_3__.CalendarService }
];
VerTodasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-ver-todas',
        template: _ver_todas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ver_todas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerTodasPage);



/***/ }),

/***/ 4779:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/notifications.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsService": () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/push-notifications */ 1704);
/* harmony import */ var _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/local-notifications */ 5568);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let NotificationsService = class NotificationsService {
    constructor(platform) {
        this.platform = platform;
        this.movieTitle = 'They Gray Man';
    }
    inicializar() {
        if (this.platform.is('capacitor')) {
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__.PushNotifications.requestPermissions().then(result => {
                console.log('PushNotifications.requestPermission()');
                if (result.receive === 'granted') {
                    console.log('Permisos de notificacion Concedidos');
                    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__.PushNotifications.register();
                    this.addListeners();
                }
                else {
                    // Show some error
                }
            });
        }
        else {
            console.log('PushNotifications.requestPermission() -> No es movil');
        }
    }
    createNotification(title, body, movieTitle) {
        _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_1__.LocalNotifications.schedule({
            notifications: [
                {
                    title: title,
                    body: body,
                    id: 1,
                }
            ]
        });
    }
    addListeners() {
        // On success, we should be able to receive notifications
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__.PushNotifications.addListener('registration', (token) => {
            console.log('Push registration success, tokend: ' + token.value);
        });
        // Some issue with our setup and push will not work
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__.PushNotifications.addListener('registrationError', (error) => {
            alert('Error on registration: ' + JSON.stringify(error));
        });
        // PRIMER PLANO
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__.PushNotifications.addListener('pushNotificationReceived', (notification) => {
            console.log('Notificacion recibida en 1er plano: ', notification);
        });
        // Method called when tapping on a notification
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__.PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
            alert('Push action performed: ' + JSON.stringify(notification));
        });
    }
};
NotificationsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform }
];
NotificationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], NotificationsService);



/***/ }),

/***/ 6398:
/*!*****************************************************************************!*\
  !*** ./node_modules/@capacitor/local-notifications/dist/esm/definitions.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Weekday": () => (/* binding */ Weekday)
/* harmony export */ });
/// <reference types="@capacitor/cli" />

/**
 * Day of the week. Used for scheduling notifications on a particular weekday.
 */
var Weekday;

(function (Weekday) {
  Weekday[Weekday["Sunday"] = 1] = "Sunday";
  Weekday[Weekday["Monday"] = 2] = "Monday";
  Weekday[Weekday["Tuesday"] = 3] = "Tuesday";
  Weekday[Weekday["Wednesday"] = 4] = "Wednesday";
  Weekday[Weekday["Thursday"] = 5] = "Thursday";
  Weekday[Weekday["Friday"] = 6] = "Friday";
  Weekday[Weekday["Saturday"] = 7] = "Saturday";
})(Weekday || (Weekday = {}));

/***/ }),

/***/ 5568:
/*!***********************************************************************!*\
  !*** ./node_modules/@capacitor/local-notifications/dist/esm/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalNotifications": () => (/* binding */ LocalNotifications),
/* harmony export */   "Weekday": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Weekday)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 6398);

const LocalNotifications = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('LocalNotifications', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_local-notifications_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 7671)).then(m => new m.LocalNotificationsWeb())
});



/***/ }),

/***/ 3470:
/*!****************************************************************************!*\
  !*** ./node_modules/@capacitor/push-notifications/dist/esm/definitions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />


/***/ }),

/***/ 1704:
/*!**********************************************************************!*\
  !*** ./node_modules/@capacitor/push-notifications/dist/esm/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushNotifications": () => (/* binding */ PushNotifications)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 3470);

const PushNotifications = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('PushNotifications', {});



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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Todas las Peliculas</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"onLogout()\">\r\n        <ion-icon name=\"log-out-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n <ion-grid *ngIf=\"status\">\r\n  <ion-row offset=\"1\">\r\n    <ion-col size=\"6\" *ngFor=\"let movie of loadedMovies\">\r\n      <ion-card [routerLink]=\"['/', 'peliculas','tabs' ,'ver-todas', movie.id]\">\r\n        <ion-img src=\"{{ movie.image }}\"></ion-img>\r\n        <ion-card-header>\r\n          <ion-label class=\"ion-text-center\">{{ movie.title }}</ion-label>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-buttons>\r\n            <ion-button [routerLink]=\"['/', 'peliculas','tabs' ,'ver-todas', movie.id]\">\r\n              <ion-icon name=\"arrow-forward-outline\" color=\"primary\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_peliculas_ver-todas_ver-todas_module_ts.js.map