import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.css']
})
export class AccountpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToMyStore() {
    window.alert('You will be notified when the product goes on sale');
  }
}
