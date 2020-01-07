import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyReleasedComponent } from './recently-released.component';

describe('RecentlyReleasedComponent', () => {
  let component: RecentlyReleasedComponent;
  let fixture: ComponentFixture<RecentlyReleasedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyReleasedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyReleasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
