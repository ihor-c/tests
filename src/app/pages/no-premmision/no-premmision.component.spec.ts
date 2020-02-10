import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPremmisionComponent } from './no-premmision.component';

describe('NoPremmisionComponent', () => {
  let component: NoPremmisionComponent;
  let fixture: ComponentFixture<NoPremmisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoPremmisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPremmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
