import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RdiService {
  baseURL: string = environment.baseURL;
  constructor(private http: HttpClient) {}

  getRdiData(date: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseURL}MaterialDashBoard/GetRDIData?date=${date}`
    );
  }

  getFourS(date: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseURL}MaterialDashBoard/GetFour_SData?date=${date}`
    );
  }
}
