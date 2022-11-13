import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DevagramApiService } from '../shared/services/devagram-api.service';
import { CredentialsDevagramType } from './credentials-devagram.type';
import { ResponseLoginDevagramType } from './response-login-devagram.type';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends DevagramApiService {
  constructor(
    protected _http: HttpClient,
    @Inject('DEVAGRAM_URL_API') private _devagramUrlApi: string,
    private router: Router
  ) {
    super(_http, _devagramUrlApi);
  }

  async login(credentials: CredentialsDevagramType): Promise<void> {
    const response: ResponseLoginDevagramType = await this.post(
      'login',
      credentials
    );

    if (!response.token) {
      throw new Error('Login inválido!');
    }

    localStorage.setItem('@Devagram:token', response.token);
    localStorage.setItem('@Devagram:nome', response.nome);
    localStorage.setItem('@Devagram:email', response.email);

    this.router.navigateByUrl('/');
  }

  isAuth(): boolean {
    return !!localStorage.getItem('@Devagram:token');
  }

  logout(): void {
    localStorage.removeItem('@Devagram:token');
    localStorage.removeItem('@Devagram:nome');
    localStorage.removeItem('@Devagram:email');
    this.router.navigateByUrl('/login');
  }
}
