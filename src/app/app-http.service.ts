import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppHttpService {
  constructor(private http: HttpClient) {}

  get(url: string, options?: any) {
    return this.http.get(url, options);
  }

  post(url: string, body: any, options?: any) {
    return this.http.post(url, body, options);
  }
}
