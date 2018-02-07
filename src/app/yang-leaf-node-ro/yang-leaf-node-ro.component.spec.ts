import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YangLeafNodeRoComponent } from './yang-leaf-node-ro.component';

describe('YangLeafNodeRoComponent', () => {
  let component: YangLeafNodeRoComponent;
  let fixture: ComponentFixture<YangLeafNodeRoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YangLeafNodeRoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YangLeafNodeRoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
