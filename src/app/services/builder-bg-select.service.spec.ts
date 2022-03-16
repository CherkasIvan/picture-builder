import { TestBed } from '@angular/core/testing';

import { BuilderBgSelectService } from './builder-bg-select.service';

describe('BuilderBgSelectService', () => {
  let service: BuilderBgSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuilderBgSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
