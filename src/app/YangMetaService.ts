import { YangDataNode, YangLeafNode, YangContainerNode, YangListNode, YangType, NodeType } from './YangDataNodes';


/// Local Data Service
class YangMetaService {
  public yangMetaModel: Array<YangDataNode> = [];
  public metaIndex: Map<String,YangDataNode> = new Map();

  constructor() {
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

    const leaf3b: YangLeafNode = {
      id: 32,
      name: "leaf3b",
      nodeType: NodeType.leaf,
      description: "an uint8 leaf with a really long desctiption that is too long",
      typedef: YangType.uint8,
      config: true,
      units: "mV",
      default: 20,
      reference: "A short reference",
      mandatory: false,
      minLength: null,
      maxLength: null,
      min: null,
      max: null,
      patterns: null,
      range: "1..2|10..12|20..22"
    };

    const leaf3c: YangLeafNode = {
      id: 33,
      name: "leaf3c",
      description: "Another numeric, but read only",
      nodeType: NodeType.leaf,
      typedef: YangType.uint16,
      config: false,
      units: "mm",
      default: 1500,
      reference: "RFC 6020 s1.3",
      mandatory: false,
      minLength: null,
      maxLength: null,
      min: null,
      max:null,
      patterns: null,
      range: null
    };

    const leaf3d: YangLeafNode = {
      id: 34,
      name: "leaf3d",
      nodeType: NodeType.leaf,
      description: "A key attribute - type string",
      typedef: YangType.string,
      config: true,
      units: null,
      default: null,
      reference: "RFC 6020 s1.3",
      mandatory: true,
      minLength: null,
      maxLength: null,
      min: null,
      max:null,
      patterns: [ new RegExp("[a-z]{4}") ],
      range: null
    };

    const leaf3e: YangLeafNode = {
      id: 35,
      name: "leaf3e",
      nodeType: NodeType.leaf,
      description: "Another attribute of the list",
      typedef: YangType.uint8,
      config: false,
      units: "Hz",
      default: 100,
      reference: "RFC 6020 s1.3",
      mandatory: true,
      minLength: null,
      maxLength: null,
      min: null,
      max:50,
      patterns: null,
      range: "0|10|20|25|33|50"
    };

    const cont2a: YangContainerNode = {
      id: 21,
      name: "cont2a",
      nodeType: NodeType.container,
      description: "container for 3a and 3b",
      config: true,
      reference: null,
      mandatory: false,
      children: [
        leaf3a,
        leaf3b,
        leaf3c
      ],
      choices: []
    };

    const list2b: YangListNode = {
      id: 22,
      name: "list2b",
      nodeType: NodeType.list,
      description: "container for 3a and 3b",
      config: true,
      reference: null,
      mandatory: false,
      children: [
        leaf3e
      ],
      choices: [],
      key: [
        leaf3d
      ],
      minElements: null,
      maxElements: 4
    };

    const cont1a: YangContainerNode = {
      id: 11,
      name:     "cont1a",
      nodeType: NodeType.container,
      description: "A top level container",
      reference: "RFC ???",
      config: true,
      mandatory: true,
      children: [
        cont2a,
        list2b
      ],
      choices: []
    };

    this.metaIndex.set("/cont1a",cont1a);
    this.metaIndex.set("/cont1a/cont2a",cont2a);
    this.metaIndex.set("/cont1a/cont2a/leaf3a",leaf3a);
    this.metaIndex.set("/cont1a/cont2a/leaf3b",leaf3b);
    this.metaIndex.set("/cont1a/cont2a/leaf3c",leaf3c);
    this.metaIndex.set("/cont1a/list2b",list2b);
    this.metaIndex.set("/cont1a/list2b/leaf3d",leaf3d);
    this.metaIndex.set("/cont1a/list2b/leaf3e",leaf3e);

    this.yangMetaModel = [
      cont1a
    ]

  }

  findByDn(dn: string): YangDataNode {
    console.log("Find type for dn: " + dn);
    let dnParts: string[] = dn.split("/");
    dnParts.shift();

    for (let dataNode of this.yangMetaModel) {
      if (dataNode.name == dnParts[0]) {
        dnParts.shift();
        if (dnParts.length == 0) {
          return dataNode;
        } else {
          return this.findByDnRecurse(dnParts, dataNode);
        }
      }
    }
  }

  findByDnRecurse(dnParts: string[], dataNode: YangDataNode): YangDataNode {
    if (dataNode.hasOwnProperty('children')) {
      let child: YangDataNode = (dataNode as YangContainerNode)
                  .children
                  .filter((node: YangDataNode) => node.name == dnParts[0])
                  .pop();
      dnParts.shift();
      if (dnParts.length == 0) {
        // console.log("Last part - returning " + child.name);
        return child;
      } else {
        // console.log("Looking for " + dnParts[0] + " in children of " + child.name);
        return this.findByDnRecurse(dnParts, child);
      }
    }
  }
}

export var yangMetaService: YangMetaService = new YangMetaService();
