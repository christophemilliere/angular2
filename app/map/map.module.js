"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var core_module_1 = require("angular2-google-maps/core/core-module");
var core_2 = require("angular2-google-maps/core");
var map_component_1 = require("./map.component");
var map_content_component_1 = require("./map-content.component");
var map_service_1 = require("./map.service");
var MapModule = (function () {
    function MapModule() {
    }
    return MapModule;
}());
MapModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            core_module_1.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyBW0utZH-JccVwhkgPAcXR2HYsnGOCtZJU'
            }),
            router_1.RouterModule.forChild([
                { path: 'map', component: map_component_1.MapComponent }
            ])
        ],
        declarations: [map_component_1.MapComponent, map_content_component_1.MapContentComponent],
        providers: [core_2.GoogleMapsAPIWrapper, map_service_1.MapService]
    })
], MapModule);
exports.MapModule = MapModule;
//# sourceMappingURL=map.module.js.map