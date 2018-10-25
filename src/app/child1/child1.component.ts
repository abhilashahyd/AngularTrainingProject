import { Component, OnInit , Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {Child2Component} from './child2/child2.component';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
@Input() name1 : string;
@Output('child1op') child1opEvent : EventEmitter = new EventEmitter<string>(<string>);

  @ViewChild(Child2Component) child2: Child2Component;

  constructor() { }
  outputname: string="Old value";
  ngOnInit() {
  }

  onClick() {
    console.log(this.outputname);
     this.child1opEvent.emit(`New output - ${this.outputname}`);
       this.child2.changeName(this.outputname);
       console.log(this.child2.newChild2);
     // this.child1opEvent.emit(this.outputname);
   }
}
