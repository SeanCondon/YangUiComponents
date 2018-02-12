import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Validators, ValidatorFn, FormGroup, FormControl } from '@angular/forms';
import { YangLeafNode, YangType, YangContainerNode } from '../YangDataNodes';
import { YangLeafNodeComponent } from './yang-leaf-node.component';
import { YangStringValueComponent } from '../yang-string-value/yang-string-value.component';

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
