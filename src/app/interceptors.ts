import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorIntercept } from './interceptors/error.interceptor';
import { RequestRateLimitInterceptor } from './interceptors/request-rate-limit.interceptor';

export const interceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorIntercept, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestRateLimitInterceptor, multi: true },
];