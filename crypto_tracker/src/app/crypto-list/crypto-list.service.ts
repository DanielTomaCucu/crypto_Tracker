import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CryptoListService {
  assets = 'https://data.messari.io/api/v2/assets?limit=50';
  constructor(private http: HttpClient) {}

  getAssets(): Observable<any> {
    return this.http.get<any>(this.assets, {
      headers: { 'x-messari-api-key': environment.messariApiKey },
    });
  }
}
