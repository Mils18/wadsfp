import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBuyerOrdersComponent } from './account-buyer-orders.component';

describe('AccountBuyerOrdersComponent', () => {
  let component: AccountBuyerOrdersComponent;
  let fixture: ComponentFixture<AccountBuyerOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountBuyerOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBuyerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
