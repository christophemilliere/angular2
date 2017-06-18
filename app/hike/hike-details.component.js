"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hike_service_1 = require("../shared/hike.service");
var HikeDetailsComponent = (function () {
    function HikeDetailsComponent(_route, _router, _hikeService) {
        this._route = _route;
        this._router = _router;
        this._hikeService = _hikeService;
    }
    HikeDetailsComponent.prototype.ngOnInit = function () {
        // '+' is used to cast the string to a number
        var id = +this._route.snapshot.params['id'];
        this.hike = this._hikeService.getHikeById(id);
        this.title = "D\u00E9tails de la randonn\u00E9e " + id;
    };
    HikeDetailsComponent.prototype.goBack = function () {
        this._router.navigate(['/hikes']);
    };
    return HikeDetailsComponent;
}());
HikeDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'hike-details.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router, hike_service_1.HikeService])
], HikeDetailsComponent);
exports.HikeDetailsComponent = HikeDetailsComponent;
//# sourceMappingURL=hike-details.component.js.map