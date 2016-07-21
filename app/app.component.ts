import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';


@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
              <button (click)="onSelect1()">ngIf</button>
              <button (click)="onSelect2()">ngFor</button>
              
              <a [routerLink]="['/page3']">ngClass</a>
              <a [routerLink]="['/page4']">ngStyle </a>
              <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    title: string;

    constructor(private router: Router) {
        this.title = "My first test of the new router";
    }
    onSelect2() {
        this.router.navigate(['/page2', 19]);
    }
    onSelect1() {
        this.router.navigate(['/page1', 19]);
    }
}
