import { Component, OnInit, Input, ChangeDetectionStrategy,DoCheck } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodolistComponent implements OnInit, DoCheck {
  @Input() todos: any[];
  constructor() { }

  ngOnInit() {
  }
 ngDoCheck(){
   console.log("UserListComponent-DoCheck");
 }
}
