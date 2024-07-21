import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SelectList } from '../../../core/models/select-list';
import { IManPowerReq, IManPowerResponse } from '../models/man-power';

@Injectable({
  providedIn: 'root',
})
export class ManPowerService {
  constructor(private _HttpClient: HttpClient) {}

  createManPower(data: IManPowerReq): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseURL}ManPower/AddManPower`,
      data
    );
  }

  deleteManPower(id: number) {
    return this._HttpClient.patch<any>(
      `${environment.baseURL}ManPower/DeleteManPower?id=${id}`,
      null
    );
  }

  updateManPower(data: IManPowerReq) {
    return this._HttpClient.put<any>(
      `${environment.baseURL}ManPower/UpdateAddManPower`,
      data
    );
  }

  getAllManPowers(): Observable<IManPowerResponse[]> {
    return this._HttpClient.get<IManPowerResponse[]>(
      `${environment.baseURL}ManPower/GetAllManPower`
    );
  }

  getAllDepartmentType(): Observable<SelectList[]> {
    return this._HttpClient.get<SelectList[]>(
      `${environment.baseURL}Department/DepartmentType`
    );
  }
}
