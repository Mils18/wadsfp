
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UserService, AuthenticationService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']

})export class TestpageComponent {
    currentUser: User;
    loading = false;
    user:User;
    id:string='';
    firstName:string='';
    lastName:string='';

    constructor(
      private router: Router,
      private authenticationService: AuthenticationService) { 
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      }

    ngOnInit() {
        this.user = this.authenticationService.getLocalStorage();
        this.firstName = this.user.firstName;
        this.lastName = this.user.lastName;
    }
    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}