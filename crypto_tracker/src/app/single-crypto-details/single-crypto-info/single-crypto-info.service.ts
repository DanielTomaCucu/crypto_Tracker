import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SingleCryptoInfoService {
  info: any;
  infoUrl = 'https://data.messari.io/api/v2/assets/';
  constructor(private http: HttpClient) { }

  getCryptoInfo(symbol:string|undefined|null): Observable<any> {
    const header = new HttpHeaders().set(
      'x-messari-api-key',
      environment.messariApiKey
    );
    return this.http.get<any>(`${this.infoUrl}${symbol}/profile`);
  }
}
