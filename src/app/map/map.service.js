"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var MapService = (function () {
    function MapService() {
    }
    MapService.prototype.getLatLng = function (address) {
        var geocoder = new google.maps.Geocoder();
        return Observable_1.Observable.create(function (observable) {
            geocoder.geocode({ 'address': address }, function (result, status) {
                // tslint:disable-next-line:indent
                if (status === google.maps.GeocoderStatus.OK) {
                    console.log(result[0]);
                    observable.next(result[0]);
                    observable.complete();
                }
                else {
                    console.error('error Status : ', status);
                    observable.next({});
                    observable.complete();
                }
            });
        });
    };
    return MapService;
}());
MapService = __decorate([
    core_1.Injectable()
], MapService);
exports.MapService = MapService;
//# sourceMappingURL=map.service.js.map