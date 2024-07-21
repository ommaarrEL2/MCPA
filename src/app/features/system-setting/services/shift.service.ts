import { IShiftReq } from './../models/shift';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShiftService {
  constructor(private _HttpClient: HttpClient) {}

  createShift(data: IShiftReq): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseURL}shift/AddShift`,
      data
    );
  }

  deleteShift(id: number) {
    return this._HttpClient.patch<any>(
      `${environment.baseURL}shift/DeleteShift?id=${id}`,
      null
    );
  }

  updateShift(data: IShiftReq) {
    return this._HttpClient.put<any>(
      `${environment.baseURL}shift/UpdateShift`,
      data
    );
  }

  getAllShifts(): Observable<any> {
    return this._HttpClient.get<any>(
      `${environment.baseURL}shift/GetAllShifts`
    );
  }
}
