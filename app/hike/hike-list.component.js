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
var hike_service_1 = require("../shared/hike.service");
var HikeListComponent = (function () {
    function HikeListComponent(_hikeService) {
        this._hikeService = _hikeService;
        this.errorMessage = '';
    }
    HikeListComponent.prototype.ngOnInit = function () {
        // this.hikes = this._hikeService.getHikes();
        // console.log(this.hikes);    
        var _this = this;
        // this._hikeService.getHikesFromAPI()
        //                     .subscribe(
        //                         res => this.hikes = res,
        //                         err => this.errorMessage = err);
        this._hikeService.getHikesFromAPIwithCache()
            .subscribe(function (res) { return _this.hikes = res; }, function (err) { return console.error(err.status); });
        // console.log(this.hikes);
    };
    HikeListComponent.prototype.toggleToMyTodoHikes = function (hikeToAdd) {
        console.log("Hike " + hikeToAdd.name + " added on " + hikeToAdd.dateAddedAsTodo);
        console.log(JSON.stringify(hikeToAdd));
    };
    return HikeListComponent;
}());
HikeListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'hike-list.component.html',
        styles: ['ul {  list-style-type: none; padding: 0; margin: 0}'],
        animations: [
            core_1.trigger('onHikesDisplay', [
                core_1.transition('void => *', [
                    core_1.style({ transform: 'translateY(-25%)' }),
                    core_1.animate(250)
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [hike_service_1.HikeService])
], HikeListComponent);
exports.HikeListComponent = HikeListComponent;
//# sourceMappingURL=hike-list.component.js.map