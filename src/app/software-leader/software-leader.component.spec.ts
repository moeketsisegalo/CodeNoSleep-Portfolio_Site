import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareLeaderComponent } from './software-leader.component';

describe('SoftwareLeaderComponent', () => {
  let component: SoftwareLeaderComponent;
  let fixture: ComponentFixture<SoftwareLeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftwareLeaderComponent]
    });
    fixture = TestBed.createComponent(SoftwareLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
