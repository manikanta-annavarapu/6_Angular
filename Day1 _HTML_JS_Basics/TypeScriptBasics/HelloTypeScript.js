var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
var _this = this;
// var x = 10; //type inference
var x = 10; // type annotation
// x = "Hi"; //throws and error
// console.log(x);
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
// printBooks();
// printBooks("Oreo","Biscuits");
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
// printBooksRest("A","B");
// printBooksRest("A","B","C");
//different ways of writing a funciton
var Square = function (x) {
    return x * x;
};
// arrow function
var Square1 = function (x) {
    return x * x;
};
// if only one parameter is there
var Square2 = function (x) { return x * x; };
//Arrays
var carsAll = ["BMW", "AUDI", "FERRARI", 10];
var cars = ["BMW", "AUDI", "FERRARI"];
var carsMore = new Array("BMW", "AUDI", "FERRARI");
for (var c in cars) { // c will give index
    console.log(c);
}
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) { // c will give item
    var c = cars_1[_i];
    console.log(c);
}
// for with normal function
cars.forEach(function (car, index) {
    console.log(car);
});
// for with arrow function
cars.forEach(function (car, index) { return console.log(car); });
//Spread (Arrays, objects)
var cars1 = ["BMW", "AUDI", "FERRARI"];
var carsMore1 = new Array("TATA", "MAHINDRA");
var carsAll1 = __spreadArrays(cars1, carsMore1); //deep copies the values of cars1 and carsMore1 into carsAll1 and carsAll1 will be 1d array
var carsAll2 = [cars1, carsMore1]; // is actually array of arrays
//Spread with objects
var person = { name: "Virat", city: "delhi" };
var player = __assign(__assign({}, person), { runs: 5000 });
//Destructing (array , objects)
//Destructing (array )
var firstCar, secondCar, thirdCar;
firstCar = cars1[0], secondCar = cars1[1]; //item at index 0 will mapped to firstCar and at index 1 mapped to secondCar
firstCar = cars1 //different way
[0], secondCar = cars1 //different way
[2], _a = cars1 //different way
[3], thirdCar = _a === void 0 ? "Jeep" : _a; //different way
//Destructing (objects)
var pname, city;
//traditional way
pname = person.name;
city = person.city;
//destructing way
var obj = { oreo: "biscuit", badam: "nut" };
var oreo, badam;
(oreo = obj.oreo, badam = obj.badam); //in objects variable names and object property names should be same
var company = { title: "JCI", city: "pune", xyz: 123 };
//here company1 will only accept the properties available in ICompany, if we try to add any other properties
//it will throw an error
var company1 = { title: "JCI", city: "pune", getDetails: function () { console.log(_this.title + " " + _this.city); } };
//class
//private , public and protected access specifiers are available in typescript
var Car = /** @class */ (function () {
    function Car(name, speed) {
        if (name === void 0) { name = "i20"; }
        if (speed === void 0) { speed = 100; }
        this.name = name;
        this.speed = speed;
    }
    Car.prototype.accelerate = function () {
        // console.log("The car "+this.name+" is running at"+this.speed+"kmps");
        return "The car " + this.name + " is running at " + this.speed + " kmph!"; //
    };
    return Car;
}());
var objCar = new Car();
objCar.accelerate();
var multiLineStr = "First Line\nSecond Line \nThird Line\nLast Line !"; //here \n or \r is included
var JamesBondCar = /** @class */ (function (_super) {
    __extends(JamesBondCar, _super);
    function JamesBondCar(n, s, fly, sub) {
        var _this = _super.call(this, n, s) || this;
        _this.canFly = fly;
        _this.canSubmerge = sub;
        return _this;
    }
    JamesBondCar.prototype.accelerate = function () {
        return _super.prototype.accelerate.call(this) + "additional text";
    };
    return JamesBondCar;
}(Car));
var jbc = new JamesBondCar("aston martin", 500, true, true);
jbc.accelerate();
//practicing inheritance
var Person = /** @class */ (function () {
    function Person(n, g, a) {
        this.name = n;
        this.gender = g;
        this.age = a;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(n, g, a, m, gr) {
        var _this = _super.call(this, n, g, a) || this;
        _this.marks = m;
        _this.grade = gr;
        return _this;
    }
    return Student;
}(Person));
//class implements interface
var Company = /** @class */ (function () {
    function Company() {
    }
    Company.prototype.getDetails = function () {
        console.log(this.title, this.city);
    };
    return Company;
}());
