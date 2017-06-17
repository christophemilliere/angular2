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
var map_service_1 = require("./map.service");
var MapComponent = (function () {
    function MapComponent(_mapService, _applicationRef) {
        this._mapService = _mapService;
        this._applicationRef = _applicationRef;
        this.lat = 48.30740;
        this.lng = -1.43276;
        this.startingPoint = 'La ville Ollivier, 35140 Mézières-sur-Couesnon, France';
        this.markers = [];
        this.markersFromCoords = [];
        this.pointsForPolyline = [];
    }
    MapComponent.prototype.onCoordMarkerDropped = function (event) {
        this.markerWasDropped = true;
        this.droppedLat = event.coords.lat.toFixed(5);
        this.droppedLng = event.coords.lng.toFixed(5);
    };
    MapComponent.prototype.geocode = function () {
        var _this = this;
        this._mapService.getLatLng(this.startingPoint).subscribe(function (data) { return _this.placeMarkerOnGeocodePlace(data); }, function (error) { return console.log(error); });
    };
    MapComponent.prototype.placeMarkerOnGeocodePlace = function (location) {
        var marker = {
            lat: location.geometry.location.lat(),
            lng: location.geometry.location.lng(),
            title: '',
            draggable: true
        };
        if (this.pointsForPolyline.length === 0) {
            this.pointsForPolyline.push({ lat: marker.lat, lng: marker.lng });
        }
        this.markers.push(marker);
        this._applicationRef.tick();
    };
    MapComponent.prototype.addMarkerByCoords = function (formValue, e) {
        e.preventDefault();
        var marker = { lat: 0, lng: 0, draggable: false, icon: '', title: '' };
        marker.lat = parseFloat(formValue.markerByCoordsLat);
        marker.lng = parseFloat(formValue.markerByCoordsLng);
        marker.icon = 'app/map/images/greenmarker.png';
        this.markersFromCoords.push(marker);
    };
    MapComponent.prototype.updatePolyline = function (event) {
        var droppedLatForPolyline = parseFloat(event.coords.lat);
        var droppedLngForPolyline = parseFloat(event.coords.lng);
        this.pointsForPolyline.push({ lat: droppedLatForPolyline, lng: droppedLngForPolyline });
    };
    MapComponent.prototype.deletePolyline = function () {
        this.pointsForPolyline = [];
    };
    return MapComponent;
}());
MapComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'hike-map',
        templateUrl: 'map.component.html',
        styleUrls: ['map.component.css']
    }),
    __metadata("design:paramtypes", [map_service_1.MapService, core_1.ApplicationRef])
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map