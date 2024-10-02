import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class BreedService {
  constructor(private http: HttpClient) {}

  getBreeds(limit: number = 10, page: number = 0): Observable<any> {
    return this.http.get(`${apiUrl}/api/breeds?limit=${limit}&page=${page}`);
  }

  getBreedById(id: string): Observable<any> {
    return this.http.get(`${apiUrl}/api/breeds/${id}`);
  }

  searchBreed(name : string,limit: number = 10, page: number = 0): Observable<any> {
    return this.http.get(`${apiUrl}/api/breeds/search?name=${name}&limit=${limit}&page=${page}`);
  }
}
