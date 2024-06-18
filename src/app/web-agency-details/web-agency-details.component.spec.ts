import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAgencyDetailsComponent } from './web-agency-details.component';

describe('WebAgencyDetailsComponent', () => {
  let component: WebAgencyDetailsComponent;
  let fixture: ComponentFixture<WebAgencyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebAgencyDetailsComponent]
    });
    fixture = TestBed.createComponent(WebAgencyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
