import { Component, Input, OnInit } from '@angular/core';
import { Validators, ValidatorFn, FormGroup, FormControl } from '@angular/forms';
import { YangLeafValueComponent } from '../YangDataNodes';

@Component({
  selector: 'yang-string-value',
  templateUrl: './yang-string-value.component.html',
  styleUrls: ['./yang-string-value.component.css']
})
export class YangStringValueComponent implements YangLeafValueComponent, OnInit {
  @Input() patterns: RegExp[];
  @Input() length: string;
  @Input() attrName: string = "Value";
  @Input() leafValue: string;
  validators: ValidatorFn[] = [];
  leafStringForm: FormGroup;
  constructor() {
  }

  ngOnInit(): void {
    if (this.length) {
      if (this.length.includes('..')) {
        let parts = this.length.split('..');
        this.validators.push(Validators.minLength(parseInt(parts[0])));
        this.validators.push(Validators.maxLength(parseInt(parts[1])));
      } else {
        this.validators.push(Validators.minLength(parseInt(this.length)));
      }
    }
    if (this.patterns) {
      for (let pattern of this.patterns) {
        this.validators.push(Validators.pattern(pattern));
      }
    }
    this.leafStringForm = new FormGroup({
        'leafStringValue': new FormControl(this.leafValue, this.validators)
    });
  }
}
