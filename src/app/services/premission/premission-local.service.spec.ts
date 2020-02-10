import { TestBed } from '@angular/core/testing';

import { PremissionLocalService } from './premission-local.service';

describe('PremissionLocalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PremissionLocalService = TestBed.get(PremissionLocalService);
    expect(service).toBeTruthy();
  });
});
