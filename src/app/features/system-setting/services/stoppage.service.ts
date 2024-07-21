import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SelectList } from '../../../core/models/select-list';
import { IConfigStoppageReq } from '../models/config-stoppage';

@Injectable({
  providedIn: 'root',
})
export class StoppageService {
  constructor(private _HttpClient: HttpClient) {}

  createStoppage(data: IConfigStoppageReq): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseURL}Stoppage/AddStoppage`,
      data
    );
  }

  deleteStoppage(id: number) {
    return this._HttpClient.patch<any>(
      `${environment.baseURL}Stoppage/DeleteStoppage?id=${id}`,
      null
    );
  }

  updateStoppage(data: IConfigStoppageReq) {
    return this._HttpClient.put<any>(
      `${environment.baseURL}Stoppage/UpdateStoppage`,
      data
    );
  }

  getAllStoppages(): Observable<any[]> {
    return this._HttpClient.get<any[]>(
      `${environment.baseURL}Stoppage/GetAllStoppage`
    );
  }

  getAllStoppageType(): Observable<{ type: string; id: number }[]> {
    return this._HttpClient.get<{ type: string; id: number }[]>(
      `${environment.baseURL}StoppageType/StoppageType`
    );
  }
}
