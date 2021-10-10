import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollagemoduleComponent } from './collagemodule.component';

describe('CollagemoduleComponent', () => {
  let component: CollagemoduleComponent;
  let fixture: ComponentFixture<CollagemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollagemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollagemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
