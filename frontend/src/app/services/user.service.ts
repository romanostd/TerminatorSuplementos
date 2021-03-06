import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) {
    this.http = http;
  }

  async post(user: User) {
    const endpoint = 'http://localhost:3000/users'
    return await this.http.post<User>(endpoint, user).toPromise()
  }

  async put(user: User, id: any) {
    const endpoint = `http://localhost:3000/users/${id}`
    return await this.http.put<User>(endpoint, user).toPromise()
  }

  async get() {
    const result = await this.http.get<User[]>('http://localhost:3000/users').toPromise();
    return result;
  }

  getById(id: any): Observable<User> {
    const url = `http://localhost:3000/users/${id}`
    return this.http.get<User>(url)
  }

  remove(id: any): Observable<User> {
    const url = `http://localhost:3000/users/${id}`
    return this.http.delete<User>(url)
  }
}
