import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTicketingsComponent } from './list-ticketings.component';

describe('ListTicketingsComponent', () => {
  let component: ListTicketingsComponent;
  let fixture: ComponentFixture<ListTicketingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTicketingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTicketingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
