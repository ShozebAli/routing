import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: "page2",
    template: `<h1> this is angular2 page </h1>
    <ul> <li *ngFor= "let name of names"> {{name}} </li>
    </ul>
                <button (click)="onSelect()">  Back </button>
                    
    `,
      directives: [ROUTER_DIRECTIVES]
})

export class Page2Component{
    names:[string];
    
    constructor(private router: Router){
        this.names= ["Noor","Raheel","Ali","Shozeb"];
    }
    onSelect(){
        this.router.navigate(['/page1', 19]);
    }
    
}
