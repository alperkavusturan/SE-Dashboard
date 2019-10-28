import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVenueComponent } from './get-venue.component';

describe('GetVenueComponent', () => {
  let component: GetVenueComponent;
  let fixture: ComponentFixture<GetVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
