import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { YangLeafNodeComponent } from './yang-leaf-node/yang-leaf-node.component';
import { YangContainerNodeComponent } from './yang-container-node/yang-container-node.component';
import { YangStringValueComponent } from './yang-string-value/yang-string-value.component';
import { YangNumericValueComponent } from './yang-numeric-value/yang-numeric-value.component';
import { YangListNodeComponent } from './yang-list-node/yang-list-node.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        YangLeafNodeComponent,
        YangContainerNodeComponent,
        YangStringValueComponent,
        YangNumericValueComponent,
        YangListNodeComponent,
      ],
      imports: [
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Yang Components Demo'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Yang Components Demo');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Yang Components Demo!');
  }));
});
