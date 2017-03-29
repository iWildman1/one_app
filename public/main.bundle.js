webpackJsonp([1,4],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.getProjects = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/projects/find/' + username, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.getSingleProject = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/projects/find/id/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.postProject = function (projectData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/projects/create', projectData, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.updateProject = function (id, projectData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/projects/update/' + id, projectData, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProjectService.prototype.deleteProject = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:3000/projects/delete/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProjectService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], ProjectService);
    return ProjectService;
    var _a;
}());
//# sourceMappingURL=F:/Users/Daniel/Documents/Web Development/One App/angular-src/src/project.service.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined || user.passwordconfirmation == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=F:/Users/Daniel/Documents/Web Development/One App/angular-src/src/validate.service.js.map

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 390;


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(509);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=F:/Users/Daniel/Documents/Web Development/One App/angular-src/src/main.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(686),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=F:/Users/Daniel/Documents/Web Development/One App/angular-src/src/app.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_reverseauth_guard__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_add_add_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_edit_edit_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_validate_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_project_service__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var appRoutes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: "register",
        component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_reverseauth_guard__["a" /* ReverseAuthGuard */]]
    },
    {
        path: "login",
        component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_reverseauth_guard__["a" /* ReverseAuthGuard */]]
    },
    {
        path: "dashboard",
        component: __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: "dashboard/new",
        component: __WEBPACK_IMPORTED_MODULE_14__components_add_add_component__["a" /* AddComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: "dashboard/edit/:id",
        component: __WEBPACK_IMPORTED_MODULE_15__components_edit_edit_component__["a" /* EditComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_add_add_component__["a" /* AddComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_edit_edit_component__["a" /* EditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_7__guards_reverseauth_guard__["a" /* ReverseAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_18__services_project_service__["a" /* ProjectService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=F:/Users/Daniel/Documents/Web Development/One App/angular-src/src/app.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddComponent = (function () {
    function AddComponent(authService, projectService, router, flashMessagesService) {
        this.authService = authService;
        this.projectService = projectService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuthenticatedUser().subscribe(function (data) {
            _this.owner = data.user.username;
        });
    };
    AddComponent.prototype.onAddSubmit = function () {
        var _this = this;
        var project = {
            name: this.name,
            iteration: "0",
            deployment_date: "" + new Date() + "",
            owner: this.owner,
            owner_pretty: this.owner_pretty,
            github_file: this.github_filelink,
            ftp_server: this.ftp_server,
            ftp_port: this.ftp_port,
            ftp_username: this.ftp_username,
            ftp_password: this.ftp_password
        };
        this.projectService.postProject(project).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessagesService.show('Unable to post new project. Please try again later', { cssClass: 'alert-danger no-margin-text', timeout: 3000 });
            }
        });
    };
    AddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(687),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], AddComponent);
    return AddComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=F:/Users/Daniel/Documents/Web Development/One App/angular-src/src/add.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(authService, router, projectService, flashMessages) {
        this.authService = authService;
        this.router = router;
        this.projectService = projectService;
        this.flashMessages = flashMessages;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuthenticatedUser().subscribe(function (data) {
            _this.user = data.user;
            _this.projectService.getProjects(data.user.username).subscribe(function (projects) {
                _this.projects = projects.projects;
            });
        });
    };
    DashboardComponent.prototype.onDeleteClick = function ($event) {
        var _this = this;
        var deleteId = $event.toElement.id;
        this.projectService.deleteProject(deleteId).subscribe(function (data) {
            if (data.success) {
                _this.flashMessages.show('Delete Successful. Please reload the page to see your changes', { cssClass: 'alert-success no-margin-text', timeout: 10000 });
            }
            else {
                _this.flashMessages.show('The project could not be deleted. Please try again later.', { cssClass: 'alert-danger no-margin-text', timeout: 3000 });
            }
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(688),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=F:/Users/Daniel/Documents/Web Development/One App/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = (function () {
    function EditComponent(router, projectService, activatedRoute, flashMessages) {
        this.router = router;
        this.projectService = projectService;
        this.activatedRoute = activatedRoute;
        this.flashMessages = flashMessages;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.projectService.getSingleProject(_this.id).subscribe(function (data) {
                if (data.success) {
                    _this.projectData = data.project;
                    _this.name = data.project.name,
                        _this.owner = data.project.owner,
                        _this.iteration = data.project.iteration;
                    _this.owner_pretty = data.project.owner_pretty,
                        _this.github_file = data.project.github_file,
                        _this.deployment_date = data.project.deployment_date,
                        _this.ftp_server = data.project.ftp_server,
                        _this.ftp_port = data.project.ftp_port,
                        _this.ftp_username = data.project.ftp_username,
                        _this.ftp_password = data.project.ftp_password;
                }
                else {
                    console.log("Couldn't find project");
                }
            });
        });
    };
    EditComponent.prototype.onUpdateSubmit = function () {
        var _this = this;
        var newProjectData = {
            name: this.name,
            iteration: this.iteration,
            deployment_date: this.deployment_date,
            owner: this.owner,
            owner_pretty: this.owner_pretty,
            github_file: this.github_file,
            ftp_server: this.ftp_server,
            ftp_port: this.ftp_port,
            ftp_username: this.ftp_username,
            ftp_password: this.ftp_password
        };
        this.projectService.updateProject(this.id, newProjectData).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessages.show('The project failed to update. Please try again later', { cssClass: 'alert-danger no-margin-text', timeout: 3000 });
            }
        });
    };
    EditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(689),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], EditComponent);
    return EditComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=F:/Users/Daniel/Documents/Web Development/One App/angular-src/src/edit.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(690),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=F:/Users/Daniel/Documents/Web Development/One App/angular-src/src/home.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, FlashMessagesService, router) {
        this.authService = authService;
        this.FlashMessagesService = FlashMessagesService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.FlashMessagesService.show(data.message, { cssClass: 'alert-danger no-margin-text', timeout: 3000 });
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(691),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=F:/Users/Daniel/Documents/Web Development/One App/angular-src/src/login.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuthenticatedUser().subscribe(function (data) {
            _this.user = data.user;
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(692),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/Users/Daniel/Documents/Web Development/One App/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessagesService, authService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            passwordconfirmation: this.passwordconfirmation,
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessagesService.show('Please fill out all fields', { cssClass: 'alert-danger no-margin-text', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessagesService.show('Please enter a valid email address', { cssClass: 'alert-danger no-margin-text', timeout: 3000 });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('Successfully registered. Redirecting...', { cssClass: 'alert-success no-margin-text', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessagesService.show('There was an error whilst signing you up. Please try again.', { cssClass: 'alert-danger no-margin-text', timeout: 3000 });
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(693),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=F:/Users/Daniel/Documents/Web Development/One App/angular-src/src/register.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=F:/Users/Daniel/Documents/Web Development/One App/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReverseAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReverseAuthGuard = (function () {
    function ReverseAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ReverseAuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/dashboard']);
            return false;
        }
        else {
            return true;
        }
    };
    ReverseAuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ReverseAuthGuard);
    return ReverseAuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=F:/Users/Daniel/Documents/Web Development/One App/angular-src/src/reverseauth.guard.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=F:/Users/Daniel/Documents/Web Development/One App/angular-src/src/environment.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAuthenticatedUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/settings', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=F:/Users/Daniel/Documents/Web Development/One App/angular-src/src/auth.service.js.map

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "label {\r\n    position: absolute;\r\n}\r\n\r\n.add-project-form input[type='text'] {\r\n    padding-top: 28px;\r\n}"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ".button-delete {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "label {\r\n    position: absolute;\r\n}\r\n\r\n.add-project-form input[type='text'] {\r\n    padding-top: 28px;\r\n}"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "label {\r\n    position: absolute;\r\n}\r\n\r\n.left-holder-container {\r\n    height: 100vh;\r\n}"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "a {\r\n    color: white;\r\n}\r\n\r\na:hover, a:active {\r\n   text-decoration: none;\r\n}\r\n\r\n.brand-link {\r\n    font-weight: 600;\r\n}\r\n\r\n.nav-link {\r\n    font-weight: 300;\r\n}"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ".left-holder-container {\r\n    height: 100vh;\r\n}\r\n\r\nlabel {\r\n    position: absolute;\r\n}"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<div class=\"angular-outlet\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<section id=\"main-admin-body\">\n    <div class=\"project-info\">\n        <h1>Add/Edit Project</h1>\n        <a routerLink=\"/dashboard\" class=\"add-new-button overview-button\">Back to overview</a>\n    </div>\n    \n    <div class=\"add-project-form\">\n        <flash-messages></flash-messages>\n        <form (submit)=\"onAddSubmit()\" id=\"add-proect\">\n            <h2>General Project Info</h2>\n            \n            <label for=\"project-name\">Project Name</label>\n            <input type=\"text\" name=\"project-name\" [(ngModel)]=\"name\" placeholder=\"Deployment 1\">\n\n            <label for=\"project-manager\">Project Manager</label>\n            <input type=\"text\" name=\"project-manager\" [(ngModel)]=\"owner_pretty\" placeholder=\"Firstname Lastname\">\n\n            <h2 class=\"form-splitter\">Deployment Info</h2>\n            \n            <label for=\"github-filelink\">GitHub File Link</label>\n            <input type=\"text\" name=\"github-filelink\" [(ngModel)]=\"github_filelink\" placeholder=\"Link to ZIP file\">\n\n\n            <div class=\"half\">\n                <label for=\"ftp-server\">FTP Server</label>\n                <input type=\"text\" name=\"ftp-server\" [(ngModel)]=\"ftp_server\" placeholder=\"ftp.server.com\">\n            </div>\n\n            <div class=\"half\">\n                <label for=\"ftp-port\">FTP Port</label>\n                <input type=\"text\" name=\"ftp-port\" [(ngModel)]=\"ftp_port\" placeholder=\"21\">\n            </div>\n\n            <div class=\"half\">\n                <label for=\"ftp-username\">FTP Username</label>\n                <input type=\"text\" name=\"ftp-username\" [(ngModel)]=\"ftp_username\" placeholder=\"username\">\n            </div>\n\n            <div class=\"half\">\n                <label for=\"ftp-password\">FTP Password</label>\n                <input type=\"password\" name=\"ftp-password\" [(ngModel)]=\"ftp_password\" placeholder=\"Password\">\n            </div>\n\n            <input type=\"submit\" class=\"new-update-submit\" value=\"Add/Update Deployment\">\n        </form>\n    </div>\n</section>"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<section id=\"main-admin-body\">\n  <div class=\"project-info\">\n      <h1>My Projects</h1>\n      <a routerLink=\"/dashboard/new\" class=\"add-new-button\">Add New</a>\n  </div>\n  \n  <div class=\"body-container\">\n\n\n    <flash-messages></flash-messages>\n      <div *ngFor=\"let project of projects\" class=\"deployment-block\">\n          <div class=\"deployment-left\">\n              <h2>{{project.name}}</h2>\n              <table class=\"deployment-data-table\">\n                  <tr>\n                      <th>Author</th>\n                      <th>Last Deployed</th>\n                      <th>Deployment Iteration</th>\n                  </tr>\n                  <tr>\n                      <td>{{project.owner_pretty}}</td>\n                      <td>{{project.deployment_date | date:'short'}}</td>\n                      <td>{{project.iteration}}</td>\n                  </tr>\n              </table>\n          </div>\n          <div class=\"deployment-right\">\n              <a routerLink='/dashboard/edit/{{project._id}}' class=\"button-admin button-edit\">Edit</a>\n              <a href=\"#\" class=\"button-admin button-force\">Force</a>\n              <a (click)=\"onDeleteClick($event)\" data-id=\"{{project._id}}\" class=\"button-admin button-delete\">Delete</a>\n          </div>\n      </div>\n  </div>\n\n\n</section>"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<section id=\"main-admin-body\">\n    <div class=\"project-info\">\n        <h1>Add/Edit Project</h1>\n        <a routerLink=\"/dashboard\" class=\"add-new-button overview-button\">Back to overview</a>\n    </div>\n    \n    <div class=\"add-project-form\">\n        <flash-messages></flash-messages>\n        <form (submit)=\"onUpdateSubmit()\" id=\"add-proect\">\n            <h2>General Project Info</h2>\n            \n            <label for=\"project-name\">Project Name</label>\n            <input type=\"text\" name=\"project-name\" [(ngModel)]=\"name\" placeholder=\"Deployment 1\">\n\n            <label for=\"project-manager\">Project Manager</label>\n            <input type=\"text\" name=\"project-manager\" [(ngModel)]=\"owner_pretty\" placeholder=\"Firstname Lastname\">\n\n            <h2 class=\"form-splitter\">Deployment Info</h2>\n            \n            <label for=\"github-filelink\">GitHub File Link</label>\n            <input type=\"text\" name=\"github-filelink\" [(ngModel)]=\"github_file\" placeholder=\"Link to ZIP file\">\n\n\n            <div class=\"half\">\n                <label for=\"ftp-server\">FTP Server</label>\n                <input type=\"text\" name=\"ftp-server\" [(ngModel)]=\"ftp_server\" placeholder=\"ftp.server.com\">\n            </div>\n\n            <div class=\"half\">\n                <label for=\"ftp-port\">FTP Port</label>\n                <input type=\"text\" name=\"ftp-port\" [(ngModel)]=\"ftp_port\" placeholder=\"21\">\n            </div>\n\n            <div class=\"half\">\n                <label for=\"ftp-username\">FTP Username</label>\n                <input type=\"text\" name=\"ftp-username\" [(ngModel)]=\"ftp_username\" placeholder=\"username\">\n            </div>\n\n            <div class=\"half\">\n                <label for=\"ftp-password\">FTP Password</label>\n                <input type=\"password\" name=\"ftp-password\" [(ngModel)]=\"ftp_password\" placeholder=\"Password\">\n            </div>\n\n            <input type=\"submit\" class=\"new-update-submit\" value=\"Add/Update Deployment\">\n        </form>\n    </div>\n</section>"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<div class=\"homepage\">\n  <section class=\"body-center\">\n        <h1 class=\"main-lead\">one.</h1>\n        <p>Deploy WordPress themes in a single click with One.</p>\n\n        <div class=\"button-group clearfix\">\n            <div class=\"button-group-half\">\n                <a routerLink=\"/register\" class=\"button button-main pull-right home-cta\">Create Account</a>\n            </div>\n            <div class=\"button-group-half\">\n                <a routerLink=\"/login\" class=\"button button-secondary pull-left home-cta\">Log In</a>\n            </div>\n        </div>\n    </section>\n</div>"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<div class=\"left-holder-container login-background\">\n        <br>\n    </div>\n\n    <div class=\"right-holder-container\">\n        <h1>one.</h1>\n        <p>Sign in to your account</p>\n\n        <flash-messages></flash-messages>\n\n        <form (submit)=\"onLoginSubmit()\" id=\"login-form\">\n            <label for=\"login-username\">Username</label>\n            <input type=\"text\" name=\"login-username\" [(ngModel)]=\"username\" placeholder=\"Username\">\n\n            <label for=\"login-password\">Password</label>\n            <input type=\"password\" name=\"login-password\" [(ngModel)]=\"password\" placeholder=\"Password\">\n\n            <input type=\"submit\" class=\"button button-main\" value=\"Sign In\">\n        </form>\n    </div>"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navigation\">\n  <div class=\"nav-container\">\n      <div class=\"nav-left\">\n          <h1 class=\"brand\"><a routerLink=\"/\" class=\"brand-link\">one.</a></h1>\n      </div>\n      <div class=\"nav-right\">\n          <ul class=\"nav-list\">\n              <li class=\"nav-username\" *ngIf='user'><a routerLink=\"/dashboard\">{{user.name}}</a></li>\n              <li><a routerLink=\"/dashboard\" class=\"nav-link\">Dashboard</a></li>\n              <li>Settings</li>\n              <li>\n                  <a href=\"#\" (click)=\"onLogoutClick()\" class=\"nav-button\">Log Out</a>\n              </li>\n          </ul>\n      </div>\n  </div>\n</nav>"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "  <div class=\"left-holder-container register-background\">\n        <br>\n    </div>\n\n    <div class=\"right-holder-container\">\n        <h1>one.</h1>\n        <p>Create an account with us.</p>\n\n        <flash-messages></flash-messages>\n\n        <form (submit)=\"onRegisterSubmit()\" id=\"login-form\">\n            <label for=\"login-username\">Username</label>\n            <input type=\"text\" name=\"login-username\" [(ngModel)]=\"username\" placeholder=\"Username\">\n\n            <label for=\"login-email\">Email Address</label>\n            <input type=\"text\" name=\"login-email\" [(ngModel)]=\"email\" placeholder=\"Email Address\">\n\n            <label for=\"login-name\">Your Name</label>\n            <input type=\"text\" name=\"login-name\" [(ngModel)]=\"name\" placeholder=\"John Doe\">\n\n            <label for=\"login-password\">Password</label>\n            <input type=\"password\" name=\"login-password\" [(ngModel)]=\"password\" placeholder=\"Password\">\n\n            <label for=\"login-passwordconfirmation\">Password (Once More...)</label>\n            <input type=\"password\" name=\"login-passwordconfirmation\" [(ngModel)]=\"passwordconfirmation\" placeholder=\"Password\">\n\n            <input type=\"submit\" class=\"button button-main\" value=\"Sign Up\">\n        </form>\n    </div>"

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);


/***/ })

},[716]);
//# sourceMappingURL=main.bundle.map