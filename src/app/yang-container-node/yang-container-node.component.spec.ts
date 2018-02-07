import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YangContainerNodeComponent } from './yang-container-node.component';

describe('YangContainerNodeComponent', () => {
  let component: YangContainerNodeComponent;
  let fixture: ComponentFixture<YangContainerNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YangContainerNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YangContainerNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
