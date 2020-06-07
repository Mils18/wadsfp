import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User;
  users: User[];
  readonly baseURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  signUpUser(usr: User) {
    return this.http.post(this.baseURL+'/signup', usr);
  }

  loginUser(usr: User) {
    return this.http.post(this.baseURL+'/login', usr);
  }

  registerStore(usr: User){
    return this.http.put(this.baseURL+ `/${usr._id}`, usr);
  }
}