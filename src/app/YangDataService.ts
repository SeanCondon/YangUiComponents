import { Injectable } from "@angular/core";

/// Local Data Service
@Injectable()
export class YangDataService {
  public yangValueMap: Map<string,any>;

  constructor() {
    this.yangValueMap = new Map();
    this.yangValueMap.set("/test1:cont1a", null);
    this.yangValueMap.set("/test1:cont1a/cont2a", null);
    this.yangValueMap.set("/test1:cont1a/cont2a/leaf2a", "13");
    this.yangValueMap.set("/test1:cont1a/cont2a/leaf2b", "1.579");
    this.yangValueMap.set("/test1:cont1a/cont2a/leaf2c", "abc");
    this.yangValueMap.set("/test1:cont1a/leaf1a", "abcdef");
    this.yangValueMap.set("/test1:cont1b-state", null);
    this.yangValueMap.set("/test1:cont1b-state/list2a=1", null);
    this.yangValueMap.set("/test1:cont1b-state/list2a=1/leaf3c", "abc");
    this.yangValueMap.set("/test1:cont1b-state/list2a=2", null);
    this.yangValueMap.set("/test1:cont1b-state/list2a=2/leaf3c", "def");
    this.yangValueMap.set("/test1:cont1b-state/leaf2d", 12345);
  }
}
