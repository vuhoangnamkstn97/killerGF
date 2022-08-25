import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureArtistsComponent } from './feature-artists.component';

describe('FeatureArtistsComponent', () => {
  let component: FeatureArtistsComponent;
  let fixture: ComponentFixture<FeatureArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureArtistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
