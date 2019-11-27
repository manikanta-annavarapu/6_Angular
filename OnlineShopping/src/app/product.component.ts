import {Component, Input} from '@angular/core';
import { Product } from './product.model';
@Component({
 selector:'product',
 templateUrl:'./product.component.html',
 styleUrls:['./product.style.css']
})
export class ProductComponent{
    @Input() product:Product ;
    isHighlighted:boolean=false;

   
  
}