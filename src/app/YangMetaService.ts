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
      if (yangKey === 'description' || yangKey === 'nodeType' || yangKey === 'config' || yangKey === 'keys') { continue; }
      console.log("Handling ", yangKey);
      let dnLocal=dn+"/"+yangKey;
      let type: string = yangTree[yangKey][0]['nodeType'];
      let description: string = yangTree[yangKey][0]['description'];
      let reference: string = yangTree[yangKey][0]['reference'];
      let units: string = yangTree[yangKey][0]['units'];
      let config: boolean = typeof(yangTree[yangKey][0]['config']) === 'undefined' || yangTree[yangKey][0]['config'];
      let mandatory: boolean = yangTree[yangKey][0]['mandatory'];
      let children = yangTree[yangKey][0];
      let nodeTypeArr = yangTree[yangKey][0]['dataType'];
      let keys: string[] = yangTree[yangKey][0]['keys']

      if (type != 'leaf' && typeof(children) === 'object') {
        this.parseYangModel(children, dnLocal);
      }

      if (type === 'container') {
        let node = new YangContainerNodeImpl(this.counter++, "", yangKey, NodeType.container,
              description, reference, config, mandatory);
        this.metaIndex.set(dnLocal, node);
        console.log("Created: ", dnLocal, type, node);

      } else if (type == 'list') {
        let node = new YangListNodeImpl(this.counter++, "", yangKey, NodeType.list,
              description, reference, config, mandatory, keys);
        this.metaIndex.set(dnLocal, node);
        node.minElements = yangTree[yangKey][0]['min-elements'];
        node.maxElements = yangTree[yangKey][0]['max-elements'];
        console.log("Created: ", dnLocal, type, node);

      } else if (type === 'leaf') {
        let node: YangLeafNode = new YangLeafNodeImpl(this.counter++, "", yangKey, NodeType.leaf,
              description, reference, config, mandatory);
        node.setTypedef(nodeTypeArr[0]['type']);
        node.range = nodeTypeArr[0]['range'];
        node.length = nodeTypeArr[0]['length'];
        node.decimalPlaces = nodeTypeArr[0]['fraction-digits'];
        node.units = units;
        this.metaIndex.set(dnLocal, node);
        console.log("Created: ", dnLocal, type, node);
      } else {
        console.log("DN: " + dnLocal + " has unsupported type:", type);
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
        () => (console.log("Metadata loaded: ", this.metaIndex.size, " Top Level: ", this.getTopLevelKeys().length)));
    console.log("Elements: ", this.metaIndex.size);

    console.log("Top level Elements: ", this.getTopLevelKeys());
  }

  getTopLevelKeys() :string[] {
    let topLevelKeys = new Array<string>();
    for (let key of Array.from(this.metaIndex.keys())) {
      let parts: string[] = key.split("/");
      // for example /test1:cont1a will have 2 parts: null and 'test1:cont1a'
      if (parts.length == 2) {
        topLevelKeys.push(key);
      }
    }
    return topLevelKeys;
  }

  getNextLevelKeys(dn: string, listKeysOnly: boolean = false): string[] {
    let nextLevelKeys = new Array<string>();
    let dnLength = dn.split("/").length;

    //Special case of list - we do not want to return the key(s) of the list
    //First get the Meta Data Object
    let metaNode = this.metaIndex.get(dn);

    for (let key of Array.from(this.metaIndex.keys())) {
      if (!key.startsWith(dn)) { continue; }

      let parts: string[] = key.split("/");
      // for example /test1:cont1a will have 2 parts: null and 'test1:cont1a'
      if (parts.length == dnLength+1) {
        if ( metaNode instanceof YangListNodeImpl ) {
          let listKeys: Array<string> = (metaNode as YangListNode).keys;
          let keyLastPart = key.substr(key.lastIndexOf('/')+1);
          if (listKeys.indexOf(keyLastPart) != -1) {
            if (listKeysOnly) { nextLevelKeys.push(key); }
            else continue;
          }
        }

        if (!listKeysOnly) { nextLevelKeys.push(key); }
      }
    }

    return nextLevelKeys;
  }

}

class YangLeafNodeImpl implements YangLeafNode {
  default: any;
  public typedef: YangType = YangType.string;
  units: string;
  min: number;
  max: number;
  length: string;
  patterns: RegExp[];
  range: string;
  decimalPlaces: number = 0;

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
  choices: YangChoice[];

  constructor(public id: number, public namespace: string,
    public name: string, public nodeType: NodeType, public description: string,
    public reference: string, public config: boolean, public mandatory: boolean) {
  }
}

class YangListNodeImpl implements YangListNode {
  choices: YangChoice[];
  minElements: number;
  maxElements: number;

  constructor(public id: number, public namespace: string,
    public name: string, public nodeType: NodeType, public description: string,
    public reference: string, public config: boolean, public mandatory: boolean,
    public keys: string[]) {
  }
}
