import { Component, ViewChild, OnInit } from '@angular/core';
import { YangDataService } from './YangDataService';
import { YangDataNode, YangLeafNode, YangType, YangContainerNode } from './YangDataNodes';

//Global metadata service
import { yangMetaService } from './YangMetaService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Yang Components Demo';
  yangDataService: YangDataService = null;
  appYangMetaService = yangMetaService;

  constructor() {
  }

  ngOnInit() {
    this.yangDataService = new YangDataService(yangMetaService.yangMetaModel);
  }

  invalid() {
    console.log("Invalid value");
  }
}
