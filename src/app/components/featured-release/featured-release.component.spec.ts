import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedReleaseComponent } from './featured-release.component';

describe('FeaturedReleaseComponent', () => {
  let component: FeaturedReleaseComponent;
  let fixture: ComponentFixture<FeaturedReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
