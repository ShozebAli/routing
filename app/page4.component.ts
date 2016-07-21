import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: "page4",
    template: `<h1> this is angular2 page </h1>
                
                <input [(ngModel)]="color" />
                
                <button (click)="size = size + 1">+</button>
                <button (click)="size = size - 1">-</button>

                <div [ngStyle]="{'color': color, 'font-size': size + 'px'}">
                    style using ngStyle
                </div>  <br /><br/>

                   <button (click)="onSelect()">  Back </button> 
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class Page4Component {
    color: string;
    size: number;

    constructor(private router: Router) {
        this.color = 'pink';
        this.size = 16;
    }

    onSelect() {
        this.router.navigate(['/page1', 19]);
    }

}
