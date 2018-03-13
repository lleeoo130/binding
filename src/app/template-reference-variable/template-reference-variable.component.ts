import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  template: `
   <h2> Welcome to {{ name }} </h2>


   <code>
     < input  <span>#myInput</span> type="text" >
     <br>
     < button (click)="logMessage(<span>myInput</span>.value)" >Log< /button >
   
   </code><br><br>

   <input  #myInput type="text">
   <button (click)="logMessage(myInput.value)" >Log</button> {{ input }}
  
  
  `,
  styles: [`
  
  span{
    color: orange;
  }
  `

  ]
})
export class TemplateReferenceVariableComponent implements OnInit {

  public name = 'Template Reference Variables!!';
  public input = '';

  constructor() { }

  ngOnInit() {
  }

  logMessage(value){
    console.log(value);
    this.input = value;
  }

}
