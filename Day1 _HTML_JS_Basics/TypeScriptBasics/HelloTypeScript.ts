// var x = 10; //type inference
var x: number = 10; // type annotation
// x = "Hi"; //throws and error
console.log(x);

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

printBooks();
printBooks("Oreo","Biscuits");

//default parameters
function printBooksDefault(author: string = "Unknow", title: string  = "Unknow"): void{
    console.log(author, title)
}

//rest(remaining) three dots represents variable number of parameters
function printBooksRest(author: string, ...titles: string[]):void{
    console.log(author,titles)
}
printBooksRest("A","B");
printBooksRest("A","B","C");
