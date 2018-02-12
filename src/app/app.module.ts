import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { YangLeafNodeComponent } from './yang-leaf-node/yang-leaf-node.component';
import { YangContainerNodeComponent } from './yang-container-node/yang-container-node.component';
import { YangStringValueComponent } from './yang-string-value/yang-string-value.component';
import { YangNumericValueComponent } from './yang-numeric-value/yang-numeric-value.component';
import { YangListNodeComponent } from './yang-list-node/yang-list-node.component';

@NgModule({
  declarations: [
    AppComponent,
    YangLeafNodeComponent,
    YangContainerNodeComponent,
    YangStringValueComponent,
    YangNumericValueComponent,
    YangListNodeComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
