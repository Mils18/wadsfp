import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdctAlertsComponent } from './prodct-alerts.component';

describe('ProdctAlertsComponent', () => {
  let component: ProdctAlertsComponent;
  let fixture: ComponentFixture<ProdctAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdctAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdctAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
