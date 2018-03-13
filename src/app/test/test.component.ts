import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  <h2 class="text-danger">
    {{ greetUser() }}
  </h2>
  <h2 [class]="successClass"> Leoz!!! [class]="successClass"</h2>

  <h2 [class.text-danger]="hasError" >   Danger !!  [class.text-danger]="hasError"</h2>
  
  <h2  [ngClass]="messageClasses"  >  Classes binding !   [ngClass]="messageClasses"</h2>

  <h2 [style.color]="hasError ? 'red' : 'green'" > Style Binding [style.color]="hasError ? 'red' : 'green'"</h2>

  <h2  [style.color]="highlightColor" > Style binding 2 [style.color]="highlightColor"</h2>

  <h2 [ngStyle]="titleStyles" > Style binding 3</h2>
`,
  styles: [`
  
  .text-success{
    color: green;
  }
  .text-danger{
    color: red;
  }
  .text-special{
    font-style: italic;
  }
  
  `]
})
export class TestComponent implements OnInit {

  public name = "Leoz";
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;

  public messageClasses = {
    "text-success"   : !this.hasError,
    "text-danger"    : this.hasError,
    "text-special"   : this.isSpecial

  }

  public highlightColor = "orange";

  public titleStyles = {
    color : "blue",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
