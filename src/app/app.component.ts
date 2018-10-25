import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-appl';
  inputname="Angular 1st input";
  outputname="None";
  todos: any[] = [];

  constructor(){
    for(let i=0; i<50; i++){
      let num = i + 1;
      this.todos.push({
        name: 'user ' + num,
        prop1: num,
        prop2: num,
        prop3: num,
        prop4: num,
        prop5: num
      })
    }
  }

  changeTitle() {
    this.title = 'App title updated' ;
  }


  c1handler(e){
    console.log(e);
    this.outputname=e;

  }


}
