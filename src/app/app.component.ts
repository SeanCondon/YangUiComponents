import { Component, ViewChild, OnInit } from '@angular/core';
import { YangDataService } from './YangDataService';
import { YangMetaService } from './YangMetaService';
import { YangDataNode, YangLeafNode, YangType, YangContainerNode } from './YangDataNodes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Yang Components Demo';
  metaKeys: Array<string>;

  constructor(public yangMetaService: YangMetaService,
              public yangDataService: YangDataService) {

  }

  ngOnInit() {
    this.yangMetaService.ngOnInit();
    //TODO get rid of this dirty hack
    setInterval(() => {
      this.metaKeys = Array.from(this.yangMetaService.getTopLevelKeys());
      // console.log("Resfreshing");
    }, 500);
  }

}
