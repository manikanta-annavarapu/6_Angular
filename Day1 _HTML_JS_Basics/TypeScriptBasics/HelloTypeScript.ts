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
