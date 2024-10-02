import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  getImageById(id: string): Observable<any> {
    return this.http.get(`${apiUrl}/api/${id}`);
  }
}
