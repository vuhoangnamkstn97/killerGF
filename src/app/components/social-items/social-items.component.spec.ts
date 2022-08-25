import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialItemsComponent } from './social-items.component';

describe('SocialItemsComponent', () => {
  let component: SocialItemsComponent;
  let fixture: ComponentFixture<SocialItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
