import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YangListNodeComponent } from './yang-list-node.component';

describe('YangListNodeComponent', () => {
  let component: YangListNodeComponent;
  let fixture: ComponentFixture<YangListNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YangListNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YangListNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
