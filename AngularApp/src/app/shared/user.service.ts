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
  readonly baseURL = 'http://localhost:3000/user';

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
  // return this.http.put(this.baseURL+ `/${usr._id}`, usr)
  // .pipe(map(user => {
  //     // store user details and jwt token in local storage to keep user logged in between page refreshes
  //     // console.log(emp)
  //     localStorage.setItem('currentUser', JSON.stringify(user));
  //     // this.currentUserSubject.next(user);
  //     return user;
  // }));
}
