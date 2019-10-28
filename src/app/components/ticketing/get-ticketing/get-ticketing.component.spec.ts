import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTicketingComponent } from './get-ticketing.component';

describe('GetTicketingComponent', () => {
  let component: GetTicketingComponent;
  let fixture: ComponentFixture<GetTicketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTicketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTicketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
