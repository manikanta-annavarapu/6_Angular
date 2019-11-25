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
    author = author || "Unknow";
    title = title || "Unknow"; //older way of doing it so we can make use of default parameters
    console.log(author, title);
}
printBooks();
printBooks("Oreo", "Biscuits");
//default parameters
function printBooksDefault(author, title) {
    if (author === void 0) { author = "Unknow"; }
    if (title === void 0) { title = "Unknow"; }
    console.log(author, title);
}
//rest(remaining) three dots represents variable number of parameters
function printBooksRest(author) {
    var titles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        titles[_i - 1] = arguments[_i];
    }
    console.log(author, titles);
}
printBooksRest("A", "B");
printBooksRest("A", "B", "C");
