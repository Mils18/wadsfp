// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { ToastService } from '../toast-service';

declare var M: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public registerService: UserService,
     public toastService: ToastService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  // showStandard() {
  //   this.toastService.show('I am a standard toast');
  // }
  // showSuccess() {
  //   this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
  // }

  // showDanger(dangerTpl) {
  //   this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
  // }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    
    this.registerService.selectedUser = {
      _id: "",
      email: "",
      password: "",
    }
    // M.toast({ html: 'Reset successfully', classes: 'rounded' });
    M.toast({html: 'Reset Form</p>'})
  }

  onSubmit(form: NgForm) {
    console.log("Submit btn clicked");
    console.log(form.value);
    
    if (form.value._id == "") {
      console.log("2");
      M.toast({ html: 'Blank', classes: 'rounded' });
      this.registerService.postUser(form.value).subscribe((res) => {
        console.log("3");
        this.resetForm(form);
        // if (!err) { res.send(doc); }
        M.toast({ html: 'Saved successfully' });
      });
    }
    
    else {
      M.toast({ html: 'Wrong Format', classes: 'rounded' });
    }
  }

}