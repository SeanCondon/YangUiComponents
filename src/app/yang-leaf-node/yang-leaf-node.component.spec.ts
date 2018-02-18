import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators, ValidatorFn, FormGroup, FormControl } from '@angular/forms';
import { YangLeafNode, NodeType, YangType, YangContainerNode } from '../YangDataNodes';
import { YangLeafNodeComponent } from './yang-leaf-node.component';
import { YangStringValueComponent } from '../yang-string-value/yang-string-value.component';
import { YangNumericValueComponent } from '../yang-numeric-value/yang-numeric-value.component';

describe('YangLeafNodeComponent', () => {
  let component: YangLeafNodeComponent;
  let fixture: ComponentFixture<YangLeafNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YangLeafNodeComponent, YangStringValueComponent, YangNumericValueComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YangLeafNodeComponent);
    component = fixture.componentInstance;
    const leaf3a: YangLeafNode = {
      id: 31,
      name: "leaf3a",
      nodeType: NodeType.leaf,
      description: "a string leaf",
      typedef: YangType.string,
      config: true,
      units: null,
      default: null,
      reference: null,
      mandatory: true,
      minLength: 5,
      maxLength: 10,
      min: null,
      max:null,
      patterns: null,
      range: null
    };
    component.leafModel = leaf3a;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
