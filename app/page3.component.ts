import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: "page3",
    template: `<h1> this is angular2 page </h1>
    <div [className]="'blue'">css class using property syntax</div>
<div [style.color]="'orange'">style using property syntax</div>

    <div [ngClass]="['bold-text', 'green']">array of classes</div>

<div [ngClass]="'italic-text blue'">string of classes</div>
<div [ngClass]="{'small-text': true, 'red': true}">object/map of classes</div>

<br /><br/>

<span [ngClass]="displayText">toggled with ngClass</span> 
<button (click)="toggle()">Toggle</button>
                <button (click)="onSelect()">  Back </button>    
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class Page3Component {
    displayText: string;
    visible: boolean;

    constructor(private router: Router) {
        this.displayText = 'show-class';
        this.visible = true;
    }

    toggle() {
        this.visible = !this.visible;
        this.displayText = this.visible ? 'show-class' : 'hide-class';
    }
    onSelect() {
        this.router.navigate(['/page1', 19]);
    }

}
