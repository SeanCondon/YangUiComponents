
export interface YangDataNode {
  id: number;
  namespace: string;
  name: string;
  nodeType: NodeType;
  description: string;
  reference: string;
  config: boolean;
  mandatory: boolean;
}

export enum NodeType {
  container,
  list,
  leaf,
  leaflist
}

export interface YangChoice {
  cases: YangDataNode[];
  description: string;
  reference: string;
}

export interface YangLeafNode extends YangDataNode {
  default: any;
  typedef: YangType;
  units: string;
  min: number;
  max: number;
  length: string;
  patterns: RegExp[];
  range: string;

  setTypedef(typeStr: string): void;
}

export interface YangContainerNode extends YangDataNode {
  children: YangDataNode[];
  choices: YangChoice[];
}

export interface YangListNode extends YangContainerNode {
  keys: string[]; //There can be more than one key
  minElements: number;
  maxElements: number;
}

export interface YangLeafValueComponent {
  attrName: string;
}

//TODO Expand this list
export enum YangType {
  string,
  uint8,
  uint16,
  uint32,
  uint64,
  int8,
  int16,
  int32,
  int64,
  decimal64,
}
