import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureArtistItemComponent } from './feature-artist-item.component';

describe('FeatureArtistItemComponent', () => {
  let component: FeatureArtistItemComponent;
  let fixture: ComponentFixture<FeatureArtistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureArtistItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureArtistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
