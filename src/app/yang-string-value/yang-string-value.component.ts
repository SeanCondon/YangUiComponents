import { Component, Input, OnInit } from '@angular/core';
import { Validators, ValidatorFn, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'yang-string-value',
  templateUrl: './yang-string-value.component.html',
  styleUrls: ['./yang-string-value.component.css']
})
export class YangStringValueComponent implements OnInit {
  @Input() patterns: RegExp[];
  @Input() attrName: string = "Value";
  @Input() minLength: number;
  @Input() maxLength: number;

  leafValue: string;
  validators: ValidatorFn[] = [];
  leafStringForm: FormGroup;
  constructor() {
  }

  ngOnInit(): void {
    if (this.minLength) {
      this.validators.push(Validators.minLength(this.minLength));
    }
    if (this.maxLength) {
      this.validators.push(Validators.maxLength(this.maxLength));
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
