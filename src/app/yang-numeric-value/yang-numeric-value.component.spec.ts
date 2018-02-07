import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YangNumericValueComponent } from './yang-numeric-value.component';

describe('YangNumericValueComponent', () => {
  let component: YangNumericValueComponent;
  let fixture: ComponentFixture<YangNumericValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YangNumericValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YangNumericValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
