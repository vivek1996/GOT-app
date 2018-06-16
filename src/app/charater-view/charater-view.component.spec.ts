import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharaterViewComponent } from './charater-view.component';

describe('CharaterViewComponent', () => {
  let component: CharaterViewComponent;
  let fixture: ComponentFixture<CharaterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharaterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharaterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
