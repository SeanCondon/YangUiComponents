import { Component, Input, OnInit } from '@angular/core';
import { YangLeafNode, YangType } from '../YangDataNodes';

@Component({
  selector: 'leaf',
  templateUrl: './yang-leaf-node.component.html',
  styleUrls: ['./yang-leaf-node.component.css']
})
export class YangLeafNodeComponent implements OnInit {
  @Input() leafModel: YangLeafNode;
  value: any;
  exists: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
