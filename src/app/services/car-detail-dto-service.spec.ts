import { TestBed } from '@angular/core/testing';

import { CarDetailDtoService } from './car-detail-dto-service';

describe('CarDetailDtoServiceService', () => {
  let service: CarDetailDtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarDetailDtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
