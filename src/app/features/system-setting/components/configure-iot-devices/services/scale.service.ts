import { IScaleReq } from './../models/scale';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { SelectList } from '../../../../../core/models/select-list';

@Injectable({
  providedIn: 'root',
})
export class ScaleService {
  constructor(private _HttpClient: HttpClient) {}

  createScale(data: IScaleReq): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseURL}Scale/AddScale`,
      data
    );
  }

  getAllScales(): Observable<any[]> {
    return this._HttpClient.get<any[]>(
      `${environment.baseURL}Scale/GetAllScales`
    );
  }

  getAllScsalesType(): Observable<SelectList[]> {
    return this._HttpClient.get<SelectList[]>(
      `${environment.baseURL}ProductType/ProductType`
    );
  }
}
