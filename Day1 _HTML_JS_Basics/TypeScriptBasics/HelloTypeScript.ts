// var x = 10; //type inference
var x: number = 10; // type annotation
// x = "Hi"; //throws and error
// console.log(x);

var s: string;
var o: object;
var b: boolean;
var y; //if we are not declareing any type then it will be having 'any' datatype;
// var y: any; //alternative
y = 10;
y = true;
y = "hello";
y = [10,20,30,40];

function add(x:number,y:number){
    return x+y;
}

add(10,20);

var result: number = add(10,20);

//Parameters - optional, default, rest(remaining)
//optional parameters should be at the last
function printBooks(author?: string, title?: string): void{
    author = author|| "Unknow";
    title = title || "Unknow"; //older way of doing it so we can make use of default parameters
    console.log(author, title)
}

// printBooks();
// printBooks("Oreo","Biscuits");

//default parameters
function printBooksDefault(author: string = "Unknow", title: string  = "Unknow"): void{
    console.log(author, title)
}

//rest(remaining) three dots represents variable number of parameters
function printBooksRest(author: string, ...titles: string[]):void{
    console.log(author,titles)
}
// printBooksRest("A","B");
// printBooksRest("A","B","C");


//different ways of writing a funciton
var Square = function(x){
    return x*x;
}
// arrow function
var Square1 = (x) =>{
    return x*x;
}

// if only one parameter is there
var Square2 = x => x*x;

//Arrays
var carsAll = ["BMW","AUDI", "FERRARI",10];
var cars: string[] =  ["BMW","AUDI", "FERRARI"];
var carsMore: Array<string> = new Array<string> ("BMW","AUDI", "FERRARI");

for(let c in cars){ // c will give index
    console.log(c)
}

for(let c of cars){ // c will give item
    console.log(c);
} 

// for with normal function
cars.forEach(function(car:string,index:number){
    console.log(car);
});

// for with arrow function
cars.forEach((car:string,index:number) =>console.log(car));

//Spread (Arrays, objects)

var cars1: string[] =  ["BMW","AUDI", "FERRARI"];
var carsMore1: Array<string> = new Array<string> ("TATA","MAHINDRA");
var carsAll1:string[] = [...cars1,...carsMore1]; //deep copies the values of cars1 and carsMore1 into carsAll1 and carsAll1 will be 1d array
var carsAll2 = [cars1, carsMore1] // is actually array of arrays

//Spread with objects
var person  = {name:"Virat", city:"delhi"};
var player = {...person, runs:5000}


//Destructing (array , objects)
//Destructing (array )
var firstCar, secondCar, thirdCar;
[firstCar,secondCar] = cars1; //item at index 0 will mapped to firstCar and at index 1 mapped to secondCar
[firstCar,,secondCar, thirdCar = "Jeep"] = cars1 //different way


//Destructing (objects)
var pname, city;
//traditional way
pname = person.name;
city = person.city;
//destructing way
var obj = {oreo:"biscuit",badam:"nut"}
var oreo, badam;
({oreo,badam} = obj) //in objects variable names and object property names should be same

var company = {title:"JCI", city: "pune", xyz:123}
// while creating an object there is a chance where other properties may embed which are invalid
//to overcome this we will make use of interface
// interface in typescript

interface ICompany{
    title: string;
    city?:string;
    getDetails():void;
}
//here company1 will only accept the properties available in ICompany, if we try to add any other properties
//it will throw an error
var company1: ICompany = {title:"JCI",city:"pune",getDetails: () =>{console.log(this.title+" "+this.city)}}


//class
//private , public and protected access specifiers are available in typescript
class Car{
    name:string;
    speed: number;
    constructor(name:string="i20", speed:number=100){
        this.name =name;
        this.speed =speed;
    }
    
    accelerate():void{
        // console.log("The car "+this.name+" is running at"+this.speed+"kmps");
        console.log(`The car ${this.name} is running at ${this.speed} kmph!`); //
    }
}

var objCar: Car = new Car();
objCar.accelerate();

var multiLineStr = `First Line
Second Line 
Third Line
Last Line !` //here \n or \r is included

