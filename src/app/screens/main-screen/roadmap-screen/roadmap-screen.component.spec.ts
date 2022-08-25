import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapScreenComponent } from './roadmap-screen.component';

describe('RoadmapScreenComponent', () => {
  let component: RoadmapScreenComponent;
  let fixture: ComponentFixture<RoadmapScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadmapScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadmapScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
