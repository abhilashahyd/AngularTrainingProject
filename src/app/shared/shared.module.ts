import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { HighlightCheckComponent } from './highlight-check/highlight-check.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HighlightDirective, HighlightCheckComponent],
  exports: [HighlightDirective, HighlightCheckComponent]
})
export class SharedModule { }
