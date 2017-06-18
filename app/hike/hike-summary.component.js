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
var HikeSummary = (function () {
    function HikeSummary() {
        this.togglehikeasfavorite = new core_1.EventEmitter();
    }
    HikeSummary.prototype.toggleAsTodoHike = function (isAdded) {
        console.log(event);
        if (isAdded) {
            this.hike.dateAddedAsTodo = Date.now();
            this.togglehikeasfavorite.emit(this.hike);
        }
        else {
            delete this.hike.dateAddedAsTodo;
            this.togglehikeasfavorite.emit(this.hike);
        }
    };
    return HikeSummary;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HikeSummary.prototype, "hike", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HikeSummary.prototype, "togglehikeasfavorite", void 0);
HikeSummary = __decorate([
    core_1.Component({
        moduleId: module.id,
        // ViewEncapsulation.Emulated allows external global style but local component style DON'T goes out
        // ViewEncapsulation.Native to ignore external global style
        // ViewEncapsulation.None allows local style to apply also externally
        encapsulation: core_1.ViewEncapsulation.Emulated,
        styles: ["\n        a {\n            text-decoration: none;\n        }\n\n        a:hover {\n            color: #999;\n        }\n    "
        ],
        selector: "hike-summary",
        templateUrl: "hike-summary.component.html"
    })
], HikeSummary);
exports.HikeSummary = HikeSummary;
//# sourceMappingURL=hike-summary.component.js.map