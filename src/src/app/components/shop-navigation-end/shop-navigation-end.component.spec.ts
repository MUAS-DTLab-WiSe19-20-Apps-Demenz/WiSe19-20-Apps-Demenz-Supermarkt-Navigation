import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopNavigationEndComponent } from './shop-navigation-end.component';

describe('ShopNavigationEndComponent', () => {
  let component: ShopNavigationEndComponent;
  let fixture: ComponentFixture<ShopNavigationEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopNavigationEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopNavigationEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
