import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  newProduct: Product = new Product();
  constructor(public productService: ProductService) {

   }

  ngOnInit() {
  }

  addProduct(formData){
    console.log(this.newProduct);
    this.productService.addProduct(this.newProduct);
    this.newProduct = new Product();
    formData.reset();
  }

}
