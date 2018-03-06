import { Component, OnInit, Input } from '@angular/core';
import { YangLeafValueComponent, YangType } from '../YangDataNodes';
import { Validators, ValidatorFn, ValidationErrors, AbstractControl, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'yang-numeric-value',
  templateUrl: './yang-numeric-value.component.html',
  styleUrls: ['./yang-numeric-value.component.css']
})
export class YangNumericValueComponent implements YangLeafValueComponent, OnInit {
  @Input() minimum: number;
  @Input() maximum: number;
  @Input() numberType: YangType = YangType.uint8;
  @Input() decimalPlaces: number = 0;
  @Input() range: string;
  @Input() attrName: string = "Value";
  @Input() leafValue: number;
  validators: ValidatorFn[] = [];
  leafNumberForm: FormGroup;
  activeMin: number;
  activeMax: number;
  typenames : string[];

  constructor() {
  }

  ngOnInit(): void {
    if (this.minimum) {
      this.activeMin = this.minimum;
    } else {
      this.activeMin = typeLimit(this.numberType, true);
    }
    this.validators.push(Validators.min(this.activeMin));

    if (this.maximum) {
      this.activeMax = this.maximum;
    } else {
      this.activeMax = typeLimit(this.numberType, false);
    }
    this.validators.push(Validators.max(this.activeMax));

    if (this.range) {
      this.validators.push(this.numericRangeValidator(this.splitRange(this.range)));
    }
    this.leafNumberForm = new FormGroup({
        'leafNumberValue': new FormControl(this.leafValue, this.validators)
    });

    var options = Object.keys(YangType);
    this.typenames = options.slice(options.length / 2);
  }

  numericRangeValidator(ranges: YangSubRange[]): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if (ranges.length == 0) return null;
      for (let range of ranges) {
        if (range.test(control.value)) {
          return null;
        }
      }
      return {'range': {'message':'Value must be in range'}};
    }
  }

  splitRange(range: string): YangSubRange[] {
    let ranges: YangSubRange[] = [];
    console.log("Range is: " + this.range);

    for (let rangePart of this.range.split("|")) {
      let rangeStart: number = this.activeMin;
      let rangeEnd: number = this.activeMax;
      if (rangePart.indexOf("..") != -1) {
        let rangePartLimits = rangePart.split('..');
        if (rangePartLimits[0] != "min") {
          rangeStart = parseInt(rangePartLimits[0]);
        }
        if (rangePartLimits[1] != "max") {
          rangeEnd = parseInt(rangePartLimits[1]);
        }
      } else {
        rangeStart = parseInt(rangePart);
      }
      let newRange: YangSubRange = new YangSubRange(rangeStart, rangeEnd);
      ranges.push(newRange);
    }
    return ranges;
  }

  getStep() {
    return Math.pow(10, -this.decimalPlaces);
  }
}

export class YangSubRange {
  start: number;
  end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  test(testValue: number): boolean {
    if (testValue >= this.start && testValue <= this.end) {
      return true;
    }
    return false;
  }
}

const UINT8_MIN: number = 0;
const UINT8_MAX: number = 255;
const UINT16_MIN: number = 0;
const UINT16_MAX: number = 65535;
const UINT32_MIN: number = 0;
const UINT32_MAX: number = 0xFFFFFFFF;
const UINT64_MIN: number = 0;
const UINT64_MAX: number = 0xFFFFFFFFFFFFFFFF;
const INT8_MIN: number = -128;
const INT8_MAX: number = 127;
const INT16_MIN: number = -32768;
const INT16_MAX: number = 32767;
const INT32_MIN: number = 0x80000000;
const INT32_MAX: number = 0x7FFFFFFF;
const INT64_MIN: number = 0x8000000000000000;
const INT64_MAX: number = 0x7FFFFFFFFFFFFFFF;

export function typeLimit(type: YangType, isMin: boolean): number {
  if (type == YangType.uint8) {
    return isMin ? UINT8_MIN : UINT8_MAX;
  } else if (type == YangType.uint16) {
    return isMin ? UINT16_MIN : UINT16_MAX;
  } else if (type == YangType.uint32) {
    return isMin ? UINT32_MIN : UINT32_MAX;
  } else if (type == YangType.uint64) {
    return isMin ? UINT64_MIN : UINT64_MAX;
  } else if (type == YangType.int8) {
    return isMin ? INT8_MIN : INT8_MAX;
  } else if (type == YangType.int16) {
    return isMin ? INT16_MIN : INT16_MAX;
  } else if (type == YangType.int32) {
    return isMin ? INT32_MIN : INT32_MAX;
  } else if (type == YangType.int64) {
    return isMin ? INT64_MIN : INT64_MAX;
  }
}
