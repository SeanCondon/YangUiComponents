import { YangDataNode, YangLeafNode, YangContainerNode, YangType } from './YangDataNodes';

/// Local Data Service
export class YangMetaService {
  public yangMetaModel: Array<YangDataNode> = [];

  constructor() {
    const leaf3a: YangLeafNode = {
      id: 31,
      name: "leaf3a",
      description: "a string leaf",
      typedef: YangType.string,
      config: true,
      units: null,
      default: null,
      reference: null,
      mandatory: true
    };

    const leaf3b: YangLeafNode = {
      id: 32,
      name: "leaf3b",
      description: "an uint8 leaf with a really long desctiption that is too long",
      typedef: YangType.uint8,
      config: true,
      units: "mV",
      default: 5,
      reference: "A short reference",
      mandatory: false
    };

    const leaf3c: YangLeafNode = {
      id: 33,
      name: "leaf3c",
      description: "Another numeric, but read only",
      typedef: YangType.uint16,
      config: false,
      units: "mm",
      default: 150000,
      reference: "RFC 6020 s1.3",
      mandatory: false
    };

    const cont2a: YangContainerNode = {
      id: 21,
      name: "cont2a",
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

    const cont1a: YangContainerNode = {
      id: 11,
      name:     "cont1a",
      description: "A top level container",
      reference: "RFC ???",
      config: true,
      mandatory: true,
      children: [
        cont2a
      ],
      choices: []
    };

    this.yangMetaModel = [
      cont1a
    ]
  }
}
