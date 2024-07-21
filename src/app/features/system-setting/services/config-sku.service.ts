import { SelectList } from './../../../core/models/select-list';
import { ISkuReq, ISkuResponse } from './../models/config-sku';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigSkuService {
  constructor(private _HttpClient: HttpClient) {}

  createSku(data: ISkuReq): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseURL}Product/AddProduct`,
      data
    );
  }

  deleteSku(id: number) {
    return this._HttpClient.patch<any>(
      `${environment.baseURL}Product/DeleteProduct?id=${id}`,
      null
    );
  }

  updateSku(data: ISkuReq) {
    return this._HttpClient.put<any>(
      `${environment.baseURL}Product/UpdateProdut`,
      data
    );
  }

  getAllSkus(): Observable<ISkuResponse[]> {
    return this._HttpClient.get<ISkuResponse[]>(
      `${environment.baseURL}Product/GetAllProduct`
    );
  }

  getAllSkuType(): Observable<SelectList[]> {
    return this._HttpClient.get<SelectList[]>(
      `${environment.baseURL}ProductType/ProductType`
    );
  }
}
