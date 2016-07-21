import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: "page1",
    template: `<h1> this is angular2 page </h1>
                <div *ngIf="false">This will not show</div>
              <div *ngIf="true">This will show</div>
              <div *ngIf="a > b">This will show because 5 is greater then 4</div>
              <div *ngIf="myFunction()">This will show because function returns a true value</div>
                <button (click)="onSelect()">  Back </button>    
    `,
      directives: [ROUTER_DIRECTIVES]
})

export class Page1Component{
    constructor(private router: Router){
        this.a = 5;
        this.b = 14;
    }
    onSelect(){
        this.router.navigate(['/page1', 19]);
    }
    
    a: number;
    b: number;
       
    myFunction(){
        return true;
    }
}
