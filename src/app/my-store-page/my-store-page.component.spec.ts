import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStorePageComponent } from './my-store-page.component';

describe('MyStorePageComponent', () => {
  let component: MyStorePageComponent;
  let fixture: ComponentFixture<MyStorePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStorePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
