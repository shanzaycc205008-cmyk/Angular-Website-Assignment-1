import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://catfact.ninja/fact';

  constructor(private http: HttpClient) {}

  getFact() {
    return this.http.get<any>(this.url);
  }
}