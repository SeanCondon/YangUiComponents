import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YangEnumeratedValueComponent } from './yang-enumerated-value.component';

describe('YangEnumeratedValueComponent', () => {
  let component: YangEnumeratedValueComponent;
  let fixture: ComponentFixture<YangEnumeratedValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YangEnumeratedValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YangEnumeratedValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
