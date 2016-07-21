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
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var Page4Component = (function () {
    function Page4Component(router) {
        this.router = router;
        this.color = 'pink';
        this.size = 16;
    }
    Page4Component.prototype.onSelect = function () {
        this.router.navigate(['/page1', 19]);
    };
    Page4Component = __decorate([
        core_1.Component({
            selector: "page4",
            template: "<h1> this is angular2 page </h1>\n                \n                <input [(ngModel)]=\"color\" />\n                \n                <button (click)=\"size = size + 1\">+</button>\n                <button (click)=\"size = size - 1\">-</button>\n\n                <div [ngStyle]=\"{'color': color, 'font-size': size + 'px'}\">\n                    style using ngStyle\n                </div>  <br /><br/>\n\n                   <button (click)=\"onSelect()\">  Back </button> \n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Page4Component);
    return Page4Component;
}());
exports.Page4Component = Page4Component;
//# sourceMappingURL=page4.component.js.map