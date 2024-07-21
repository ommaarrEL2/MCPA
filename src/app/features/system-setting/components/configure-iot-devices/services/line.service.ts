import { ILineReq } from './../models/line';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LineService {
  constructor(private _HttpClient: HttpClient) {}

  createLine(data: ILineReq): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseURL}Line/AddLine`,
      data
    );
  }

  getAllLines(): Observable<any[]> {
    return this._HttpClient.get<any[]>(`${environment.baseURL}Line/GetAllLine`);
  }
  getAllShifts(): Observable<any[]> {
    return this._HttpClient.get<any[]>(
      `${environment.baseURL}shift/GetAllShifts`
    );
  }
}
