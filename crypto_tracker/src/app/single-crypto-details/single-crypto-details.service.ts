import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SingleCryptoDetailsService {
  constructor(private http: HttpClient) {}

  coin = ' https://data.messari.io/api/v1/assets/';

  getCoinMetrics(slug: string | undefined|null): Observable<any> {
    const header = new HttpHeaders().set(
      'x-messari-api-key',
      environment.messariApiKey
    );
    return this.http.get<any>(`${this.coin}${slug}/metrics`, {
      headers: header,
    });
  }
}
