import { Component, OnInit } from '@angular/core';
import { YangDataNode } from '../YangDataNodes';

@Component({
  selector: 'container',
  templateUrl: './yang-container-node.component.html',
  styleUrls: ['./yang-container-node.component.css']
})
export class YangContainerNodeComponent implements OnInit, YangDataNode {
  id: number;
  name: string;
  description: string;
  reference: string;
  config: boolean;
  mandatory: boolean;
  children: YangDataNode[];

  constructor() { }

  ngOnInit() {
  }

}
