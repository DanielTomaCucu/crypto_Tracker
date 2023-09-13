import { TestBed } from '@angular/core/testing';

import { SingleCryptoDetailsService } from './single-crypto-details.service';

describe('SingleCryptoDetailsService', () => {
  let service: SingleCryptoDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleCryptoDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
