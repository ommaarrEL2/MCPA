import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LoginDto } from '../models/login-dto';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(
    accData: LoginDto
  ): Observable<{ message: string; token: string; user: string }> {
    return this.http.post<{ message: string; token: string; user: string }>(
      `${environment.baseURL}Account/Login`,
      accData
    );
  }
}
