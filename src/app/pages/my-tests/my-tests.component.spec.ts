import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestsComponent } from './my-tests.component';

import { CalculatorComponent } from './../../components/calculator/calculator.component';

describe('MyTestsComponent', () => {
  let component: MyTestsComponent;
  let fixture: ComponentFixture<MyTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTestsComponent, CalculatorComponent ],
      imports: []
    })
    .compileComponents()
    .then( () => {
      fixture = TestBed.createComponent(MyTestsComponent);
      component = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
