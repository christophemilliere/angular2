"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var home_module_1 = require("./home/home.module");
var app_component_1 = require("./app.component");
var hike_module_1 = require("./hike/hike.module");
var home_component_1 = require("./home/home.component");
var hike_list_component_1 = require("./hike/hike-list.component");
var hike_details_component_1 = require("./hike/hike-details.component");
var page_not_found_component_1 = require("./page-not-found.component");
var contact_module_1 = require("./contact/contact.module");
var contact_us_component_1 = require("./contact/contact-us.component");
var map_module_1 = require("./map/map.module");
var map_component_1 = require("./map/map.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            hike_module_1.HikeModule,
            http_1.HttpModule,
            home_module_1.HomeModule,
            contact_module_1.ContactModule,
            animations_1.BrowserAnimationsModule,
            map_module_1.MapModule,
            router_1.RouterModule.forRoot([
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'hikes', component: hike_list_component_1.HikeListComponent },
                { path: 'hikes/:id', component: hike_details_component_1.HikeDetailsComponent },
                { path: 'contact', component: contact_us_component_1.ContactUsComponent },
                { path: 'map', component: map_component_1.MapComponent },
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
            ])],
        declarations: [app_component_1.AppComponent, page_not_found_component_1.PageNotFoundComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map