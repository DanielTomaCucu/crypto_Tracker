import { TestBed } from '@angular/core/testing';

import { CryptoListService } from './crypto-list.service';

describe('CryptoListService', () => {
  let service: CryptoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
