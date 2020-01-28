import { TestBed } from '@angular/core/testing';

import { LogerService } from './loger.service';

describe('LogerService', () => {

  const logerService: LogerService = new LogerService();

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogerService = TestBed.get(LogerService);
    expect(service).toBeTruthy();
  });

});
