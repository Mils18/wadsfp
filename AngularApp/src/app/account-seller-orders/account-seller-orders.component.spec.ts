import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSellerOrdersComponent } from './account-seller-orders.component';

describe('AccountSellerOrdersComponent', () => {
  let component: AccountSellerOrdersComponent;
  let fixture: ComponentFixture<AccountSellerOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSellerOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSellerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
