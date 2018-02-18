import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators, ValidatorFn, FormGroup, FormControl } from '@angular/forms';
import { YangDataNode, NodeType, YangContainerNode } from '../YangDataNodes';
import { YangContainerNodeComponent } from './yang-container-node.component';
import { YangLeafNodeComponent } from '../yang-leaf-node/yang-leaf-node.component';
import { YangStringValueComponent } from '../yang-string-value/yang-string-value.component';
import { YangNumericValueComponent } from '../yang-numeric-value/yang-numeric-value.component';

describe('YangContainerNodeComponent', () => {
  let component: YangContainerNodeComponent;
  let fixture: ComponentFixture<YangContainerNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        YangContainerNodeComponent,
        YangLeafNodeComponent,
        YangStringValueComponent,
        YangNumericValueComponent,
       ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YangContainerNodeComponent);
    component = fixture.debugElement.componentInstance;
    const cont2a: YangContainerNode = {
      id: 21,
      name: "cont2a",
      nodeType: NodeType.container,
      description: "container for 3a and 3b",
      config: true,
      reference: null,
      mandatory: false,
      children: [],
      choices: []
    };

    component.containerModel = cont2a;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
