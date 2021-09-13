import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturemoduleComponent } from './picturemodule.component';

describe('PicutreModuleComponent', () => {
  let component: PicturemoduleComponent;
  let fixture: ComponentFixture<PicturemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
