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
    isHighlighted:boolean ;
    isFree:boolean;

    constructor(public productService:ProductService){
        this.isHighlighted = false;
    }

    addToCart(){
        console.log("isHighlighted = ",this.isHighlighted)
        if(this.isHighlighted){
            this.productService.deleteInCart(this.product);
            console.log("hello");
        }else{
            this.productService.addToCart(this.product);
            console.log("bye");
        }
        
    }
   delete(){
    this.productService.deleteProduct(this.product.title);
   }
  
}