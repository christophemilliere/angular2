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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
var HikeService = (function () {
    function HikeService(_http) {
        this._http = _http;
        this.url = 'app/api/hikes.json';
    }
    // getHikes() {
    //     return this.hikes;
    // }
    HikeService.prototype.getHikesFromAPI = function () {
        return this._http.get('app/api/hikes.json')
            .do(function (x) { return console.log(x); })
            .map(function (hikes) { return hikes.json(); })
            .catch(function (error) {
            var errorMessage = "Une erreur " + error.status + " est survenue en tentant de joindre " + error.url;
            return Observable_1.Observable.throw(errorMessage);
        });
    };
    HikeService.prototype.getHikesFromAPIwithCache = function () {
        var _this = this;
        if (this.data) {
            // il est IMPORTANT de retourner un observable
            console.log('from cache');
            return Observable_1.Observable.of(this.data);
        }
        else if (this.observable) {
            // une requete est en cours
            return this.observable;
        }
        else {
            return this._http
                .get(this.url)
                .map(function (response) {
                _this.observable = null;
                if (response.status === 400) {
                    return "error 400";
                }
                else if (response.status === 200) {
                    console.log('request API endpoint');
                    // mise en cache ici
                    _this.data = response.json();
                    return _this.data;
                }
            });
        }
    };
    HikeService.prototype.getHikeById = function (id) {
        if (!this.data) {
            return undefined;
        }
        var result = this.data.filter(function (rando) { return rando.id === id; });
        if (result.length > 0) {
            return result[0];
        }
        else {
            return [];
        }
    };
    return HikeService;
}());
HikeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HikeService);
exports.HikeService = HikeService;
//# sourceMappingURL=hike.service.js.map