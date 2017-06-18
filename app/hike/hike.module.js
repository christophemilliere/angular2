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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var hike_list_component_1 = require("./hike-list.component");
var hike_service_1 = require("../shared/hike.service");
var hike_details_component_1 = require("./hike-details.component");
var hike_filter_pipe_1 = require("../hike/hike-filter.pipe");
var hike_summary_component_1 = require("../hike/hike-summary.component");
var HikeModule = (function () {
    function HikeModule() {
    }
    return HikeModule;
}());
HikeModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild([
                { path: 'hikes', component: hike_list_component_1.HikeListComponent },
                { path: 'hike/:id', component: hike_details_component_1.HikeDetailsComponent }
            ])],
        declarations: [hike_list_component_1.HikeListComponent, hike_details_component_1.HikeDetailsComponent, hike_filter_pipe_1.HikeFilterPipe, hike_summary_component_1.HikeSummary],
        exports: [hike_list_component_1.HikeListComponent],
        providers: [hike_service_1.HikeService]
    })
], HikeModule);
exports.HikeModule = HikeModule;
//# sourceMappingURL=hike.module.js.map