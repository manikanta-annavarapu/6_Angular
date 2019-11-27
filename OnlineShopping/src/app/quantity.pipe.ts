import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'qty'
})

export class QuantityPipe implements PipeTransform{

    transform(theQuantity:number){
        return theQuantity + " items";
    }

}