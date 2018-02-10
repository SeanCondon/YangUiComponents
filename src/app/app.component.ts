import { Component, ViewChild, OnInit } from '@angular/core';
import { YangMetaService } from './YangMetaService';
import { YangDataService } from './YangDataService';
import { YangDataNode, YangLeafNode, YangType, YangContainerNode } from './YangDataNodes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Yang Components Demo';
  yangMetaService: YangMetaService;
  yangDataService: YangDataService = null;

  constructor() {
  }

  ngOnInit() {
    this.yangMetaService = new YangMetaService();
    this.yangDataService = new YangDataService(this.yangMetaService.yangMetaModel);
  }

  invalid() {
    console.log("Invalid value");
  }
}
