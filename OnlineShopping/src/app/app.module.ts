import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import {ShoppingCartComponent} from './shoppingCart.component';
import {ProductComponent} from './product.component';
import { QuantityPipe } from './quantity.pipe';
import { CompanyComponent } from './company/company.component';

import { CompanyService} from './company/company.service';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ProductService } from './product.service';



@NgModule({
  declarations: [
    AppComponent, ShoppingCartComponent, ProductComponent,QuantityPipe, CompanyComponent, PostsComponent, TodosComponent, NewproductComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [CompanyService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
