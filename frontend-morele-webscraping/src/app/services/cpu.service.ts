import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CpuService {

  private baseUrl = 'http://localhost:8080/cpus';

  constructor(private http: HttpClient) { }

  getCpuById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getCpusList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCpuByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${name}`);
  }

  getCpuByCompany(company: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/company/${company}`);
  }

  getCpuByCoreCount(cores: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/cores/${cores}`);
  }
}

