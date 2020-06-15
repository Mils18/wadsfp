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
  // readonly baseURL = 'http://3.1.83.74:3000/users';
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

  getStoreById(_id: string) {
    var a =  this.http.post(this.baseURL + '/getStoreName', `/${_id}`);
    console.log("a",a);
  }
}
