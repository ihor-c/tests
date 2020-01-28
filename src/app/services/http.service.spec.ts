import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {

  let httpService: HttpService,
    httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ HttpService ],
    });

    httpService = TestBed.get(HttpService);
    httpTestingController = TestBed.get(HttpTestingController);

  });

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
});

// I stop hear
// https://www.youtube.com/watch?v=Fu3IN0i2CvA&list=PLOa5YIicjJ-XA6uwvBtOLltsVvBHP6g3v&index=3