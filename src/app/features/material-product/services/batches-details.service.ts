import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BatchesDetailsService {
  baseURL: string = environment.baseURL;

  constructor(private http: HttpClient) {}

  getFactoriesTree(): Observable<any> {
    return this.http.get<any>(
      `${this.baseURL}MaterialDashBoard/GetNavigationAreaData?`
    );
  }

  getMaterialDashboardData(id: number, per: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseURL}MaterialDashBoard/GetMaterialDashboardData?id=${id}&per=${per}`
    );
  }

  searchForBatchByBatchCode(batchCode: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseURL}MaterialDashBoard/SerachForBatchByBatchCode?batchCode=${batchCode}`
    );
  }
}
