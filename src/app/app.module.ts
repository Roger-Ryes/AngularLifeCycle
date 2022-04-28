import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Page1Component } from './pages/page1/page1.component';
import { ShowNameComponent } from './components/show-name/show-name.component';
import { FormsModule } from '@angular/forms';
import { TimeComponent } from './tiem/time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    ShowNameComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
