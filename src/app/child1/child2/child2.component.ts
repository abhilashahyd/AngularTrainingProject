import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
_name : string;
child2name: string="My old value";
private newChild2 ="Privte";

  @Input()
   set name(name: string) {
     this._name = (name && name.trim()) || '<no name set>';
   }

   get name(): string { return this._name; }
  constructor() { }

  ngOnInit() {
  }
changeName(str){
  this.child2name=str;
}
}
