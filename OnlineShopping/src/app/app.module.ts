import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {ShoppingCartComponent} from './shoppingCart.component';
import {ProductComponent} from './product.component';
import { QuantityPipe } from './quantity.pipe';



@NgModule({
  declarations: [
    AppComponent, ShoppingCartComponent, ProductComponent,QuantityPipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
