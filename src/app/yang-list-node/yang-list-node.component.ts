import { Component, OnInit, Input } from '@angular/core';
import { YangDataNode, YangListNode } from '../YangDataNodes';
import { YangMetaService } from '../YangMetaService';

@Component({
  selector: 'list',
  templateUrl: './yang-list-node.component.html',
  styleUrls: ['./yang-list-node.component.css']
})
export class YangListNodeComponent implements OnInit {
  @Input() listModel: YangListNode;
  @Input() dn: string;
  @Input() valuesMap: Map<String, any>;

  listNodes: Map<String, any> = new Map();
  childNodes: Map<String, any> = new Map();
  metaKeys: Array<string>;

  constructor(public yangMetaService: YangMetaService) {
    this.metaKeys = Array.from(yangMetaService.metaIndex.keys());
  }

  ngOnInit() {
    for (let key of this.metaKeys) {
      if (key.startsWith(this.dn) && key.lastIndexOf("=") == this.dn.length && key.lastIndexOf("/") < this.dn.length ) {
        this.listNodes.set(key, this.valuesMap.get(key));
      }
      if (key.startsWith(this.dn) && key.lastIndexOf("=") < key.lastIndexOf("/")) {
        this.childNodes.set(key, this.valuesMap.get(key));
      }
    }
  }

  removePredicate(absoluteDn: string): string {
    while (absoluteDn.indexOf("=") != -1) {
      let eqIdx = absoluteDn.indexOf("=");
      let nextSlash = absoluteDn.substr(eqIdx).indexOf("/");
      let remove = absoluteDn.substr(eqIdx, nextSlash);
      absoluteDn = absoluteDn.replace(remove, "");
    }
    return absoluteDn;
  }

}
