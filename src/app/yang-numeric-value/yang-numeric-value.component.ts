import { Component, OnInit, Input } from '@angular/core';
import { YangSubRange } from '../YangDataNodes';
import { Validators, ValidatorFn, ValidationErrors, AbstractControl, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-yang-numeric-value',
  templateUrl: './yang-numeric-value.component.html',
  styleUrls: ['./yang-numeric-value.component.css']
})
export class YangNumericValueComponent implements OnInit {
  @Input() minimum: number;
  @Input() maximum: number;
  @Input() signed: boolean;
  @Input() decimalPlaces: number;
  @Input() ranges: YangSubRange[];

  leafValue: number;
  validators: ValidatorFn[] = [];
  leafNumberForm: FormGroup;
  constructor() {
  }

  ngOnInit(): void {
    if (this.minimum) {
      this.validators.push(Validators.min(this.minimum));
    }
    if (this.maximum) {
      this.validators.push(Validators.max(this.maximum));
    }
    if (this.ranges) {
      this.validators.push(this.numericRangeValidator(this.ranges));
    }
    this.leafNumberForm = new FormGroup({
        'leafNumberValue': new FormControl(this.leafValue, this.validators)
    });
  }

  numericRangeValidator(ranges: YangSubRange[]): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      for (let range of ranges) {
        if (range.test(control.value)) {
          return null;
        }
      }
      return {'range': {'message':'Value must be in range'}};
    }
  }
}

export class YangSubRangeImpl implements YangSubRange {
  start: number;
  end: number;

  test(testValue: number): boolean {
    if (testValue >= this.start && testValue <= this.end) {
      return true;
    }
    return false;
  }
}
