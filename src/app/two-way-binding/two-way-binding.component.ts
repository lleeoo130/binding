import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `

  <code>
  
  < input  <span>[(ngModel)]="name"</span> type="text" > <br>
  Name :  [[ name ]]



  <p>
      - go to app.module.ts <br>
      - import [ FormsModule ] from "@angular/forms"; <br>
      - add in ngModules / imports
  </p>
  
  
  </code><br><br>

  
  <input  [(ngModel)]="name" type="text">
  <p>Name: {{ name }}</p>
  
  `,
  styles: [`span{color:orange;}`]
})
export class TwoWayBindingComponent implements OnInit {

  public name = '';

  constructor() { }

  ngOnInit() {
  }

}
