import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { YangMetaService } from './YangMetaService';
import { YangDataService } from './YangDataService';
import { MockYangMetaDataInterceptor } from './MockYangMetaDataInterceptor';
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
    BrowserModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [
    YangMetaService,
    YangDataService,
    { provide: HTTP_INTERCEPTORS,
      useClass: MockYangMetaDataInterceptor,
      multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
