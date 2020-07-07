import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncEditComponent } from './func-edit.component';

describe('FuncEditComponent', () => {
  let component: FuncEditComponent;
  let fixture: ComponentFixture<FuncEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
