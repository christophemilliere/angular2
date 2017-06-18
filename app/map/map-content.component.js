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
var core_2 = require("angular2-google-maps/core");
var MapContentComponent = (function () {
    function MapContentComponent(mapApiWrapper) {
        this.mapApiWrapper = mapApiWrapper;
    }
    MapContentComponent.prototype.ngOnInit = function () {
        this.mapApiWrapper.getNativeMap()
            .then(function (map) {
            var position = new google.maps.LatLng(48.30725, -1.43307);
            var circle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#00FF00',
                fillOpacity: 0.35,
                map: map,
                center: position,
                radius: 5000
            });
        });
    };
    return MapContentComponent;
}());
MapContentComponent = __decorate([
    core_1.Component({
        selector: 'map-content',
        template: ''
    }),
    __metadata("design:paramtypes", [core_2.GoogleMapsAPIWrapper])
], MapContentComponent);
exports.MapContentComponent = MapContentComponent;
//# sourceMappingURL=map-content.component.js.map