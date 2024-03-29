// list.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiResponse {
  Value: string;
  Count: number;
  Percentage: string;
  Count1: number;
  Count2: number;
  Count3: number;
  Count4: number;
  Count5: number;
  Count6: number;
  Count7: number;
  Count8: number;
  Count9: number;
  Count10: number;
}

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://nhsappchna6210.cscidp.net/rdb/api/employee';
  private readonly pivotValue = 'Release';
  private readonly pivotValue1 = 'Designation';
  private readonly pivotValue2 = 'Resigned';
  private readonly pivotValue3 = 'ONBOARDING';

  constructor(private http: HttpClient) { }

  fetchData(): Observable<ApiResponse[]> {
    const url = `${this.apiUrl}?pivot=${this.pivotValue}`;
    return this.http.get<ApiResponse[]>(url);
  }

  fetchDataForDesignation(): Observable<ApiResponse[]> {
    const url = `${this.apiUrl}?pivot=${this.pivotValue1}`;
    return this.http.get<ApiResponse[]>(url);
  }

  fetchDataForResigned(): Observable<ApiResponse[]> {
    const url = `${this.apiUrl}?pivot=${this.pivotValue2}`;
    return this.http.get<ApiResponse[]>(url);
  }

  fetchDataForOnboarding(): Observable<any> {
    const url = `${this.apiUrl}?pivot=${this.pivotValue3}`;
    return this.http.get<any>(url);
  }
}
