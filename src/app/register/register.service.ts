import { Injectable } from '@angular/core';
import { DevagramApiService } from '../shared/services/devagram-api.service';
import { ResponseApiDevagram } from '../shared/types/response-api-devagram.type';
import { RegisterType } from './register.type';

@Injectable({
  providedIn: 'root',
})
export class RegisterService extends DevagramApiService {
  public register(body: RegisterType): Promise<ResponseApiDevagram> {
    return this.post('cadastro', body);
  }
}
