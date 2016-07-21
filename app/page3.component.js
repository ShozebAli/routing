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
var Page3Component = (function () {
    function Page3Component(router) {
        this.router = router;
        this.displayText = 'show-class';
        this.visible = true;
    }
    Page3Component.prototype.toggle = function () {
        this.visible = !this.visible;
        this.displayText = this.visible ? 'show-class' : 'hide-class';
    };
    Page3Component.prototype.onSelect = function () {
        this.router.navigate(['/page1', 19]);
    };
    Page3Component = __decorate([
        core_1.Component({
            selector: "page3",
            template: "<h1> this is angular2 page </h1>\n    <div [className]=\"'blue'\">css class using property syntax</div>\n<div [style.color]=\"'orange'\">style using property syntax</div>\n\n    <div [ngClass]=\"['bold-text', 'green']\">array of classes</div>\n\n<div [ngClass]=\"'italic-text blue'\">string of classes</div>\n<div [ngClass]=\"{'small-text': true, 'red': true}\">object/map of classes</div>\n\n<br /><br/>\n\n<span [ngClass]=\"displayText\">toggled with ngClass</span> \n<button (click)=\"toggle()\">Toggle</button>\n                <button (click)=\"onSelect()\">  Back </button>    \n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Page3Component);
    return Page3Component;
}());
exports.Page3Component = Page3Component;
//# sourceMappingURL=page3.component.js.map