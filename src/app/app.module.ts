import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child1/child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodolistItemComponent } from './todolist/todolist-item/todolist-item.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    TodolistComponent,
    TodolistItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
