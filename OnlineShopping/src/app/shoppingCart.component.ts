import {Component} from '@angular/core';
import {Product} from './product.model';
import {ProductService} from './product.service';

@Component({
    selector:'shopping-cart',
    templateUrl:'./shoppingCart.component.html',
    providers: [ProductService]
})
export class ShoppingCartComponent{
    heading:string="Online Shopping";
    products: Product[];
    
    constructor(public productService: ProductService){
        this.products = productService.getAllProducts();
    }

    ChangeHeading(){
        this.heading="Flipkart";
    }

    ChangeHeadingOnInput(e){
        this.heading = e.target.value;
        // console.log(e.target.value);
    }
}