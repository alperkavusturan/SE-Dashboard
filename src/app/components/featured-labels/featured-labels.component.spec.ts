import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedLabelsComponent } from './featured-labels.component';

describe('FeaturedLabelsComponent', () => {
  let component: FeaturedLabelsComponent;
  let fixture: ComponentFixture<FeaturedLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
