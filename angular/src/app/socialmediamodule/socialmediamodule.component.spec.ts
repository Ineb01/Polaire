import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediamoduleComponent } from './socialmediamodule.component';

describe('SocialmediaModuleComponent', () => {
  let component: SocialmediamoduleComponent;
  let fixture: ComponentFixture<SocialmediamoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmediamoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialmediamoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
