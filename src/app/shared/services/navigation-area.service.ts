import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationAreaService {
  constructor(private _HttpClient: HttpClient) {}

  getNavigationArea(): Observable<any[]> {
    return this._HttpClient.get<any[]>(
      `${environment.baseURL}MaterialDashBoard/GetNavigationAreaData`
    );
  }
}
