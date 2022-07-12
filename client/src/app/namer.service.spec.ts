import { TestBed } from '@angular/core/testing';

import { NamerService } from './namer.service';

describe('NamerService', () => {
  let service: NamerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
