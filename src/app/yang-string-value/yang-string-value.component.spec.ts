import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators, ValidatorFn, FormGroup, FormControl } from '@angular/forms';
import { YangStringValueComponent } from './yang-string-value.component';

describe('YangStringValueComponent', () => {
  let component: YangStringValueComponent;
  let fixture: ComponentFixture<YangStringValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YangStringValueComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YangStringValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
