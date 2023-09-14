import { TestBed } from '@angular/core/testing';

import { SingleCryptoInfoService } from './single-crypto-info.service';

describe('SingleCryptoInfoService', () => {
  let service: SingleCryptoInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleCryptoInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
