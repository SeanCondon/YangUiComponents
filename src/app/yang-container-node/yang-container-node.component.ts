import { Component, OnInit, Input } from '@angular/core';
import { YangMetaService } from '../YangMetaService';
import { YangDataService } from '../YangDataService';
import { YangDataNode, YangContainerNode } from '../YangDataNodes';

@Component({
  selector: 'container',
  templateUrl: './yang-container-node.component.html',
  styleUrls: ['./yang-container-node.component.css']
})
export class YangContainerNodeComponent implements OnInit {
  @Input() containerModel: YangContainerNode;
  @Input() dn: string;

  constructor(public yangMetaService: YangMetaService,
              public yangDataService: YangDataService) { }

  ngOnInit() {
  }

}
