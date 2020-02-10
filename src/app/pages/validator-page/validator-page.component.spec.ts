import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorPageComponent } from './validator-page.component';

describe('ValidatorPageComponent', () => {
  let component: ValidatorPageComponent;
  let fixture: ComponentFixture<ValidatorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
