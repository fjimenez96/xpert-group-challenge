import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  auth(userName: string, password: string): Observable<any> {
    return this.http.post(`${apiUrl}/api/auth/login`, {
      userName,
      password,
    });
  }

  register(user: any): Observable<any> {
    return this.http.post(`${apiUrl}/api/auth/register`, user);
  }
}
