import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightCheckComponent } from './highlight-check.component';

describe('HighlightCheckComponent', () => {
  let component: HighlightCheckComponent;
  let fixture: ComponentFixture<HighlightCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
