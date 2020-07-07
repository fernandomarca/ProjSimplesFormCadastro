import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncGetComponent } from './func-get.component';

describe('FuncGetComponent', () => {
  let component: FuncGetComponent;
  let fixture: ComponentFixture<FuncGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
