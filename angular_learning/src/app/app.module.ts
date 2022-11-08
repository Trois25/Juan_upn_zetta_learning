import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider'

import { AppComponent } from './app.component';
import {ListComponent} from './list/list.component';
import {PurchaseComponent} from './purchase/purchase.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
