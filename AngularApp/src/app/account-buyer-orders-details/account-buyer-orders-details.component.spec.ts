import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBuyerOrdersDetailsComponent } from './account-buyer-orders-details.component';

describe('AccountBuyerOrdersDetailsComponent', () => {
  let component: AccountBuyerOrdersDetailsComponent;
  let fixture: ComponentFixture<AccountBuyerOrdersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountBuyerOrdersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBuyerOrdersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
