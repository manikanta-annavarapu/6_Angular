// var x = 10; //type inference
var x = 10; // type annotation
// x = "Hi"; //throws and error
console.log(x);
var s;
var o;
var b;
var y; //if we are not declareing any type then it will be having 'any' datatype;
// var y: any; //alternative
y = 10;
y = true;
y = "hello";
y = [10, 20, 30, 40];
function add(x, y) {
    return x + y;
}
add(10, 20);
var result = add(10, 20);
//Parameters - optional, default, rest(remaining)
//optional parameters should be at the last
function printBooks(author, title) {
    console.log(author, title);
}
printBooks();
printBooks("Oreo", "Biscuits");
