import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CpuService {

  private baseUrl = 'http://localhost:8080/cpus';

  constructor(private http: HttpClient) { }

  getCpuList(): Observable<Object> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCpu(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getCpusByCompany(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${name}`);
  }

  getCpusByCores(cores: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/cores/${cores}`);
  }
}
