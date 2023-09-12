import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CryptoListService {
  assets = 'https://data.messari.io/api/v2/assets';
  constructor(private http: HttpClient) {}

  getAssets(pageIndex: number = 1, pageSize: number = 50): Observable<any> {
    return this.http.get<any>(`${this.assets}?limit=${pageSize}&page=${pageIndex}`);
  }
}
