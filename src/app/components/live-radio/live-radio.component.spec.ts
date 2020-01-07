import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveRadioComponent } from './live-radio.component';

describe('LiveRadioComponent', () => {
  let component: LiveRadioComponent;
  let fixture: ComponentFixture<LiveRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
