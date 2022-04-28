import { TestBed } from '@angular/core/testing';

import { RequestRateLimitInterceptor } from './request-rate-limit.interceptor';

describe('RequestRateLimitInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RequestRateLimitInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RequestRateLimitInterceptor = TestBed.inject(RequestRateLimitInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
