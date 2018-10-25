import { Component, OnInit,Input, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodolistItemComponent implements OnInit, DoCheck {
@Input() todo: any;
  constructor() { }

  ngOnInit() {
  }
  ngDoCheck() {
    console.log("UserListItemComponent-DoCheck");
  }
}
