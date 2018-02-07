
export interface YangDataNode {
  id: number;
  name: string;
  description: string;
  reference: string;
  config: boolean;
  mandatory: boolean;
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
}

export interface YangContainerNode extends YangDataNode {
  children: YangDataNode[];
  choices: YangChoice[];
}

export interface YangListNode extends YangDataNode {
  key: YangLeafNode[]; //There can be more than one key
  minElements: number;
  maxElements: number;
}

//TODO Expand this list
export enum YangType {
  string,
  uint8,
  uint16,
  uint32
}

export enum YangIntegerType {
  int8,
  int16,
  int32,
  int64,
  uint8,
  uint16,
  uint32,
  uint64
}

//Represent a sub portion of a range
export interface YangSubRange {
  start: number;
  startMin?: boolean;
  end: number;
  endMax?: boolean;

  test(testValue: number): boolean;
}

export interface YangNumericRange {
  subRange: YangSubRange[];
}
