import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, jqxChartModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
