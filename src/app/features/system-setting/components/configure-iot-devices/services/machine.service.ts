import { IMachineReq, IMachineType } from './../models/machine';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MachineService {
  constructor(private _HttpClient: HttpClient) {}

  createMachine(data: IMachineReq): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseURL}Machine/AddMachine`,
      data
    );
  }

  getAllMachines(): Observable<any[]> {
    return this._HttpClient.get<any[]>(
      `${environment.baseURL}Machine/GetAllMachines`
    );
  }

  getAllmachineType(): Observable<IMachineType[]> {
    return this._HttpClient.get<IMachineType[]>(
      `${environment.baseURL}MachineType/MachineType`
    );
  }
}
