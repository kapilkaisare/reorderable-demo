import { TestBed } from '@angular/core/testing';

import { RoGeneratorService } from './ro-generator.service';

describe('RoGeneratorService', () => {
  let service: RoGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
