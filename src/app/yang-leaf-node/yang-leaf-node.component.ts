import { Component, Input, OnInit } from '@angular/core';
import { YangLeafNode, YangType, YangDataNode, YangContainerNode } from '../YangDataNodes';

@Component({
  selector: 'leaf',
  templateUrl: './yang-leaf-node.component.html',
  styleUrls: ['./yang-leaf-node.component.css']
})
export class YangLeafNodeComponent implements OnInit {
  @Input() leafModel: YangLeafNode;
  @Input() dn: string;
  @Input() value: any;
  @Input() parentEdit: boolean = false;
  exists: boolean = false;
  editMode: boolean = false;

  yangType: YangType;

  constructor() { }

  ngOnInit() {
    this.yangType = this.leafModel.typedef;

  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  applyDefault() {
    this.value = this.leafModel.default;
  }
}
