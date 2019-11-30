import {Component} from '@angular/core';
import {Product} from './product.model';
import {ProductService} from './product.service';

@Component({
    selector:'shopping-cart',
    templateUrl:'./shoppingCart.component.html'
})
export class ShoppingCartComponent{
    heading:string="Online Shopping";
    products: Product[];
    cartItems: Product[] = [];
    
    constructor(public productService: ProductService){
        this.cartItems = [];
        this.products = productService.getAllProducts();
        this.cartItems = productService.cartItem;
    }

    ChangeHeading(){
        this.heading="Flipkart";
    }

    ChangeHeadingOnInput(e){
        this.heading = e.target.value;
        // console.log(e.target.value);
    }
}