// class Course{
//     name:string;
//     price:number;
//     duration:string;
//     city:string;
//     constructor(name:string,price:number,duration:string,city:string){
//        this.name=name;
//        this.price=price;
//        this.duration=duration;
//        this.city=city; 
//     }
// }

// Enhanced Class Syntax
export class Course{
    constructor(public name:string, public price:number, public duration:string, public city:string){

    }
}