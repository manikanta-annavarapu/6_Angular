import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {ShoppingCartComponent} from './shoppingCart.component';
import {ProductComponent} from './product.component';
import { QuantityPipe } from './quantity.pipe';
import { CompanyComponent } from './company/company.component';

import { CompanyService} from './company/company.service';



@NgModule({
  declarations: [
    AppComponent, ShoppingCartComponent, ProductComponent,QuantityPipe, CompanyComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
