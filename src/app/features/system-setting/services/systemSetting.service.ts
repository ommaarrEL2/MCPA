import { ISystemSettingReq } from './../models/system-setting';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { ISkuReq } from '../models/config-sku';

@Injectable({
  providedIn: 'root',
})
export class SystemSettingService {
  constructor(private _HttpClient: HttpClient) {}

  createSystemSetting(data: ISystemSettingReq): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseURL}SystemSetting/AddSystemSetting`,
      data
    );
  }

  getAllSystemSetting(): Observable<any[]> {
    return this._HttpClient.get<any[]>(
      `${environment.baseURL}SystemSetting/GetAllSystemSetting`
    );
  }
}
