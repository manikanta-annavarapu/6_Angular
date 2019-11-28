import {Component, Input} from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';
@Component({
 selector:'product',
 templateUrl:'./product.component.html',
 styleUrls:['./product.style.css'],
 
})
export class ProductComponent{
    @Input() product:Product ;
    isHighlighted:boolean=false;

    constructor(public productService:ProductService){

    }

   delete(){
    this.productService.deleteProduct(this.product.title);
   }
  
}