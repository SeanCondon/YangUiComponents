import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-yang-enumerated-value',
  templateUrl: './yang-enumerated-value.component.html',
  styleUrls: ['./yang-enumerated-value.component.css']
})
export class YangEnumeratedValueComponent implements OnInit {
  @Input() enums: string[];

  constructor() { }

  ngOnInit() {
  }

}
