import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prediction } from 'src/app/interface/prediction';

@Injectable({
  providedIn: 'root'
})

export class PredictionService {  
  
  constructor(private http: HttpClient) { }

  getPredictions(url: string = ''): Observable<Prediction[]> {
    
    return this.http.get<Prediction[]>('https://api.agify.io?' + url);
  }
}
