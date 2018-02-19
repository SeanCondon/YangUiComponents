import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { YangDataNode, YangLeafNode, YangContainerNode, YangListNode,
          YangChoice, YangType, NodeType } from './YangDataNodes';

interface YangFileModel {
  annotations: string;
  modules: string;
  tree: object;
}

enum YangFileAttr {
  type = 0,
  content = 1
}
/// Local Data Service
@Injectable()
export class YangMetaService implements OnInit {
  public metaIndex: Map<string,YangDataNode> = new Map();
  private counter: number = 0;

  //Recursive function to convert file contents in to Map
  parseYangModel(yangTree: Object, dn: string) {
    for (let yangKey in yangTree) {
      let dnLocal=dn+"/"+yangKey;
      let type: string = yangTree[yangKey][0];
      let children = yangTree[yangKey][1];

      if (type === 'leaf' && typeof(children) === 'object') {
        if (children[0] == 'decimal64') {
          let decimalPlaces = children[1];
        }
      } else if (typeof(children) === 'object') {
        this.parseYangModel(children, dnLocal);
      }

      if (type === 'container') {
        let node = new YangContainerNodeImpl(this.counter++, "", yangKey, NodeType.leaf,
              "desc", "ref", true, false);
        this.metaIndex.set(dnLocal, node);
        console.log("Created: ", dnLocal, type, node);
      } else if (type === 'leaf') {
        let node = new YangLeafNodeImpl(this.counter++, "", yangKey, NodeType.leaf,
              "desc", "ref", true, false);
        if (typeof(children) === 'object') {
          node.setTypedef(children[0]);
        } else {
          node.setTypedef(children);
        }
        this.metaIndex.set(dnLocal, node);
        console.log("Created: ", dnLocal, type, node);
      }
    }
  }

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.http.get<YangFileModel>('/restconf/data/meta/test1')
      .subscribe(data => {
          this.parseYangModel(data.tree, "");
        },
        err => console.log("Error occured.", err),
        () => (console.log("Metadata loaded: ", this.metaIndex.size)));
    console.log("Elements: ", this.metaIndex.size);
  }
}

class YangLeafNodeImpl implements YangLeafNode {
  default: any;
  public typedef: YangType = YangType.string;
  units: string;
  min: number;
  max: number;
  minLength: number;
  maxLength: number;
  patterns: RegExp[];
  range: string;

  constructor(public id: number, public namespace: string,
    public name: string, public nodeType: NodeType, public description: string,
    public reference: string, public config: boolean, public mandatory: boolean) {
  }

  setTypedef(typeStr: string): void {
    if (typeStr === 'string') {
      this.typedef = YangType.string;
    } else if (typeStr === 'uint8') {
      this.typedef = YangType.uint8;
    } else if (typeStr === 'uint16') {
      this.typedef = YangType.uint16;
    } else if (typeStr === 'decimal64') {
      this.typedef = YangType.decimal64;
    }
  }
}

class YangContainerNodeImpl implements YangContainerNode {
  children: YangDataNode[];
  choices: YangChoice[];

  constructor(public id: number, public namespace: string,
    public name: string, public nodeType: NodeType, public description: string,
    public reference: string, public config: boolean, public mandatory: boolean) {
  }
}
