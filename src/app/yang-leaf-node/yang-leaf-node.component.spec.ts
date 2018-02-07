import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YangLeafNodeComponent } from './yang-leaf-node.component';

describe('YangLeafNodeComponent', () => {
  let component: YangLeafNodeComponent;
  let fixture: ComponentFixture<YangLeafNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YangLeafNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YangLeafNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
