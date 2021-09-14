import { TestBed } from '@angular/core/testing';

import { SpectAddService } from './spectadd.service';

describe('AddService', () => {
  let service: SpectAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpectAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
