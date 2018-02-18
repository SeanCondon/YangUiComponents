import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators, ValidatorFn, FormGroup, FormControl } from '@angular/forms';
import { YangMetaService } from '../YangMetaService';
import { YangDataService } from '../YangDataService';
import { YangLeafNode, NodeType, YangType, YangContainerNode, YangListNode } from '../YangDataNodes';
import { YangListNodeComponent } from './yang-list-node.component';
import { YangLeafNodeComponent } from '../yang-leaf-node/yang-leaf-node.component';
import { YangStringValueComponent } from '../yang-string-value/yang-string-value.component';
import { YangNumericValueComponent } from '../yang-numeric-value/yang-numeric-value.component';
import { YangContainerNodeComponent} from '../yang-container-node/yang-container-node.component';

describe('YangListNodeComponent', () => {
  let component: YangListNodeComponent;
  let fixture: ComponentFixture<YangListNodeComponent>;
  let valuesMap: Map<String, number>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        YangListNodeComponent,
        YangContainerNodeComponent,
        YangLeafNodeComponent,
        YangStringValueComponent,
        YangNumericValueComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        YangMetaService,
        YangDataService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YangListNodeComponent);
    component = fixture.debugElement.componentInstance;

    valuesMap = new Map();
    valuesMap.set("/a/b/c", 20);

    component.valuesMap = valuesMap;

    const list2b: YangListNode = {
      id: 22,
      name: "list2b",
      nodeType: NodeType.list,
      description: "container for 3a and 3b",
      config: true,
      reference: null,
      mandatory: false,
      children: [],
      choices: [],
      key: [],
      minElements: null,
      maxElements: 4
    };
    component.listModel = list2b;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
