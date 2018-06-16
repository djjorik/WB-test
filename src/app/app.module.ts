import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { DxTreeListModule } from 'devextreme-angular';
import {
  DxSelectBoxModule, DxListModule, DxTemplateModule,
  DxAccordionModule, DxTagBoxModule, DxButtonModule, DxSliderModule, DxCheckBoxModule
} from 'devextreme-angular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProcessComponent } from './panels/process/process.component';
import { HostsComponent } from './panels/hosts/hosts.component';
import { ServicesComponent } from './panels/services/services.component';
import { ProcessPreviewComponent } from './panels/process/process-preview/process-preview.component';

import { SpinnerComponent } from './common/spinner/spinner.component';
import { JoinPipe } from './common/pipes/join.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProcessComponent,
    HostsComponent,
    ServicesComponent,
    ProcessPreviewComponent,
    SpinnerComponent,
    JoinPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DxSelectBoxModule,
    DxListModule,
    DxTreeListModule,
    DxTemplateModule,
    DxTagBoxModule,
    DxButtonModule,
    DxAccordionModule,
    DxCheckBoxModule,
    DxSliderModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
