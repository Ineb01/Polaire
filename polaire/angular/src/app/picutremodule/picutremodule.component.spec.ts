import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicutremoduleComponent } from './picutremodule.component';

describe('PicutreModuleComponent', () => {
  let component: PicutremoduleComponent;
  let fixture: ComponentFixture<PicutremoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicutremoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicutremoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
