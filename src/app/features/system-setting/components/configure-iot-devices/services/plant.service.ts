import { IPlantReq } from './../models/plant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  constructor(private _HttpClient: HttpClient) {}

  createPlant(data: IPlantReq): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseURL}Plant/AddPlants`,
      data
    );
  }

  getAllPlants(): Observable<any[]> {
    return this._HttpClient.get<any[]>(
      `${environment.baseURL}Plant/GetAllPlants`
    );
  }
}
