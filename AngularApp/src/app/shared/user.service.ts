import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User;
  users: User[];
  readonly baseURL = 'http://localhost:3000/user/signup';

  constructor(private http: HttpClient) { }

  postUser(emp: User) {
    console.log('postUser')
    return this.http.post(this.baseURL, emp);
  }
}
