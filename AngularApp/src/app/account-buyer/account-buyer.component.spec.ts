import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBuyerComponent } from './account-buyer.component';

describe('AccountBuyerComponent', () => {
  let component: AccountBuyerComponent;
  let fixture: ComponentFixture<AccountBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
