import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `

  <h2>
    Welcome {{ name }}
  </h2>

  <button  (click)="onClick($event)" >Greet</button>

  <button  (click)="greeting='Welcome Leo'" >Greet Leo</button>

  {{ greeting }}
  
  
  `,
  styles: [`
  
  `]
})
export class EventBindingComponent implements OnInit {

  public name = 'Leo';
  public greeting = '' ;

  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    console.log(event);
    this.greeting = 'Welcome to my Event Binding!!'

  }

}
