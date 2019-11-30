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

import {Routes, RouterModule} from '@angular/router';
import { PostdetailsComponent } from './postdetails/postdetails.component'
import { PostsService } from './posts/posts.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route } from '@angular/compiler/src/core';
import { AuthGuard } from './auth.guard';


// const routes: Routes= [
//     {path:"",component:ShoppingCartComponent},
//     {path:"posts",component:PostsComponent},
//     {path:"company", component:CompanyComponent},
//     {path:"posts/details/:id", component:PostdetailsComponent},
//     {path:"newproduct", component:NewproductComponent},
//     {path:"**",redirectTo:"/"}
// ];

const routes :Routes =[
  {path:'',component:LoginComponent},
  {path:'dashboard',component :DashboardComponent, children: [
    {path:'',component:ShoppingCartComponent},
    {path:'posts', component:PostsComponent},
    {path:'posts/details/:id',component:PostdetailsComponent},
    {path:'newproduct', component:NewproductComponent},
    {path:'company', component: CompanyComponent}
  ], canActivate:[AuthGuard]},
  {path:'**', redirectTo:'/'}
];

@NgModule({
  declarations: [
    AppComponent, ShoppingCartComponent, ProductComponent,QuantityPipe, 
    CompanyComponent, PostsComponent, TodosComponent, NewproductComponent, PostdetailsComponent, LoginComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CompanyService, ProductService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
