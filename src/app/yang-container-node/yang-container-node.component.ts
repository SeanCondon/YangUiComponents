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
  @Input() parentEdit: boolean = false;
  containerEdit: boolean = false;

  constructor(public yangMetaService: YangMetaService,
              public yangDataService: YangDataService) { }

  ngOnInit() {
  }

  toggleEdit() {
    this.containerEdit = !this.containerEdit;
  }
}
