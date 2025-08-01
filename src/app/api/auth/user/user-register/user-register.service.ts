import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAPIError } from '../../../../../server/utils/IAPIError';

export interface IUserRegisterBody {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
  birth_date: string;
  check_privacy: boolean;
  address: {
    cep: string;
    street: string;
    number: string;
    complement: string;
    uf_id: string;
    city: string;
  },
  gym_plan_id: string;
}

export interface IUserRegisterResponse {
  token: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserRegisterService {

  constructor(private http: HttpClient) {
  }

  async userRegister (body: IUserRegisterBody): Promise<IUserRegisterResponse | IAPIError> {
    const API_URL = process.env['API_URL']

    const result = this.http.post<IUserRegisterResponse | IAPIError>(`${API_URL}/user/register`, body)

    return new Promise((resolve, reject) => {
      result.subscribe({
        next: (response) => resolve(response),
        error: (error) => reject(error)
      });
    } );

  }

}
