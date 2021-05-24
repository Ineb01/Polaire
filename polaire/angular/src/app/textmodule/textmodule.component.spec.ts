import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextmoduleComponent } from './textmodule.component';

describe('TextmoduleComponent', () => {
  let component: TextmoduleComponent;
  let fixture: ComponentFixture<TextmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
