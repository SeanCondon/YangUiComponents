import { Component, OnInit, Input } from '@angular/core';
import { YangDataNode, YangContainerNode } from '../YangDataNodes';

@Component({
  selector: 'container',
  templateUrl: './yang-container-node.component.html',
  styleUrls: ['./yang-container-node.component.css']
})
export class YangContainerNodeComponent implements OnInit {
  @Input() containerModel: YangContainerNode;
  @Input() dn: string;
  
  constructor() { }

  ngOnInit() {
  }

}
