import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ShoppingCartComponent} from './shoppingCart.component';
import {ProductComponent} from './product.component';


@NgModule({
  declarations: [
    AppComponent, ShoppingCartComponent, ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
