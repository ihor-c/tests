import { TestBed } from '@angular/core/testing';
import { TestService } from './test.service';
import { LogerService } from './loger.service';

describe('TestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
  });


  it('@getString should return string', () => {
    const loger = jasmine.createSpyObj('LogerService', ['log']);
    const service: TestService = new TestService(loger);
    const string = service.getString('string');
    service.getString('string');

    expect(string).toBe('string');
    expect(loger.log).toHaveBeenCalledTimes(2);
  });



});
