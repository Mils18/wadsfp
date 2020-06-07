import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;


    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();

    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(usr: User) {
        return this.http.post<User>('http://localhost:3000/users/login', usr)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }



    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    getLocalStorage(){
        var user: User;
        user = JSON.parse(localStorage.getItem('currentUser'));
        console.log("get local storage print user",user);
        return user;
    }

    updateLocalStorage(storeName: string){
        var user: User;
        user = JSON.parse(localStorage.getItem('currentUser'));
        user.storeName = storeName;
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
    }
}