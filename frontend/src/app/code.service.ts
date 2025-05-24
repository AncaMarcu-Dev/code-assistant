import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CodeService {
  constructor(private http: HttpClient) {}

  explainCode(code: string): Observable<{ explanation: string }> {
    return this.http.post<{ explanation: string }>('http://localhost:3000/api/explain', { code });
  }
}