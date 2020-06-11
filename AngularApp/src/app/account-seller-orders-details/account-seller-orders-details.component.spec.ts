import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSellerOrdersDetailsComponent } from './account-seller-orders-details.component';

describe('AccountSellerOrdersDetailsComponent', () => {
  let component: AccountSellerOrdersDetailsComponent;
  let fixture: ComponentFixture<AccountSellerOrdersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSellerOrdersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSellerOrdersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
