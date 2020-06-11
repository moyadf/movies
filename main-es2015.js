(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_movies_movies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/movies/movies.component */ "./src/app/pages/movies/movies.component.ts");
/* harmony import */ var _pages_movie_movie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/movie/movie.component */ "./src/app/pages/movie/movie.component.ts");
/* harmony import */ var _pages_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/movie-detail/movie-detail.component */ "./src/app/pages/movie-detail/movie-detail.component.ts");
/* harmony import */ var _pages_topfive_topfive_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/topfive/topfive.component */ "./src/app/pages/topfive/topfive.component.ts");








const routes = [
    { path: 'home', component: _pages_movies_movies_component__WEBPACK_IMPORTED_MODULE_2__["MoviesComponent"] },
    { path: 'movie/new', component: _pages_movie_movie_component__WEBPACK_IMPORTED_MODULE_3__["MovieComponent"] },
    { path: 'movie/top-five', component: _pages_topfive_topfive_component__WEBPACK_IMPORTED_MODULE_5__["TopfiveComponent"] },
    { path: 'detail/:id', component: _pages_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");






function AppComponent_app_sidebar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");
} }
class AppComponent {
    constructor(router) {
        this.router = router;
        this.show = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 1, consts: [[1, "movie-main"], [1, "sidebar"], [4, "ngIf"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_sidebar_4_Template, 1, 0, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.router.url.includes("movie"));
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]], styles: [".movie-main[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n    flex: 1 1 0;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    flex: 1 1 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllLW1haW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gICAgZmxleDogMSAxIDA7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGZsZXg6IDEgMSAxMDAlO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _pages_movie_movie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/movie/movie.component */ "./src/app/pages/movie/movie.component.ts");
/* harmony import */ var _pages_movies_movies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/movies/movies.component */ "./src/app/pages/movies/movies.component.ts");
/* harmony import */ var _pages_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/movie-detail/movie-detail.component */ "./src/app/pages/movie-detail/movie-detail.component.ts");
/* harmony import */ var _pages_topfive_topfive_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/topfive/topfive.component */ "./src/app/pages/topfive/topfive.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _pages_movie_movie_component__WEBPACK_IMPORTED_MODULE_8__["MovieComponent"],
        _pages_movies_movies_component__WEBPACK_IMPORTED_MODULE_9__["MoviesComponent"],
        _pages_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_10__["MovieDetailComponent"],
        _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _pages_topfive_topfive_component__WEBPACK_IMPORTED_MODULE_11__["TopfiveComponent"],
        _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _pages_movie_movie_component__WEBPACK_IMPORTED_MODULE_8__["MovieComponent"],
                    _pages_movies_movies_component__WEBPACK_IMPORTED_MODULE_9__["MoviesComponent"],
                    _pages_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_10__["MovieDetailComponent"],
                    _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                    _pages_topfive_topfive_component__WEBPACK_IMPORTED_MODULE_11__["TopfiveComponent"],
                    _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/models/movie.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/movie.model.ts ***!
  \***************************************/
/*! exports provided: MovieModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieModel", function() { return MovieModel; });
class MovieModel {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/pages/movie-detail/movie-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/movie-detail/movie-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_movie_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/movie.model */ "./src/app/models/movie.model.ts");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function MovieDetailComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.movie.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx_r0.movie.release));
} }
class MovieDetailComponent {
    constructor(movies_service, route, router) {
        this.movies_service = movies_service;
        this.route = route;
        this.router = router;
        this.movie = new src_app_models_movie_model__WEBPACK_IMPORTED_MODULE_1__["MovieModel"]();
        this.queryParams = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
            this.movies_service.getMovie(this.id).subscribe((resp) => {
                this.movie = resp;
                this.movie.id = this.id;
                this.image = resp.image;
            }).add;
        });
    }
}
MovieDetailComponent.ɵfac = function MovieDetailComponent_Factory(t) { return new (t || MovieDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MovieDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDetailComponent, selectors: [["app-movie-detail"]], decls: 1, vars: 1, consts: [["class", "detail-container", 4, "ngIf"], [1, "detail-container"], [1, "img"], [3, "src"], [1, "text"]], template: function MovieDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieDetailComponent_section_0_Template, 11, 6, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".detail-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 30px;\r\n}\r\n\r\n.detail-container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n    width: 350px;\r\n    margin-right: 30px;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n}\r\n\r\n.text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 3em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdmllLWRldGFpbC9tb3ZpZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWwtY29udGFpbmVyIC5pbWcgPiBpbWcge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnRleHQgaDEge1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-detail',
                templateUrl: './movie-detail.component.html',
                styleUrls: ['./movie-detail.component.css']
            }]
    }], function () { return [{ type: src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/movie/movie.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/movie/movie.component.ts ***!
  \************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_movie_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/movie.model */ "./src/app/models/movie.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function MovieComponent_small_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.titleValidation, " ");
} }
class MovieComponent {
    constructor(movies_service, router) {
        this.movies_service = movies_service;
        this.router = router;
        this.movie = new src_app_models_movie_model__WEBPACK_IMPORTED_MODULE_1__["MovieModel"]();
        this.titleValidation = "Please enter a text greater than 5 characters";
        this.descValidation = "Please enter a text greater than 50 characters";
    }
    ngOnInit() {
    }
    changeListener($event) {
        this.readThis($event.target);
    }
    readThis(inputValue) {
        this.file = inputValue.files[0];
        this.myReader = new FileReader();
        this.myReader.onloadend = (e) => {
            this.image = this.myReader.result;
            this.movie.image = this.image;
        };
        this.myReader.readAsDataURL(this.file);
    }
    saveMovie(form) {
        if (form.invalid) {
            return Object.values(form.controls).forEach(control => {
                control.markAsTouched();
            });
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Record created successfully',
            icon: 'success',
            showConfirmButton: true,
        }).then((resp) => {
            if (resp.value) {
                this.movies_service.addMovie(this.movie).subscribe(resp => {
                    console.log(resp);
                });
            }
            this.router.navigateByUrl('home');
        });
    }
}
MovieComponent.ɵfac = function MovieComponent_Factory(t) { return new (t || MovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
MovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieComponent, selectors: [["app-movie"]], decls: 24, vars: 6, consts: [[1, "wrapper"], [1, "movie-form-container"], [1, "movie-form"], [3, "ngSubmit"], ["f", "ngForm"], [1, "user-box"], ["type", "text", "name", "title", "required", "", "minlength", "5", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "name", "description", "required", "", 3, "ngModel", "ngModelChange"], ["type", "date", "name", "release", "required", "", 3, "ngModel", "ngModelChange"], ["for", "file", 1, "file"], [1, "fas", "fa-images"], ["id", "file", "type", "file", "accept", "image/*", "title", "image", "required", "", 3, "change"], [1, "save-movie"], ["type", "submit"], [1, "text-danger"]], template: function MovieComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MovieComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.saveMovie(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MovieComponent_Template_input_ngModelChange_6_listener($event) { return ctx.movie.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MovieComponent_small_10_Template, 2, 1, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MovieComponent_Template_input_ngModelChange_12_listener($event) { return ctx.movie.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Description: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MovieComponent_Template_input_ngModelChange_16_listener($event) { return ctx.movie.release = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Choose Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MovieComponent_Template_input_change_20_listener($event) { return ctx.changeListener($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movie.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movie.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movie.release);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".wrapper[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n\tmax-width: 1140px;\r\n\tmargin: auto;\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n} \r\n\r\n.movie-form[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%] {\r\n  position: relative;\r\n} \r\n\r\n.movie-form[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 10px 0;\r\n  font-size: 16px;\r\n  color: rgb(255, 235, 235);\r\n  margin-bottom: 30px;\r\n  border: none;\r\n  border-bottom: 1px solid #413939;\r\n  outline: none;\r\n  background: transparent;\r\n} \r\n\r\n.movie-form[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top:0;\r\n  left: 0;\r\n  padding: 10px 0;\r\n  font-size: 16px;\r\n  color: rgb(255, 235, 235);\r\n  pointer-events: none;\r\n  transition: .5s;\r\n} \r\n\r\n.movie-form[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], .movie-form[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%] {\r\n  top: -20px;\r\n  left: 0;\r\n  color:#ff0571;\r\n  font-size: 12px;\r\n} \r\n\r\n.movie-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  padding: 10px 20px;\r\n  color: #ff0571;\r\n  font-size: 16px;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  overflow: hidden;\r\n  transition: .5s;\r\n  margin-top: 40px;\r\n  letter-spacing: 4px\r\n} \r\n\r\n.movie-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background: #03e9f4;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 5px #ff0571,\r\n              0 0 25px #ff0571,\r\n              0 0 50px #ff0571,\r\n              0 0 100px #ff0571;\r\n} \r\n\r\n.movie-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  display: block;\r\n} \r\n\r\n.movie-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n  top: 0;\r\n  left: -100%;\r\n  width: 100%;\r\n  height: 2px;\r\n  background: linear-gradient(90deg, transparent, #ff0571);\r\n  -webkit-animation: btn-anim1 1s linear infinite;\r\n          animation: btn-anim1 1s linear infinite;\r\n} \r\n\r\n@-webkit-keyframes btn-anim1 {\r\n  0% {\r\n    left: -100%;\r\n  }\r\n  50%,100% {\r\n    left: 100%;\r\n  }\r\n} \r\n\r\n@keyframes btn-anim1 {\r\n  0% {\r\n    left: -100%;\r\n  }\r\n  50%,100% {\r\n    left: 100%;\r\n  }\r\n} \r\n\r\n.movie-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n  top: -100%;\r\n  right: 0;\r\n  width: 2px;\r\n  height: 100%;\r\n  background: linear-gradient(180deg, transparent, #ff0571);\r\n  -webkit-animation: btn-anim2 1s linear infinite;\r\n          animation: btn-anim2 1s linear infinite;\r\n  -webkit-animation-delay: .25s;\r\n          animation-delay: .25s\r\n} \r\n\r\n@-webkit-keyframes btn-anim2 {\r\n  0% {\r\n    top: -100%;\r\n  }\r\n  50%,100% {\r\n    top: 100%;\r\n  }\r\n} \r\n\r\n@keyframes btn-anim2 {\r\n  0% {\r\n    top: -100%;\r\n  }\r\n  50%,100% {\r\n    top: 100%;\r\n  }\r\n} \r\n\r\n.movie-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n  bottom: 0;\r\n  right: -100%;\r\n  width: 100%;\r\n  height: 2px;\r\n  background: linear-gradient(270deg, transparent, #ff0571);\r\n  -webkit-animation: btn-anim3 1s linear infinite;\r\n          animation: btn-anim3 1s linear infinite;\r\n  -webkit-animation-delay: .5s;\r\n          animation-delay: .5s\r\n} \r\n\r\n@-webkit-keyframes btn-anim3 {\r\n  0% {\r\n    right: -100%;\r\n  }\r\n  50%,100% {\r\n    right: 100%;\r\n  }\r\n} \r\n\r\n@keyframes btn-anim3 {\r\n  0% {\r\n    right: -100%;\r\n  }\r\n  50%,100% {\r\n    right: 100%;\r\n  }\r\n} \r\n\r\n.movie-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\r\n  bottom: -100%;\r\n  left: 0;\r\n  width: 2px;\r\n  height: 100%;\r\n  background: linear-gradient(360deg, transparent, #ff0571);\r\n  -webkit-animation: btn-anim4 1s linear infinite;\r\n          animation: btn-anim4 1s linear infinite;\r\n  -webkit-animation-delay: .75s;\r\n          animation-delay: .75s\r\n} \r\n\r\n@-webkit-keyframes btn-anim4 {\r\n  0% {\r\n    bottom: -100%;\r\n  }\r\n  50%,100% {\r\n    bottom: 100%;\r\n  }\r\n} \r\n\r\n@keyframes btn-anim4 {\r\n  0% {\r\n    bottom: -100%;\r\n  }\r\n  50%,100% {\r\n    bottom: 100%;\r\n  }\r\n} \r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n} \r\n\r\nlabel.file[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 0 5px;\r\n} \r\n\r\nlabel.file[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  height: 60px;\r\n  width: 100%;\r\n  background-color: #ff3d49;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: .2s;\r\n  cursor: pointer;\r\n} \r\n\r\nlabel.file[_ngcontent-%COMP%]:hover {\r\n  background-color: #d72532;\r\n} \r\n\r\n.movie-form[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 1em;\r\n} \r\n\r\n.save-movie[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin: 30px 0;\r\n} \r\n\r\n.save-movie[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  border: none;\r\n  outline: no;\r\n  height: 50px;\r\n  width: 100px;\r\n  background-color: #ff3d49;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: .2s;\r\n  cursor: pointer;\r\n  color: #fff;\r\n  transition: .3s;\r\n} \r\n\r\n.save-movie[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #ff0571;\r\n} \r\n\r\n.text-danger[_ngcontent-%COMP%] {\r\n  color: red;\r\n  display: block;\r\n  margin-bottom: 20px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW92aWUvbW92aWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7Q0FDYixpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxzQkFBc0I7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixLQUFLO0VBQ0wsT0FBTztFQUNQLGVBQWU7RUFDZixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLFVBQVU7RUFDVixPQUFPO0VBQ1AsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCOzs7K0JBRzZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsd0RBQXdEO0VBQ3hELCtDQUF1QztVQUF2Qyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1oseURBQXlEO0VBQ3pELCtDQUF1QztVQUF2Qyx1Q0FBdUM7RUFDdkMsNkJBQW9CO1VBQXBCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gseURBQXlEO0VBQ3pELCtDQUF1QztVQUF2Qyx1Q0FBdUM7RUFDdkMsNEJBQW1CO1VBQW5CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLFVBQVU7RUFDVixZQUFZO0VBQ1oseURBQXlEO0VBQ3pELCtDQUF1QztVQUF2Qyx1Q0FBdUM7RUFDdkMsNkJBQW9CO1VBQXBCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxtQkFBbUI7O0FBRXJCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW92aWUvbW92aWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBwYWRkaW5nOiAxZW07XHJcblx0bWF4LXdpZHRoOiAxMTQwcHg7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn0gXHJcblxyXG4ubW92aWUtZm9ybSAudXNlci1ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1vdmllLWZvcm0gLnVzZXItYm94IGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyMzUsIDIzNSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0MTM5Mzk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4ubW92aWUtZm9ybSAudXNlci1ib3ggbGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDIzNSwgMjM1KTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbi5tb3ZpZS1mb3JtIC51c2VyLWJveCBpbnB1dDpmb2N1cyB+IGxhYmVsLFxyXG4ubW92aWUtZm9ybSAudXNlci1ib3ggaW5wdXQ6dmFsaWQgfiBsYWJlbCB7XHJcbiAgdG9wOiAtMjBweDtcclxuICBsZWZ0OiAwO1xyXG4gIGNvbG9yOiNmZjA1NzE7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubW92aWUtZm9ybSBmb3JtIGEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGNvbG9yOiAjZmYwNTcxO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiA0cHhcclxufVxyXG5cclxuLm1vdmllLWZvcm0gYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzAzZTlmNDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjZmYwNTcxLFxyXG4gICAgICAgICAgICAgIDAgMCAyNXB4ICNmZjA1NzEsXHJcbiAgICAgICAgICAgICAgMCAwIDUwcHggI2ZmMDU3MSxcclxuICAgICAgICAgICAgICAwIDAgMTAwcHggI2ZmMDU3MTtcclxufVxyXG5cclxuLm1vdmllLWZvcm0gYSBzcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5tb3ZpZS1mb3JtIGEgc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAtMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCAjZmYwNTcxKTtcclxuICBhbmltYXRpb246IGJ0bi1hbmltMSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnRuLWFuaW0xIHtcclxuICAwJSB7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICB9XHJcbiAgNTAlLDEwMCUge1xyXG4gICAgbGVmdDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5tb3ZpZS1mb3JtIGEgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gIHRvcDogLTEwMCU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDJweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdHJhbnNwYXJlbnQsICNmZjA1NzEpO1xyXG4gIGFuaW1hdGlvbjogYnRuLWFuaW0yIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IC4yNXNcclxufVxyXG5cclxuQGtleWZyYW1lcyBidG4tYW5pbTIge1xyXG4gIDAlIHtcclxuICAgIHRvcDogLTEwMCU7XHJcbiAgfVxyXG4gIDUwJSwxMDAlIHtcclxuICAgIHRvcDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5tb3ZpZS1mb3JtIGEgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogLTEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgdHJhbnNwYXJlbnQsICNmZjA1NzEpO1xyXG4gIGFuaW1hdGlvbjogYnRuLWFuaW0zIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IC41c1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJ0bi1hbmltMyB7XHJcbiAgMCUge1xyXG4gICAgcmlnaHQ6IC0xMDAlO1xyXG4gIH1cclxuICA1MCUsMTAwJSB7XHJcbiAgICByaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5tb3ZpZS1mb3JtIGEgc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gIGJvdHRvbTogLTEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCB0cmFuc3BhcmVudCwgI2ZmMDU3MSk7XHJcbiAgYW5pbWF0aW9uOiBidG4tYW5pbTQgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLjc1c1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJ0bi1hbmltNCB7XHJcbiAgMCUge1xyXG4gICAgYm90dG9tOiAtMTAwJTtcclxuICB9XHJcbiAgNTAlLDEwMCUge1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmxhYmVsLmZpbGUgaSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxufVxyXG5cclxubGFiZWwuZmlsZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjNkNDk7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IC4ycztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmxhYmVsLmZpbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNzI1MzI7XHJcbn1cclxuXHJcbi5tb3ZpZS1mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbi5zYXZlLW1vdmllIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbn1cclxuXHJcbi5zYXZlLW1vdmllIGJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm87XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZDQ5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuLnNhdmUtbW92aWUgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwNTcxO1xyXG59XHJcblxyXG4udGV4dC1kYW5nZXIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie',
                templateUrl: './movie.component.html',
                styleUrls: ['./movie.component.css']
            }]
    }], function () { return [{ type: src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/movies/movies.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/movies/movies.component.ts ***!
  \**************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function MoviesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
} }
const _c0 = function (a1) { return ["/movie", a1]; };
function MoviesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", movie_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", movie_r2.title)("alt", movie_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, movie_r2.id));
} }
class MoviesComponent {
    constructor(movie_service, router, activateR) {
        this.movie_service = movie_service;
        this.router = router;
        this.activateR = activateR;
        this.loading = false;
        this.movies = [];
    }
    ngOnInit() {
        this.activateR.data.subscribe(data => {
            console.log('------------->', data);
        });
        this.loading = true;
        this.movie_service.getMovies().subscribe((resp) => {
            this.movies = resp;
            this.loading = false;
        });
    }
}
MoviesComponent.ɵfac = function MoviesComponent_Factory(t) { return new (t || MoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
MoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesComponent, selectors: [["app-movies"]], decls: 7, vars: 2, consts: [[1, "wrapper"], [1, "add-movie"], ["routerLink", "/movie/new", "title", "Add Movie", 1, "button", "tooltip"], [1, "fas", "fa-plus"], ["class", "spinner", 4, "ngIf"], [1, "movies-container", "main-wrap"], ["class", "movies-container__card", 4, "ngFor", "ngForOf"], [1, "spinner"], [1, "movies-container__card"], ["height", "450", 3, "src", "title", "alt"], [1, "movies-container-card__text"], [1, "movies-container-card-text__button"], ["title", "Ver m\u00E1s", 1, "button", 3, "routerLink"], [1, "fas", "fa-chevron-right"]], template: function MoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MoviesComponent_div_4_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MoviesComponent_div_6_Template, 9, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".wrapper[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n\tmax-width: 1140px;\r\n\tmargin: auto;\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.add-movie[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.movies-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-column-gap: 50px;\r\n  margin: 1em 0;\r\n}\r\n\r\n.movies-container__card[_ngcontent-%COMP%] {\r\n  border-radius: .5em;\r\n  overflow: hidden;\r\n  background-color: whitesmoke;\r\n  margin: 30px 0;\r\n  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);\r\n  transition: transform .2s;\r\n}\r\n\r\n.movies-container__card[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.1); \r\n}\r\n\r\n.movies-container__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n.movies-container-card__text[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.movies-container-card-text__button[_ngcontent-%COMP%] {\r\n  margin: 30px 0;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 100%;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  font-size: 1rem;\r\n  transition: all 0.3s;\r\n  overflow: hidden;\r\n  z-index: 1;\r\n  width: 50px;\r\n  height: 50px;\r\n  cursor: pointer;\r\n  outline: none;\r\n  border: none;\r\n  transition: .3s;\r\n  background-color: #ff3d49;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n  background-color: #d14c55;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover:before {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  height:60px;\r\n  width:60px;\r\n  margin:0px auto;\r\n  -webkit-animation: rotation .6s infinite linear;\r\n  animation: rotation .6s infinite linear;\r\n  border-left:6px solid rgba(0,174,239,.15);\r\n  border-right:6px solid rgba(0,174,239,.15);\r\n  border-bottom:6px solid rgba(0,174,239,.15);\r\n  border-top:6px solid rgba(0,174,239,.8);\r\n  border-radius:100%;\r\n}\r\n\r\n@-webkit-keyframes rotation {\r\n  from {-webkit-transform: rotate(0deg);}\r\n  to {-webkit-transform: rotate(359deg);}\r\n}\r\n\r\n@keyframes rotation {\r\n  from {transform: rotate(0deg);}\r\n  to {transform: rotate(359deg);}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtDQUNiLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osV0FBVztDQUNYLHNCQUFzQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsMkNBQTJDO0VBQzNDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUdFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBaUI7S0FBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsY0FBYzs7QUFDZDtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtFQUNmLCtDQUErQztFQUcvQyx1Q0FBdUM7RUFDdkMseUNBQXlDO0VBQ3pDLDBDQUEwQztFQUMxQywyQ0FBMkM7RUFDM0MsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLE1BQU0sK0JBQStCLENBQUM7RUFDdEMsSUFBSSxpQ0FBaUMsQ0FBQztBQUN4Qzs7QUFZQTtFQUNFLE1BQU0sdUJBQXVCLENBQUM7RUFDOUIsSUFBSSx5QkFBeUIsQ0FBQztBQUNoQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBwYWRkaW5nOiAxZW07XHJcblx0bWF4LXdpZHRoOiAxMTQwcHg7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5hZGQtbW92aWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLm1vdmllcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBncmlkLWNvbHVtbi1nYXA6IDUwcHg7XHJcbiAgbWFyZ2luOiAxZW0gMDtcclxufVxyXG5cclxuLm1vdmllcy1jb250YWluZXJfX2NhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IC41ZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIG1hcmdpbjogMzBweCAwO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcclxufVxyXG5cclxuLm1vdmllcy1jb250YWluZXJfX2NhcmQ6aG92ZXIge1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IFxyXG59XHJcblxyXG4ubW92aWVzLWNvbnRhaW5lcl9fY2FyZCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4ubW92aWVzLWNvbnRhaW5lci1jYXJkX190ZXh0IHtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5tb3ZpZXMtY29udGFpbmVyLWNhcmQtdGV4dF9fYnV0dG9uIHtcclxuICBtYXJnaW46IDMwcHggMDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRyYW5zaXRpb246IC4zcztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZDQ5O1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE0YzU1O1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyOmJlZm9yZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qKiBzcGluZW5yICoqL1xyXG4uc3Bpbm5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICBoZWlnaHQ6NjBweDtcclxuICB3aWR0aDo2MHB4O1xyXG4gIG1hcmdpbjowcHggYXV0bztcclxuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRpb24gLjZzIGluZmluaXRlIGxpbmVhcjtcclxuICAtbW96LWFuaW1hdGlvbjogcm90YXRpb24gLjZzIGluZmluaXRlIGxpbmVhcjtcclxuICAtby1hbmltYXRpb246IHJvdGF0aW9uIC42cyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGlvbiAuNnMgaW5maW5pdGUgbGluZWFyO1xyXG4gIGJvcmRlci1sZWZ0OjZweCBzb2xpZCByZ2JhKDAsMTc0LDIzOSwuMTUpO1xyXG4gIGJvcmRlci1yaWdodDo2cHggc29saWQgcmdiYSgwLDE3NCwyMzksLjE1KTtcclxuICBib3JkZXItYm90dG9tOjZweCBzb2xpZCByZ2JhKDAsMTc0LDIzOSwuMTUpO1xyXG4gIGJvcmRlci10b3A6NnB4IHNvbGlkIHJnYmEoMCwxNzQsMjM5LC44KTtcclxuICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbn1cclxuIFxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRpb24ge1xyXG4gIGZyb20gey13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxyXG4gIHRvIHstd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7fVxyXG59XHJcbiBcclxuQC1tb3ota2V5ZnJhbWVzIHJvdGF0aW9uIHtcclxuICBmcm9tIHstbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cclxuICB0byB7LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO31cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyByb3RhdGlvbiB7XHJcbiAgZnJvbSB7LW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxyXG4gIHRvIHstby10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO31cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGlvbiB7XHJcbiAgZnJvbSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxyXG4gIHRvIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO31cclxufVxyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('cardAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('100ms', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                        ]))
                    ]), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('100ms', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(0)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(-50%)', offset: 1 })
                        ]))
                    ]), { optional: true })
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movies',
                templateUrl: './movies.component.html',
                styleUrls: ['./movies.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('cardAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }), { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('100ms', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                                ]))
                            ]), { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('100ms', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(0)', offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(-50%)', offset: 1 })
                                ]))
                            ]), { optional: true })
                        ]),
                    ]),
                ]
            }]
    }], function () { return [{ type: src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/topfive/topfive.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/topfive/topfive.component.ts ***!
  \****************************************************/
/*! exports provided: TopfiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopfiveComponent", function() { return TopfiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_top_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/top.service */ "./src/app/services/top.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TopfiveComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, item_r1.release));
} }
class TopfiveComponent {
    constructor(top_service) {
        this.top_service = top_service;
        this.top = [];
    }
    ngOnInit() {
        this.top_service.getTopMovies().subscribe((data) => {
            this.top = data.movies;
            console.log(this.top);
        });
    }
}
TopfiveComponent.ɵfac = function TopfiveComponent_Factory(t) { return new (t || TopfiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_top_service__WEBPACK_IMPORTED_MODULE_1__["TopService"])); };
TopfiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopfiveComponent, selectors: [["app-topfive"]], decls: 2, vars: 1, consts: [[1, "wrapper"], ["class", "movie-detail-container", 4, "ngFor", "ngForOf"], [1, "movie-detail-container"], [1, "movie-cover"], [3, "src", "alt"], [1, "movie-detail"]], template: function TopfiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopfiveComponent_div_1_Template, 11, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.top);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n\tmax-width: 1140px;\r\n\tmargin: auto;\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.movie-detail-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 35px 0;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.movie-detail-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  transition: .3s;\r\n}\r\n\r\n.movie-detail-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.movie-detail[_ngcontent-%COMP%] {\r\n  margin: 0 30px;\r\n  color: #ffffff;\r\n}\r\n\r\n.movie-detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 38px;\r\n  font-weight: 100;\r\n}\r\n\r\n.movie-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-weight: 100;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdG9wZml2ZS90b3BmaXZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0NBQ2IsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixXQUFXO0NBQ1gsc0JBQXNCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90b3BmaXZlL3RvcGZpdmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBwYWRkaW5nOiAxZW07XHJcblx0bWF4LXdpZHRoOiAxMTQwcHg7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5tb3ZpZS1kZXRhaWwtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMzVweCAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb3ZpZS1kZXRhaWwtY29udGFpbmVyIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuLm1vdmllLWRldGFpbC1jb250YWluZXIgaW1nOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5tb3ZpZS1kZXRhaWwge1xyXG4gIG1hcmdpbjogMCAzMHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubW92aWUtZGV0YWlsIGgxIHtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLm1vdmllLWRldGFpbCBwIHtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopfiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topfive',
                templateUrl: './topfive.component.html',
                styleUrls: ['./topfive.component.css']
            }]
    }], function () { return [{ type: src_app_services_top_service__WEBPACK_IMPORTED_MODULE_1__["TopService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/movies.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/movies.service.ts ***!
  \********************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class MoviesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    addMovie(movie) {
        return this.httpClient.
            post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiConstants.API_DOMAIN}/movies.json`, movie)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            movie.id = data.name;
            return movie;
        }));
    }
    getMovies() {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiConstants.API_DOMAIN}/movies.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.createMovieArr), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1));
    }
    getMovie(id) {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiConstants.API_DOMAIN}/movies/${id}.json`);
    }
    deleteMovie(id) {
        return this.httpClient.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiConstants.API_DOMAIN}/movies/${id}.json`);
    }
    createMovieArr(movieObj) {
        const movies = [];
        if (movieObj === null) {
            return [];
        }
        Object.keys(movieObj).forEach(key => {
            const movie = movieObj[key];
            movie.id = key;
            movies.push(movie);
        });
        return movies;
    }
}
MoviesService.ɵfac = function MoviesService_Factory(t) { return new (t || MoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MoviesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoviesService, factory: MoviesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/top.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/top.service.ts ***!
  \*****************************************/
/*! exports provided: TopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopService", function() { return TopService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class TopService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getTopMovies() {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiConstants.API_MOCK}`);
    }
}
TopService.ɵfac = function TopService_Factory(t) { return new (t || TopService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TopService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TopService, factory: TopService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["home"]; };
const _c1 = function () { return ["movie/new"]; };
const _c2 = function () { return ["movie/top-five"]; };
class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 16, vars: 8, consts: [[1, "wrapper"], [1, "movie-navbar"], [1, "logo", 3, "routerLink"], [1, "links"], ["routerLinkActive", "active"], [3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MovApp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Top 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".wrapper[_ngcontent-%COMP%] {\r\n\tpadding: 1em;\r\n\tmax-width: 1140px;\r\n\tmargin: auto;\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n\tbackground: #ff0571;\r\n  padding: .5em;\r\n}\r\n\r\n.movie-navbar[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.movie-navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: #ffffff;\r\n  text-decoration: none;\r\n  font-size: 28px;\r\n  font-weight: 500;\r\n}\r\n\r\n.movie-navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 120px;\r\n  height: 45px;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tmargin: 0;\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n}\r\n\r\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: hsl(233, 17%, 87%);\r\n  padding: 0 1em;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxtQkFBbUI7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0NBQ0MsYUFBYTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7Q0FDQyxjQUFjO0VBQ2IscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFNBQVM7Q0FDVCxnQkFBZ0I7Q0FDaEIsVUFBVTtBQUNYOztBQUVBO0NBQ0MseUJBQXlCO0VBQ3hCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcblx0cGFkZGluZzogMWVtO1xyXG5cdG1heC13aWR0aDogMTE0MHB4O1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG5cdGJhY2tncm91bmQ6ICNmZjA1NzE7XHJcbiAgcGFkZGluZzogLjVlbTtcclxufVxyXG5cclxuLm1vdmllLW5hdmJhciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm1vdmllLW5hdmJhciBhIHtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5tb3ZpZS1uYXZiYXIgLmxvZ28gaW1nIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4ubGlua3MgdWwge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0cGFkZGluZzogMDtcclxufVxyXG5cclxuLmxpbmtzIGEge1xyXG5cdGNvbG9yOiBoc2woMjMzLCAxNyUsIDg3JSk7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a1) { return ["/detail/", a1]; };
function SidebarComponent_article_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_article_1_Template_i_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const movie_r1 = ctx.$implicit; const idx_r2 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteMovie(movie_r1, idx_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, movie_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", movie_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", movie_r1.release, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _r3.classList.contains("active") ? "show" : "none");
} }
class SidebarComponent {
    constructor(movie_service, router, route) {
        this.movie_service = movie_service;
        this.router = router;
        this.route = route;
        this.movies = [];
        this.show = false;
        this.buttonClicked = false;
    }
    ngOnInit() {
        this.show = true;
        this.movie_service.getMovies().subscribe((resp) => {
            this.movies = resp;
            console.log('sidebar', this.movies);
            this.show = false;
        });
    }
    deleteMovie(movie, idx) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Are you sure',
            text: `Are you sure to delete the movie: ${movie.title}`,
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true,
        }).then((resp) => {
            if (resp.value) {
                this.movies.splice(idx, 1);
                this.movie_service.deleteMovie(movie.id).subscribe();
            }
            this.router.navigate(['home']);
        }).finally();
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 2, vars: 1, consts: [[1, "sidebar"], ["routerLinkActive", "active", "class", "container", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "container", 3, "routerLink"], ["switch", ""], [1, "trash", 3, "ngClass"], [1, "fas", "fa-trash", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_article_1_Template, 10, 6, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".sidebar[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 30px;\r\n  width: 150px;\r\n  background-color: #fff;\r\n  height: 100%;\r\n  height: 100vh;\r\n  overflow: auto;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .movies-container-card__text[_ngcontent-%COMP%] {\r\n  display: block;\r\n  color: black;\r\n  padding: 16px;\r\n  text-decoration: none;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .movies-container-card__text.active[_ngcontent-%COMP%] {\r\n  background-color: #4caf50;\r\n  color: white;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   .movies-container-card__text[_ngcontent-%COMP%]:hover:not(.active) {\r\n  background-color: #555;\r\n  color: white;\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n  display: block !important;\r\n}\r\n\r\n.none[_ngcontent-%COMP%] {\r\n  display: none !important;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n  transition: .3s;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.trash[_ngcontent-%COMP%] {\r\n  color: #ff0571;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  border-bottom: 5px solid #ff0571;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uc2lkZWJhciAubW92aWVzLWNvbnRhaW5lci1jYXJkX190ZXh0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5tb3ZpZXMtY29udGFpbmVyLWNhcmRfX3RleHQuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNpZGViYXIgLm1vdmllcy1jb250YWluZXItY2FyZF9fdGV4dDpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2hvdyB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIHRyYW5zaXRpb246IC4zcztcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnRyYXNoIHtcclxuICBjb2xvcjogI2ZmMDU3MTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZjA1NzE7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css'],
            }]
    }], function () { return [{ type: src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    apiConstants: {
        API_DOMAIN: 'https://masglobal-movies.firebaseio.com',
        API_MOCK: 'http://www.mocky.io/v2/5dc3c053300000540034757b',
        ENV: 'dev'
    }
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andre\OneDrive\Escritorio\MASGlobal\masglobal-movies\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map