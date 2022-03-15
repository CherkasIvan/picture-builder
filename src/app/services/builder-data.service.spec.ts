import { TestBed } from '@angular/core/testing';

import { BuilderDataService } from './builder-data.service';

describe('BuilderDataService', () => {
  let service: BuilderDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuilderDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
