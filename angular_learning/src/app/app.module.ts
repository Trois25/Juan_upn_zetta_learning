import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
