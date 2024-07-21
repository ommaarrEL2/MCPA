import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { userDto } from '../models/user-dto';

@Injectable({
  providedIn: 'root',
})
export class AddUserService {
  constructor(private http: HttpClient) {}

  addUser(user: userDto): Observable<any> {
    return this.http.post<any>(`${environment.baseURL}Account/AddUser`, user);
  }

  updateUser(user: userDto): Observable<any> {
    return this.http.put<any>(
      `${environment.baseURL}Account/UpdateForAdmin`,
      user
    );
  }

  deleteUser(id: string): Observable<any> {
    return this.http.patch<any>(
      `${environment.baseURL}Account/DeleteUser?id=${id}`,
      null
    );
  }

  getAllClaims(): Observable<any> {
    return this.http.get<any>(`${environment.baseURL}Claims/GetAllClaims`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${environment.baseURL}Account/GetAll`);
  }

  getAllRoles(): Observable<any> {
    return this.http.get<any>(`${environment.baseURL}Roles/GetAllRoles`);
  }
}
