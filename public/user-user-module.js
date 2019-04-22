(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/root/user/event-card-view/event-card-view.component.css":
/*!*********************************************************************!*\
  !*** ./src/root/user/event-card-view/event-card-view.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi91c2VyL2V2ZW50LWNhcmQtdmlldy9ldmVudC1jYXJkLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/root/user/event-card-view/event-card-view.component.html":
/*!**********************************************************************!*\
  !*** ./src/root/user/event-card-view/event-card-view.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"event.type=='WatchEvent'\">\n  <i class=\"fa fa-star fa-fw text-muted\" aria-hidden=\"true\"></i>\n  <a [routerLink]=\"['/user', event.actor.login]\">{{event.actor.login}} </a> starred\n  <a [routerLink]=\"'/repo/' + event.repo.name\">{{event.repo.name}}</a>\n  <small class=\"text-muted\">{{ event.created_at }}</small>\n  <hr>\n</div>\n\n<div *ngIf=\"event.type=='PushEvent' && event.payload.ref=='refs/heads/master'\">\n  <i class=\"fa fa-circle-o fa-fw text-muted\" aria-hidden=\"true\"></i>\n  <a [routerLink]=\"['/user', event.actor.login]\">{{event.actor.login}} </a> pushed to\n  <a [routerLink]=\"'/repo/' + event.repo.name\">{{event.repo.name}}</a>\n  <small class=\"text-muted\">{{ event.created_at }}</small>\n  <hr>\n</div>\n\n<div *ngIf=\"event.type=='CreateEvent' && event.payload.ref_type=='repository'\">\n  <i class=\"fa fa-book fa-fw text-muted\" aria-hidden=\"true\"></i>\n  <a [routerLink]=\"['/user', event.actor.login]\">{{event.actor.login}} </a> created repository\n  <a [routerLink]=\"'/repo/' + event.repo.name\">{{event.repo.name}}</a>\n  <small class=\"text-muted\">{{ event.created_at }}</small>\n  <hr>\n</div>\n\n<div *ngIf=\"event.type=='ForkEvent'\">\n  <i class=\"fa fa-code-fork fa-fw text-muted\" aria-hidden=\"true\"></i>\n  <a [routerLink]=\"['/user', event.actor.login]\">{{event.actor.login}} </a> forked\n  <a [routerLink]=\"['/repo', event.repo.name]\">{{event.repo.name}} </a> to\n  <a [routerLink]=\"'/repo/' + event.repo.name\">{{event.repo.name}}</a>\n  <small class=\"text-muted\">{{ event.created_at }}</small>\n  <hr>\n</div>\n\n<div *ngIf=\"event.type=='IssueCommentEvent'\">\n  <i class=\"fa fa-comment fa-fw text-muted\" aria-hidden=\"true\"></i>\n  <a [routerLink]=\"['/user', event.actor.login]\">{{event.actor.login}} </a> commented issue\n  <a [href]=\"event.payload.comment.html_url\">#{{event.payload.issue.number}} </a> for\n  <a [routerLink]=\"'/repo/' + event.repo.name\">{{event.repo.name}}</a>\n  <small class=\"text-muted\">{{ event.created_at }}</small>\n  <hr>\n</div>\n\n<div *ngIf=\"event.type=='IssuesEvent'\">\n  <i class=\"fa fa-exclamation-circle fa-fw text-muted\" aria-hidden=\"true\"></i>\n  <a [routerLink]=\"['/user', event.actor.login]\">{{event.actor.login}} </a> {{event.payload.action}} issue\n  <a [href]=\"event.payload.issue.html_url\">#{{event.payload.issue.number}} </a> for\n  <a [routerLink]=\"'/repo/' + event.repo.name\">{{event.repo.name}}</a>\n  <small class=\"text-muted\">{{ event.created_at }}</small>\n  <hr>\n</div>\n\n<div *ngIf=\"event.type=='PullRequestEvent'\">\n  <i class=\"fa fa-arrows-h fa-fw text-muted\" aria-hidden=\"true\"></i>\n  <a [routerLink]=\"['/user', event.actor.login]\">{{event.actor.login}} </a> {{event.payload.action}} pull request\n  <a [href]=\"event.payload.pull_request.html_url\">#{{event.payload.pull_request.number}} </a> for\n  <a [routerLink]=\"'/repo/' + event.repo.name\">{{event.repo.name}}</a>\n  <small class=\"text-muted\">{{ event.created_at }}</small>\n  <hr>\n</div>\n\n<!--\n<pre> \nDebug: Welcome to the Event Card View\n {{event | json}}\n</pre>  -->"

/***/ }),

/***/ "./src/root/user/event-card-view/event-card-view.component.ts":
/*!********************************************************************!*\
  !*** ./src/root/user/event-card-view/event-card-view.component.ts ***!
  \********************************************************************/
/*! exports provided: EventCardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCardViewComponent", function() { return EventCardViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_events_user_events_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-events/user-events.types */ "./src/root/user/user-events/user-events.types.ts");



var EventCardViewComponent = /** @class */ (function () {
    function EventCardViewComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _user_events_user_events_types__WEBPACK_IMPORTED_MODULE_2__["Event"])
    ], EventCardViewComponent.prototype, "event", void 0);
    EventCardViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'event-card-view',
            template: __webpack_require__(/*! ./event-card-view.component.html */ "./src/root/user/event-card-view/event-card-view.component.html"),
            styles: [__webpack_require__(/*! ./event-card-view.component.css */ "./src/root/user/event-card-view/event-card-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventCardViewComponent);
    return EventCardViewComponent;
}());



/***/ }),

/***/ "./src/root/user/shared/user-card-view/user-card-view.component.css":
/*!**************************************************************************!*\
  !*** ./src/root/user/shared/user-card-view/user-card-view.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi91c2VyL3NoYXJlZC91c2VyLWNhcmQtdmlldy91c2VyLWNhcmQtdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/root/user/shared/user-card-view/user-card-view.component.html":
/*!***************************************************************************!*\
  !*** ./src/root/user/shared/user-card-view/user-card-view.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-card-view works!\n</p>\n"

/***/ }),

/***/ "./src/root/user/shared/user-card-view/user-card-view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/root/user/shared/user-card-view/user-card-view.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserCardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardViewComponent", function() { return UserCardViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserCardViewComponent = /** @class */ (function () {
    function UserCardViewComponent() {
    }
    UserCardViewComponent.prototype.ngOnInit = function () {
    };
    UserCardViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-card-view',
            template: __webpack_require__(/*! ./user-card-view.component.html */ "./src/root/user/shared/user-card-view/user-card-view.component.html"),
            styles: [__webpack_require__(/*! ./user-card-view.component.css */ "./src/root/user/shared/user-card-view/user-card-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserCardViewComponent);
    return UserCardViewComponent;
}());



/***/ }),

/***/ "./src/root/user/user-events/user-events.component.css":
/*!*************************************************************!*\
  !*** ./src/root/user/user-events/user-events.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi91c2VyL3VzZXItZXZlbnRzL3VzZXItZXZlbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/root/user/user-events/user-events.component.html":
/*!**************************************************************!*\
  !*** ./src/root/user/user-events/user-events.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- {{ events[0] | json}} -->\n<div *ngIf=\"events\">\n  <ul class=\"mt-2 list-unstyled\">\n    <li *ngFor=\"let event of events\">\n        <event-card-view [event]=\"event\"></event-card-view>\n    </li>\n  </ul>\n  <p *ngIf=\"events.length==0\">\n    No User Event to list! \n  </p>\n</div>\n\n\n"

/***/ }),

/***/ "./src/root/user/user-events/user-events.component.ts":
/*!************************************************************!*\
  !*** ./src/root/user/user-events/user-events.component.ts ***!
  \************************************************************/
/*! exports provided: UserEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEventsComponent", function() { return UserEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_github_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/github-api.service */ "./src/root/core/github-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var UserEventsComponent = /** @class */ (function () {
    function UserEventsComponent(ghas, route, location) {
        this.ghas = ghas;
        this.route = route;
        this.location = location;
        // events
        this.events = [];
        this.page = 1;
        this.perPage = 20;
        this.loadButtonDisabled = false;
    }
    UserEventsComponent.prototype.loadUserEvents = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return _this.ghas.getUserEvents(params['login'], _this.page, _this.perPage); }))
            .subscribe(function (events) { return _this.events = events; });
    };
    UserEventsComponent.prototype.logFollowers = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return _this.ghas.getUserEvents(params['login'], _this.page, _this.perPage); }))
            // .subscribe(events => this.events = events);
            .subscribe(function (events) { return console.log("logged Subscribed value", events); });
    };
    UserEventsComponent.prototype.ngOnInit = function () {
        this.loadUserEvents();
        this.logFollowers();
    };
    UserEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-events',
            template: __webpack_require__(/*! ./user-events.component.html */ "./src/root/user/user-events/user-events.component.html"),
            styles: [__webpack_require__(/*! ./user-events.component.css */ "./src/root/user/user-events/user-events.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_github_api_service__WEBPACK_IMPORTED_MODULE_2__["GithubApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], UserEventsComponent);
    return UserEventsComponent;
}());



/***/ }),

/***/ "./src/root/user/user-events/user-events.types.ts":
/*!********************************************************!*\
  !*** ./src/root/user/user-events/user-events.types.ts ***!
  \********************************************************/
/*! exports provided: Event, EventType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return EventType; });
var Event = /** @class */ (function () {
    function Event() {
    }
    return Event;
}());

var EventType;
(function (EventType) {
    EventType[EventType["CommitCommentEvent"] = 0] = "CommitCommentEvent";
    EventType[EventType["CreateEvent"] = 1] = "CreateEvent";
    EventType[EventType["DeleteEvent"] = 2] = "DeleteEvent";
    EventType[EventType["DeploymentEvent"] = 3] = "DeploymentEvent";
    EventType[EventType["DeploymentStatusEvent"] = 4] = "DeploymentStatusEvent";
    EventType[EventType["DownloadEvent"] = 5] = "DownloadEvent";
    EventType[EventType["FollowEvent"] = 6] = "FollowEvent";
    EventType[EventType["ForkEvent"] = 7] = "ForkEvent";
    EventType[EventType["ForkApplyEvent"] = 8] = "ForkApplyEvent";
    EventType[EventType["GistEvent"] = 9] = "GistEvent";
    EventType[EventType["GollumEvent"] = 10] = "GollumEvent";
    EventType[EventType["IssueCommentEvent"] = 11] = "IssueCommentEvent";
    EventType[EventType["IssuesEvent"] = 12] = "IssuesEvent";
    EventType[EventType["LabelEvent"] = 13] = "LabelEvent";
    EventType[EventType["MemberEvent"] = 14] = "MemberEvent";
    EventType[EventType["MembershipEvent"] = 15] = "MembershipEvent";
    EventType[EventType["MilestoneEvent"] = 16] = "MilestoneEvent";
    EventType[EventType["OrganizationEvent"] = 17] = "OrganizationEvent";
    EventType[EventType["PageBuildEvent"] = 18] = "PageBuildEvent";
    EventType[EventType["PublicEvent"] = 19] = "PublicEvent";
    EventType[EventType["PullRequestEvent"] = 20] = "PullRequestEvent";
    EventType[EventType["PullRequestReviewEvent"] = 21] = "PullRequestReviewEvent";
    EventType[EventType["PullRequestReviewCommentEvent"] = 22] = "PullRequestReviewCommentEvent";
    EventType[EventType["PushEvent"] = 23] = "PushEvent";
    EventType[EventType["ReleaseEvent"] = 24] = "ReleaseEvent";
    EventType[EventType["RepositoryEvent"] = 25] = "RepositoryEvent";
    EventType[EventType["StatusEvent"] = 26] = "StatusEvent";
    EventType[EventType["TeamEvent"] = 27] = "TeamEvent";
    EventType[EventType["TeamAddEvent"] = 28] = "TeamAddEvent";
    EventType[EventType["WatchEvent"] = 29] = "WatchEvent";
})(EventType || (EventType = {}));


/***/ }),

/***/ "./src/root/user/user-followers/user-followers.component.css":
/*!*******************************************************************!*\
  !*** ./src/root/user/user-followers/user-followers.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi91c2VyL3VzZXItZm9sbG93ZXJzL3VzZXItZm9sbG93ZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/root/user/user-followers/user-followers.component.html":
/*!********************************************************************!*\
  !*** ./src/root/user/user-followers/user-followers.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"events.length==0\">\n  No User Followers to list! \n</p>"

/***/ }),

/***/ "./src/root/user/user-followers/user-followers.component.ts":
/*!******************************************************************!*\
  !*** ./src/root/user/user-followers/user-followers.component.ts ***!
  \******************************************************************/
/*! exports provided: UserFollowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFollowersComponent", function() { return UserFollowersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_github_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/github-api.service */ "./src/root/core/github-api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var UserFollowersComponent = /** @class */ (function () {
    function UserFollowersComponent(ghas, route, location) {
        this.ghas = ghas;
        this.route = route;
        this.location = location;
        this.perPage = 51;
    }
    UserFollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.route.parent.params, this.route.queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((function (ps) {
            _this.page = +ps[1]['page'] || 1;
            return _this.ghas.getUserFollowers(ps[0]['login'], _this.page, _this.perPage);
        }))).subscribe(function (followers) { return console.log("logged Subscribed value", followers); });
    };
    UserFollowersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-followers',
            template: __webpack_require__(/*! ./user-followers.component.html */ "./src/root/user/user-followers/user-followers.component.html"),
            styles: [__webpack_require__(/*! ./user-followers.component.css */ "./src/root/user/user-followers/user-followers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_github_api_service__WEBPACK_IMPORTED_MODULE_5__["GithubApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], UserFollowersComponent);
    return UserFollowersComponent;
}());



/***/ }),

/***/ "./src/root/user/user-following/user-following.component.css":
/*!*******************************************************************!*\
  !*** ./src/root/user/user-following/user-following.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi91c2VyL3VzZXItZm9sbG93aW5nL3VzZXItZm9sbG93aW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/root/user/user-following/user-following.component.html":
/*!********************************************************************!*\
  !*** ./src/root/user/user-following/user-following.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"events.length==0\">\n  No User Following to list! \n</p>"

/***/ }),

/***/ "./src/root/user/user-following/user-following.component.ts":
/*!******************************************************************!*\
  !*** ./src/root/user/user-following/user-following.component.ts ***!
  \******************************************************************/
/*! exports provided: UserFollowingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFollowingComponent", function() { return UserFollowingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_github_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/github-api.service */ "./src/root/core/github-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var UserFollowingComponent = /** @class */ (function () {
    function UserFollowingComponent(ghas, route, location) {
        this.ghas = ghas;
        this.route = route;
        this.location = location;
        this.events = [];
        this.page = 1;
        this.perPage = 20;
        this.loadButtonDisabled = false;
    }
    // getUserRecievedEvents
    UserFollowingComponent.prototype.loadEvents = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return _this.ghas.getUserRecievedEvents(params['login'], _this.page, _this.perPage); }))
            // .subscribe(events => this.events = events);
            .subscribe(function (followers) { return console.log("logged Subscribed value", followers); });
    };
    UserFollowingComponent.prototype.ngOnInit = function () {
        this.loadEvents();
    };
    UserFollowingComponent.prototype.loadMore = function () {
        this.page++;
        this.loadEvents();
    };
    UserFollowingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-following',
            template: __webpack_require__(/*! ./user-following.component.html */ "./src/root/user/user-following/user-following.component.html"),
            styles: [__webpack_require__(/*! ./user-following.component.css */ "./src/root/user/user-following/user-following.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_github_api_service__WEBPACK_IMPORTED_MODULE_2__["GithubApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], UserFollowingComponent);
    return UserFollowingComponent;
}());



/***/ }),

/***/ "./src/root/user/user-recieved-events/user-recieved-events.component.css":
/*!*******************************************************************************!*\
  !*** ./src/root/user/user-recieved-events/user-recieved-events.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi91c2VyL3VzZXItcmVjaWV2ZWQtZXZlbnRzL3VzZXItcmVjaWV2ZWQtZXZlbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/root/user/user-recieved-events/user-recieved-events.component.html":
/*!********************************************************************************!*\
  !*** ./src/root/user/user-recieved-events/user-recieved-events.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"events\">\n  <ul class=\"mt-2 list-unstyled\">\n    <li *ngFor=\"let event of events\">\n       <!-- Placeholder for each Event in the User Recieved Events Service -->\n      <event-card-view [event]=\"event\"></event-card-view>\n    </li>\n  </ul>\n  <p *ngIf=\"events.length==0\">\n    No events to list!\n  </p>\n  <nav aria-label=\"Page navigation\" class=\"text-xs-center mb-2\">\n    <div class=\"btn-group\" data-toggle=\"buttons\">\n      <button [disabled]=\"loadButtonDisabled\" (click)=\"loadMore()\" type=\"button\" class=\"btn page-link\">Load more</button>\n    </div>\n  </nav>\n</div>\n\n<!-- <pre> -->\n<!-- {{ events | json}} -->\n<!-- </pre> -->"

/***/ }),

/***/ "./src/root/user/user-recieved-events/user-recieved-events.component.ts":
/*!******************************************************************************!*\
  !*** ./src/root/user/user-recieved-events/user-recieved-events.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserRecievedEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRecievedEventsComponent", function() { return UserRecievedEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_github_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/github-api.service */ "./src/root/core/github-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var UserRecievedEventsComponent = /** @class */ (function () {
    function UserRecievedEventsComponent(ghas, route, location) {
        this.ghas = ghas;
        this.route = route;
        this.location = location;
        this.events = [];
        this.page = 1;
        this.perPage = 20;
        this.loadButtonDisabled = false;
    }
    // getUserRecievedEvents
    UserRecievedEventsComponent.prototype.loadEvents = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return _this.ghas.getUserRecievedEvents(params['login'], _this.page, _this.perPage); }))
            .subscribe(function (events) { return _this.events = events; });
        // .subscribe(followers => console.log( `logged Subscribed value`,followers) );
    };
    // Log The User Recieved Events
    UserRecievedEventsComponent.prototype.logUserRecievedEvents = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return _this.ghas.getUserRecievedEvents(params['login'], _this.page, _this.perPage); }))
            // .subscribe(events => this.events = events);
            .subscribe(function (followers) { return console.log("logged Subscribed value", followers); });
    };
    UserRecievedEventsComponent.prototype.ngOnInit = function () {
        this.loadEvents();
    };
    UserRecievedEventsComponent.prototype.loadMore = function () {
        this.page++;
        this.loadEvents();
    };
    UserRecievedEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-recieved-events',
            template: __webpack_require__(/*! ./user-recieved-events.component.html */ "./src/root/user/user-recieved-events/user-recieved-events.component.html"),
            styles: [__webpack_require__(/*! ./user-recieved-events.component.css */ "./src/root/user/user-recieved-events/user-recieved-events.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_github_api_service__WEBPACK_IMPORTED_MODULE_2__["GithubApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], UserRecievedEventsComponent);
    return UserRecievedEventsComponent;
}());



/***/ }),

/***/ "./src/root/user/user-repos/user-repos.component.css":
/*!***********************************************************!*\
  !*** ./src/root/user/user-repos/user-repos.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi91c2VyL3VzZXItcmVwb3MvdXNlci1yZXBvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/root/user/user-repos/user-repos.component.html":
/*!************************************************************!*\
  !*** ./src/root/user/user-repos/user-repos.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-repos works!\n</p>\n"

/***/ }),

/***/ "./src/root/user/user-repos/user-repos.component.ts":
/*!**********************************************************!*\
  !*** ./src/root/user/user-repos/user-repos.component.ts ***!
  \**********************************************************/
/*! exports provided: UserReposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReposComponent", function() { return UserReposComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_github_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/github-api.service */ "./src/root/core/github-api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

// Angular Modules 



// Github Service using the HTTP Service

// RxJS Operators and Functions


var UserReposComponent = /** @class */ (function () {
    function UserReposComponent(ghas, route, location) {
        this.ghas = ghas;
        this.route = route;
        this.location = location;
        this.perPage = 51;
    }
    // Grab this user's Repos
    UserReposComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(this.route.parent.params, this.route.queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((function (ps) {
            _this.page = +ps[1]['page'] || 1;
            return _this.ghas.getUserRepos(ps[0]['login'], _this.page, _this.perPage);
        }))).subscribe(function (followers) { return console.log("logged Subscribed value", followers); });
    };
    UserReposComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-repos',
            template: __webpack_require__(/*! ./user-repos.component.html */ "./src/root/user/user-repos/user-repos.component.html"),
            styles: [__webpack_require__(/*! ./user-repos.component.css */ "./src/root/user/user-repos/user-repos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_github_api_service__WEBPACK_IMPORTED_MODULE_4__["GithubApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], UserReposComponent);
    return UserReposComponent;
}());



/***/ }),

/***/ "./src/root/user/user-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/root/user/user-routing.module.ts ***!
  \**********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/root/user/user.component.ts");
/* harmony import */ var _user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-followers/user-followers.component */ "./src/root/user/user-followers/user-followers.component.ts");
/* harmony import */ var _user_following_user_following_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-following/user-following.component */ "./src/root/user/user-following/user-following.component.ts");
/* harmony import */ var _user_repos_user_repos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-repos/user-repos.component */ "./src/root/user/user-repos/user-repos.component.ts");
/* harmony import */ var _user_events_user_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-events/user-events.component */ "./src/root/user/user-events/user-events.component.ts");
/* harmony import */ var _user_recieved_events_user_recieved_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-recieved-events/user-recieved-events.component */ "./src/root/user/user-recieved-events/user-recieved-events.component.ts");









var routes = [
    {
        path: ':login',
        component: _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
        children: [
            { path: '', component: _user_events_user_events_component__WEBPACK_IMPORTED_MODULE_7__["UserEventsComponent"] },
            { path: 'recieved-events', component: _user_recieved_events_user_recieved_events_component__WEBPACK_IMPORTED_MODULE_8__["UserRecievedEventsComponent"] },
            { path: 'followers', component: _user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_4__["UserFollowersComponent"] },
            { path: 'following', component: _user_following_user_following_component__WEBPACK_IMPORTED_MODULE_5__["UserFollowingComponent"] },
            { path: 'repos', component: _user_repos_user_repos_component__WEBPACK_IMPORTED_MODULE_6__["UserReposComponent"] },
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/root/user/user.component.css":
/*!******************************************!*\
  !*** ./src/root/user/user.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    background-color: #464345;\n    color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZiIsImZpbGUiOiIuLi91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjQzNDU7XG4gICAgY29sb3I6ICNmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/root/user/user.component.html":
/*!*******************************************!*\
  !*** ./src/root/user/user.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3\" *ngIf=\"user\">\n      <img [src]=\"user.avatar_url\" alt class=\"img-fluid rounded\">\n      <h2> {{user.name}}</h2>\n      <label class=\"text-muted\"> {{user.login}}</label>\n      <p> {{user.bio}} </p>\n      <hr/>\n      <ul class=\"list-unstyled\">\n          <li *ngIf=\"user.company\" class=\"text-truncate\">\n              <i class=\"fa fa-users fa-fw text-muted\" aria-hidden=\"true\"></i> {{user.company}}\n          </li>\n          <li *ngIf=\"user.location\" class=\"text-truncate\">\n              <i class=\"fa fa-map-marker fa-fw text-muted\" aria-hidden=\"true\"></i> {{user.location}}\n          </li>\n          <li *ngIf=\"user.blog\" class=\"text-truncate\">\n              <i class=\"fa fa-link fa-fw text-muted\" aria-hidden=\"true\"></i> <a [href]=\"user.blog\">{{user.blog}}</a>\n          </li>\n          <li *ngIf=\"user.email\" class=\"text-truncate\">\n              <i class=\"fa fa-envelope fa-fw text-muted\" aria-hidden=\"true\"></i> <a [href]=\"user.email\">{{user.email}}</a>\n          </li>\n          <li *ngIf=\"user.created_at\" class=\"text-truncate\">\n              <i class=\"fa fa-clock-o fa-fw text-muted\" aria-hidden=\"true\"></i> Joined on {{user.created_at | date: 'MMM\n              d, yyyy'}}\n          </li>\n\n      </ul>\n  </div>\n  <div class=\"col-md-9\">\n      <ul class=\"nav nav-tabs\" *ngIf=\"user\">\n          <li class=\"nav-item\">\n              <a routerLink=\".\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"nav-link\">Events</a>\n          </li>\n          <li class=\"nav-item\">\n              <a routerLink=\"recieved-events\" routerLinkActive=\"active\" class=\"nav-link\">Recieved Events</a>\n          </li>\n          <li class=\"nav-item\">\n              <a routerLink=\"repos\" routerLinkActive=\"active\" class=\"nav-link\">Repositories\n                  <span class=\"tag tag-pill tag-default\">{{user.public_repos }}</span>\n              </a>\n          </li>\n          <li class=\"nav-item\">\n              <a routerLink=\"followers\" routerLinkActive=\"active\" class=\"nav-link\" href=\"#\">Followers\n                  <span class=\"tag tag-pill tag-default\">{{user.followers }}</span>\n              </a>\n          </li>\n          <li class=\"nav-item\">\n              <a routerLink=\"following\" routerLinkActive=\"active\" class=\"nav-link\" href=\"#\">Following\n                  <span class=\"tag tag-pill tag-default\">{{user.following }}</span>\n              </a>\n          </li>\n      </ul>\n      <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/root/user/user.component.ts":
/*!*****************************************!*\
  !*** ./src/root/user/user.component.ts ***!
  \*****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_github_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/github-api.service */ "./src/root/core/github-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var UserComponent = /** @class */ (function () {
    function UserComponent(ghas, activatedRoute, location) {
        this.ghas = ghas;
        this.activatedRoute = activatedRoute;
        this.location = location;
    }
    UserComponent.prototype.logUserEventsToConsole = function () {
        var _this = this;
        this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return _this.ghas.getUser(params['login']); }))
            .subscribe(function (user) { return console.log("logUserEventsToConsole(): ", user); });
    };
    UserComponent.prototype.loadUserEvents = function () {
        var _this = this;
        // this.activatedRoute.params.subscribe(data => console.log(data)); // {login: "user-name"}
        this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return _this.ghas.getUser(params['login']); }))
            .subscribe(function (user) {
            // console.log(user)
            return _this.user = user;
        });
    };
    UserComponent.prototype.ngOnInit = function () {
        this.loadUserEvents();
        this.logUserEventsToConsole();
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/root/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/root/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_github_api_service__WEBPACK_IMPORTED_MODULE_2__["GithubApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/root/user/user.module.ts":
/*!**************************************!*\
  !*** ./src/root/user/user.module.ts ***!
  \**************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/root/shared/shared.module.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.component */ "./src/root/user/user.component.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "./src/root/user/user-routing.module.ts");
/* harmony import */ var _user_repos_user_repos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-repos/user-repos.component */ "./src/root/user/user-repos/user-repos.component.ts");
/* harmony import */ var _user_events_user_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-events/user-events.component */ "./src/root/user/user-events/user-events.component.ts");
/* harmony import */ var _shared_user_card_view_user_card_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/user-card-view/user-card-view.component */ "./src/root/user/shared/user-card-view/user-card-view.component.ts");
/* harmony import */ var _user_following_user_following_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-following/user-following.component */ "./src/root/user/user-following/user-following.component.ts");
/* harmony import */ var _user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-followers/user-followers.component */ "./src/root/user/user-followers/user-followers.component.ts");
/* harmony import */ var _user_recieved_events_user_recieved_events_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-recieved-events/user-recieved-events.component */ "./src/root/user/user-recieved-events/user-recieved-events.component.ts");
/* harmony import */ var _event_card_view_event_card_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./event-card-view/event-card-view.component */ "./src/root/user/event-card-view/event-card-view.component.ts");













var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
                _user_repos_user_repos_component__WEBPACK_IMPORTED_MODULE_6__["UserReposComponent"],
                _user_events_user_events_component__WEBPACK_IMPORTED_MODULE_7__["UserEventsComponent"],
                _shared_user_card_view_user_card_view_component__WEBPACK_IMPORTED_MODULE_8__["UserCardViewComponent"],
                _user_following_user_following_component__WEBPACK_IMPORTED_MODULE_9__["UserFollowingComponent"],
                _user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_10__["UserFollowersComponent"],
                _user_recieved_events_user_recieved_events_component__WEBPACK_IMPORTED_MODULE_11__["UserRecievedEventsComponent"],
                _event_card_view_event_card_view_component__WEBPACK_IMPORTED_MODULE_12__["EventCardViewComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map