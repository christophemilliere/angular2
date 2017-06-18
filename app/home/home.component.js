"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
        this.index = 0;
        this.quotes = [
            {
                id: 0,
                text: "En vérité, je ne voyage pas, moi, pour atteindre un endroit précis, mais pour marcher : simple plaisir de voyager. ",
                author: 'Robert Louis Stevenson'
            },
            {
                id: 2,
                text: "Mon pied droit est jaloux de mon pied gauche. Quand l'un avance, l'autre veut le dépasser. Et moi, comme un imbécile, je marche ! ",
                author: "Raymond Devos"
            },
            {
                id: 1,
                text: "Le plus long de tous les voyages commence par un tout petit pas",
                author: "proverbe chinois"
            },
        ];
        this.quote = this.quotes[0];
        this.animateCitation = 'stateB';
        this.flag = false;
        this.open = false;
        this.toggleElement = "closed";
    }
    HomeComponent.prototype.toggle = function () {
        this.open = !this.open;
        if (this.open) {
            this.toggleElement = 'open';
        }
        else {
            this.toggleElement = "closed";
        }
    };
    HomeComponent.prototype.getPreviousQuote = function () {
        this.animateCitation = this.animateCitation === 'stateA' ? 'stateB' : 'stateA';
        this.getSomeQuote(-1);
    };
    HomeComponent.prototype.getNextQuote = function () {
        this.animateCitation = this.animateCitation === 'stateA' ? 'stateB' : 'stateA';
        this.getSomeQuote(1);
    };
    HomeComponent.prototype.getSomeQuote = function (increment) {
        this.index = this.index + increment;
        // if last item of the array and user keeps on going next
        if (this.index >= this.quotes.length && increment === 1) {
            this.index = 0;
        }
        // if first item of the array and user keeps on going backward
        if (this.index < 0 && increment === -1) {
            this.index = this.quotes.length - 1;
        }
        this.quote = this.quotes[this.index];
    };
    HomeComponent.prototype.log = function (event) {
        console.log(event);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'home.component.html',
        styles: ["\n        .frame { margin-bottom: 10px; padding: 10px; border: 5px solid #eeeeee; height: 170px }\n        .citation { font-size: 20px; color: #3268ba }\n    "],
        animations: [
            core_1.trigger('animateCitation', [
                core_1.transition('stateA <=> stateB', [
                    core_1.animate(600, core_1.keyframes([
                        core_1.style({ opacity: .5, offset: 0 }),
                        core_1.style({ opacity: 1, color: '#fcb514', offset: .5 }),
                        core_1.style({ opacity: .7, offset: 1 }),
                        core_1.style({ opacity: 1, offset: 1 })
                    ]))
                ])
            ]),
            // trigger('animateCitation', [
            // 	transition('stateA <=> stateB', [
            // 		animate(600, style({ transform: 'rotate(360deg)'}) )
            // 	])
            // ]),
            core_1.trigger('toggleElement', [
                core_1.state('open', core_1.style({ 'height': '*' })),
                core_1.state('closed', core_1.style({ 'height': '0px', 'font-size': '0px' })),
                core_1.transition('closed <=> open', [
                    core_1.animate('500ms ease-out')
                ])
            ])
        ]
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map