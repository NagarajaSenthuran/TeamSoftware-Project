import { TestBed } from '@angular/core/testing';

import { VehiclesDetailsResolverService } from './vehicles-details-resolver.service';

describe('VehiclesDetailsResolverService', () => {
  let service: VehiclesDetailsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclesDetailsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
