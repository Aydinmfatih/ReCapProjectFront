import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDetailComponent } from './rental-detail.component';

describe('RentalDetailComponent', () => {
  let component: RentalDetailComponent;
  let fixture: ComponentFixture<RentalDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentalDetailComponent]
    });
    fixture = TestBed.createComponent(RentalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
