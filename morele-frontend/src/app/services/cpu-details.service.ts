import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CpuDetails} from "../models/cpu-details";

@Injectable({
  providedIn: 'root'
})
export class CpuDetailsService {

  private baseUrl = 'http://localhost:8080/cpu-details';

  constructor(private http: HttpClient) { }

  getCpuDetailsById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getCpuDetailsByCpu(idCpu: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/cpu/${idCpu}`);
  }

  getCpuDetailsByDate(date: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/date/${date}`);
  }

  getLatestDate(): Observable<any> {
    return this.http.get(`${this.baseUrl}/date/max`);
  }

  getAllDates(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/date/all`);
  }
}
