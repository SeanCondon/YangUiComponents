import { Component, ViewChild } from '@angular/core';
import { YangMetaService } from './YangMetaService';
import { YangDataNode, YangLeafNode, YangType, YangContainerNode } from './YangDataNodes';
import { ITreeOptions, TreeComponent } from 'angular-tree-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yang Components Demo';
  yangMetaModel: YangDataNode[];
  sampleLeaf3a: YangLeafNode;
  sampleLeaf3b: YangLeafNode;
  sampleLeaf3c: YangLeafNode;

  constructor() {
    const yangMetaService: YangMetaService = new YangMetaService();
    this.yangMetaModel = yangMetaService.yangMetaModel;
    this.sampleLeaf3a = (((this.yangMetaModel[0] as YangContainerNode).children[0] as YangContainerNode).children[0] as YangLeafNode);
    this.sampleLeaf3b = (((this.yangMetaModel[0] as YangContainerNode).children[0] as YangContainerNode).children[1] as YangLeafNode);
    this.sampleLeaf3c = (((this.yangMetaModel[0] as YangContainerNode).children[0] as YangContainerNode).children[2] as YangLeafNode);
  }

  @ViewChild('tree') treeComponent: TreeComponent;
  ngAfterViewInit() {
    //this.treeComponent.treeModel.expandAll();
  }
  options: ITreeOptions = {
      isExpandedField: 'expanded',
  }

  invalid() {
    console.log("Invalid value");
  }
}
