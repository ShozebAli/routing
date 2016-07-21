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
var Page1Component = (function () {
    function Page1Component(router) {
        this.router = router;
        this.a = 5;
        this.b = 14;
    }
    Page1Component.prototype.onSelect = function () {
        this.router.navigate(['/page1', 19]);
    };
    Page1Component.prototype.myFunction = function () {
        return true;
    };
    Page1Component = __decorate([
        core_1.Component({
            selector: "page1",
            template: "<h1> this is angular2 page </h1>\n                <div *ngIf=\"false\">This will not show</div>\n              <div *ngIf=\"true\">This will show</div>\n              <div *ngIf=\"a > b\">This will show because 5 is greater then 4</div>\n              <div *ngIf=\"myFunction()\">This will show because function returns a true value</div>\n                <button (click)=\"onSelect()\">  Back </button>    \n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Page1Component);
    return Page1Component;
}());
exports.Page1Component = Page1Component;
//# sourceMappingURL=page1.component.js.map