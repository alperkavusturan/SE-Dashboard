import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTopComponent } from './monthly-top.component';

describe('MonthlyTopComponent', () => {
  let component: MonthlyTopComponent;
  let fixture: ComponentFixture<MonthlyTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
