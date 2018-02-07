import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeModule } from 'angular-tree-component';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { YangLeafNodeComponent } from './yang-leaf-node/yang-leaf-node.component';
import { YangContainerNodeComponent } from './yang-container-node/yang-container-node.component';
import { YangLeafNodeRoComponent } from './yang-leaf-node-ro/yang-leaf-node-ro.component';
import { YangStringValueComponent } from './yang-string-value/yang-string-value.component';
import { YangNumericValueComponent } from './yang-numeric-value/yang-numeric-value.component';
import { YangEnumeratedValueComponent } from './yang-enumerated-value/yang-enumerated-value.component';


@NgModule({
  declarations: [
    AppComponent,
    YangLeafNodeComponent,
    YangContainerNodeComponent,
    YangLeafNodeRoComponent,
    YangStringValueComponent,
    YangNumericValueComponent,
    YangEnumeratedValueComponent
  ],
  imports: [
    BrowserModule, TreeModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
