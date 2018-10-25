import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p (click)="incrementCount()">
  {{count}}
  </p>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

   count : number = 0;

    constructor() { }

    ngOnInit() {
    }
    incrementCount() {
      this.count++;
    }

}
