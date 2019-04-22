(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["repo-repo-module"],{

/***/ "./src/root/repo/repo-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/root/repo/repo-routing.module.ts ***!
  \**********************************************/
/*! exports provided: RepoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoRoutingModule", function() { return RepoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _repo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repo.component */ "./src/root/repo/repo.component.ts");
/* harmony import */ var _repo_readme_repo_readme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./repo-readme/repo-readme.component */ "./src/root/repo/repo-readme/repo-readme.component.ts");
/* harmony import */ var _repo_events_repo_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./repo-events/repo-events.component */ "./src/root/repo/repo-events/repo-events.component.ts");






var routes = [
    {
        path: ':owner/:name',
        component: _repo_component__WEBPACK_IMPORTED_MODULE_3__["RepoComponent"],
        children: [
            { path: '', component: _repo_readme_repo_readme_component__WEBPACK_IMPORTED_MODULE_4__["RepoReadmeComponent"] },
            { path: 'events', component: _repo_events_repo_events_component__WEBPACK_IMPORTED_MODULE_5__["RepoEventsComponent"] },
        ]
    }
];
var RepoRoutingModule = /** @class */ (function () {
    function RepoRoutingModule() {
    }
    RepoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RepoRoutingModule);
    return RepoRoutingModule;
}());



/***/ }),

/***/ "./src/root/repo/repo.module.ts":
/*!**************************************!*\
  !*** ./src/root/repo/repo.module.ts ***!
  \**************************************/
/*! exports provided: RepoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoModule", function() { return RepoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/root/shared/shared.module.ts");
/* harmony import */ var _repo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./repo.component */ "./src/root/repo/repo.component.ts");
/* harmony import */ var _repo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./repo-routing.module */ "./src/root/repo/repo-routing.module.ts");
/* harmony import */ var _repo_readme_repo_readme_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./repo-readme/repo-readme.component */ "./src/root/repo/repo-readme/repo-readme.component.ts");
/* harmony import */ var _repo_events_repo_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./repo-events/repo-events.component */ "./src/root/repo/repo-events/repo-events.component.ts");








var RepoModule = /** @class */ (function () {
    function RepoModule() {
    }
    RepoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _repo_routing_module__WEBPACK_IMPORTED_MODULE_5__["RepoRoutingModule"],
            ],
            declarations: [
                _repo_component__WEBPACK_IMPORTED_MODULE_4__["RepoComponent"],
                _repo_readme_repo_readme_component__WEBPACK_IMPORTED_MODULE_6__["RepoReadmeComponent"],
                _repo_events_repo_events_component__WEBPACK_IMPORTED_MODULE_7__["RepoEventsComponent"],
            ]
        })
    ], RepoModule);
    return RepoModule;
}());



/***/ })

}]);
//# sourceMappingURL=repo-repo-module.js.map