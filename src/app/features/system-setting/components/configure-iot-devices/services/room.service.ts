import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { IRoomReq } from '../models/room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private _HttpClient: HttpClient) {}

  createRoom(data: IRoomReq): Observable<any> {
    return this._HttpClient.post<any>(
      `${environment.baseURL}Room/AddRoomDto`,
      data
    );
  }

  getAllRooms(): Observable<any[]> {
    return this._HttpClient.get<any[]>(
      `${environment.baseURL}Room/GetAllRooms`
    );
  }
}
