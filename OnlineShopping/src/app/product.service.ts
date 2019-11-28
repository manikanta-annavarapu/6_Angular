import { Product } from'./product.model';

export class ProductService{
    public products:Product[]=[new Product("Watch",1200,1,4,4,"https://images-na.ssl-images-amazon.com/images/I/71gdBQP%2BqGL._UL1500_.jpg"),
        new Product("Phone",23123,1,4.5,4,"https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/samsung/galaxy-s10e/white/device-front.png.transform/pdpCarousel/image.jpg"),
        new Product("Bottle",50,0,3.2,10,"https://cdn11.bigcommerce.com/s-b0j8iiyjpx/products/112/images/642/LARQ_Bottle_Product-1_17oz_MB__25321.1571652469.1280.1280.jpg")
    ];

    getAllProducts():Product[]{
        return this.products;
    }
}