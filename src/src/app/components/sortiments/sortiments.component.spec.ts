import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortimentsComponent } from './sortiments.component';

describe('SortimentsComponent', () => {
  let component: SortimentsComponent;
  let fixture: ComponentFixture<SortimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
