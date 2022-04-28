import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { BehaviorSubject, filter, mergeMap, Observable, take, tap, timer } from 'rxjs';

@Injectable()
export class RequestRateLimitInterceptor implements HttpInterceptor {

  private readonly timeFrame = 1000;

  private availableThreads = 10;

  private rateLimit$ = new BehaviorSubject(this.availableThreads);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.rateLimit$.pipe(
      filter(() => this.availableThreads > 0),
      take(1),
      tap(() => this.removeThreads()),
      tap(() => timer(this.timeFrame).subscribe(() => this.addThreads())),
      mergeMap(() => next.handle(req))
    );
  }

  private addThreads(): void {
    this.changeThreads(1);
  }

  private removeThreads(): void {
    this.changeThreads(-1);
  }

  private changeThreads(value: number): void {
    this.rateLimit$.next(this.availableThreads += value);
  }
}
