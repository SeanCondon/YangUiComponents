import { Injectable } from "@angular/core";

/// Local Data Service
@Injectable()
export class YangDataService {
  public yangValueMap: Map<string,any>;

  constructor() {
    this.yangValueMap = new Map();
    this.yangValueMap.set("/test1:cont1a", null);
    this.yangValueMap.set("/test1:cont1a/cont2a", null);
    this.yangValueMap.set("/test1:cont1a/cont2a/leaf2a", "22");
    this.yangValueMap.set("/test1:cont1a/cont2a/leaf2b", "10");
  }
}
