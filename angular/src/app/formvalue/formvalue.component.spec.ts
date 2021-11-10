import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvalueComponent } from './formvalue.component';

describe('FilterbarComponent', () => {
  let component: FormvalueComponent;
  let fixture: ComponentFixture<FormvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormvalueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
