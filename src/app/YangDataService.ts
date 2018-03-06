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
    this.yangValueMap.set("/test1:cont1a/list2a=txout1", null);
    this.yangValueMap.set("/test1:cont1a/list2a=txout1/tx-power", 8);
    this.yangValueMap.set("/test1:cont1a/list2a=txout2", null);
    this.yangValueMap.set("/test1:cont1a/list2a=txout2/tx-power", 10);
    this.yangValueMap.set("/test1:leafAtTopLevel", "WXY-1234");
    this.yangValueMap.set("/test1:cont1b-state", null);
    this.yangValueMap.set("/test1:cont1b-state/list2b=1", null);
    this.yangValueMap.set("/test1:cont1b-state/list2b=1/leaf3c", "abc");
    this.yangValueMap.set("/test1:cont1b-state/list2b=2", null);
    this.yangValueMap.set("/test1:cont1b-state/list2b=2/leaf3c", "def");
    this.yangValueMap.set("/test1:cont1b-state/leaf2d", 12345);

  }

  public getListKeys(listDn: string): string[] {
    let keyInstances = new Array<string>();
    let dnLength = listDn.split('/').length;
    for (let dn of Array.from(this.yangValueMap.keys())) {
      if (!dn.startsWith(listDn)) { continue; }

      let parts: string[] = dn.split("/");
      // for example /test1:cont1a will have 2 parts: null and 'test1:cont1a'
      if (parts.length == dnLength) {
        keyInstances.push(dn);
      }

    }
    return keyInstances;
  }

  removeListItem(listNodeDn: string): number {
    let count = 0;
    for (let dn of Array.from(this.yangValueMap.keys())) {
      if (!dn.startsWith(listNodeDn)) { continue; }
      this.yangValueMap.delete(dn);
      count = count+1;
    }
    console.log("Deleting ", listNodeDn, " and ", count, " children");
    return count;
  }
}
