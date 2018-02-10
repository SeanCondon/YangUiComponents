import { YangDataNode } from './YangDataNodes';
import {} from "@angular/core";

/// Local Data Service
export class YangDataService {
  public yangValueMap: Map<String,any> = new Map();

  constructor(yangMetaModel: YangDataNode[]) {
    this.yangValueMap.set("/cont1a", null);
    this.yangValueMap.set("/cont1a/cont2a", null);
    this.yangValueMap.set("/cont1a/cont2a/leaf3a", "hello");
    this.yangValueMap.set("/cont1a/cont2a/leaf3b", "22");
    this.yangValueMap.set("/cont1a/cont2a/leaf3c", null);
  }
}
