import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../models/userresponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:4201/';
  signUp(
    email: string,
    password: string,
    name: string
  ): Observable<UserResponse> {
    const body = {
      email: email,
      password: password,
      name: name,
    };
    return this.http.post<UserResponse>(this.apiUrl + 'signup', body);
  }
  signIn(email: string, password: string) {
    const body = {
      email: email,
      password: password,
    };

    return this.http.post<UserResponse>(this.apiUrl + 'signin', body);
  }
}
