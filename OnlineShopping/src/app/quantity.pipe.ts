import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'qty'
})

export class QuantityPipe implements PipeTransform{

    transform(theQuantity:number,args:string){
        if(theQuantity==0){
            return "OUT OF STOCK"
        }
        return theQuantity + " "+ args;
    }

}