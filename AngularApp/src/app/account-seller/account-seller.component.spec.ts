import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSellerComponent } from './account-seller.component';

describe('AccountSellerComponent', () => {
  let component: AccountSellerComponent;
  let fixture: ComponentFixture<AccountSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
