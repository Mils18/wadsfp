import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { AuthenticationService } from '../_services';
import { User } from '../_models';
declare var M: any;

@Component({
  selector: 'app-open-store',
  templateUrl: './open-store.component.html',
  styleUrls: ['./open-store.component.css']
})
export class OpenStoreComponent implements OnInit {

  currentUser: User;
  loading = false;
  user:User;
  storeName:string='';
  error = '';
  message = '';

  constructor(
    public userService: UserService,
    private router: Router,
    private authenticationService: AuthenticationService) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit(): void {
    this.resetForm();
    this.user = this.authenticationService.getLocalStorage();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    
      this.userService.selectedUser = {
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        storeName:"",
        idCardNumber:"",
      }

    // M.toast({ html: 'Reset successfully', classes: 'rounded' });
    M.toast({html: 'Reset Form</p>'})
  }

  onSubmit(form: NgForm) {
    var myJSON = JSON.stringify(form.value);
    form.controls['_id'].setValue(this.user.id);

    this.userService.registerStore(form.value)
    .subscribe((res) => {
      alert('The site says: Store succesfully registered');
      this.authenticationService.updateLocalStorage(form.value.storeName);
      this.router.navigate(['/account/seller']);
    }   , error => {
      this.error = error;
      });

    // if (form.value._id == "") {
    // console.log("Test2",form.value);
    // this.userService.registerStore("5eda670231e15639aca33671",form.value)
      // .subscribe((res) => {
      //   this.router.navigate(['/account/seller']);
      // });
    // }
    
    // else {
    //   M.toast({ html: 'Wrong Format', classes: 'rounded' });
    // }
  }

}
