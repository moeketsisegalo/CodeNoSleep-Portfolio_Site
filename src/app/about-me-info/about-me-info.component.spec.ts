import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeInfoComponent } from './about-me-info.component';

describe('AboutMeInfoComponent', () => {
  let component: AboutMeInfoComponent;
  let fixture: ComponentFixture<AboutMeInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMeInfoComponent]
    });
    fixture = TestBed.createComponent(AboutMeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
