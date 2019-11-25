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

