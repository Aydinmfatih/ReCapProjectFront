import { TestBed } from '@angular/core/testing';

import { RentalDetailDtoServiceService } from './rental-detail-dto-service.service';

describe('RentalDetailDtoServiceService', () => {
  let service: RentalDetailDtoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalDetailDtoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
