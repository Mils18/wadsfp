// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

declare var M: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public registerService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    
    this.registerService.selectedUser = {
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
    console.log("Submit btn clicked");
    console.log(form.value);
    
    if (form.value._id == "") {
      M.toast({ html: 'Blank', classes: 'rounded' });
      this.registerService.signUpUser(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Saved successfully' });
        this.router.navigate(['/login']);
      });
    }
    
    else {
      M.toast({ html: 'Wrong Format', classes: 'rounded' });
    }
  }

}