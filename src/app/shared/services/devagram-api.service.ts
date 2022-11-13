import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DevagramApiService {
  constructor(
    protected http: HttpClient,
    @Inject('DEVAGRAM_URL_API') private devagramUrlApi: string
  ) {}

  public post(url: string, body: any): Promise<any> {
    return new Promise((res, rej) => {
      this.http.post(this.getUrl(url), body).subscribe({
        next: (v) => res(v),
        error: (e) => rej(e),
      });
    });
  }

  public getUrl(url: string): string {
    return `${this.devagramUrlApi}/${url}`;
  }
}
