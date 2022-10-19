"use strict";
exports.__esModule = true;
var message = 'learning typescript';
console.log(message);
//variable decalration
var x = 10;
var y = 69;
var sum; // let can be used if there ll be a change in the value
var title = 'typescript'; // const can be used when there is no change in the value
//variable type
var isBeginner = true;
var total = 0;
var name = 'Vaishnavi';
var sentence = "My name is ".concat(name, "\n I am a beginner in Typescript ");
console.log(sentence);
//name=true  static type checking
//name. intellisense
var n = null;
var u = undefined;
//object type
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//tuple
var person1 = ['Apple', 200];
var Week;
(function (Week) {
    Week[Week["monday"] = 0] = "monday";
    Week[Week["tuesday"] = 1] = "tuesday";
    Week[Week["wednesday"] = 2] = "wednesday";
})(Week || (Week = {}));
;
var w = Week.tuesday;
console.log(w);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
var randomValue = 10; // any can be used when unsure of type
randomValue = true; // reassigning to boolean also doesn;t thrown an error
randomValue = 'Mango';
/* let myVariable:unknown=10;
 (myVariable as string).toUpperCase();

 //type inference
 let a;
 a=10;
 a=true;

/* let b=78;
 b=true;*/
//union typoe restrict to specified type
//have intellisense support
var multitype;
multitype = 20;
multitype = true;
//anytype doent have any restriction
//no intellisense support
var anytype;
anytype = 20;
anytype = true;
//optional and default parameters
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add(5, 10));
add(5);
//CLASSES
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Issac Newton");
console.log(person.getName());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var myRect = new Rectangle(30, 40);
console.log(myRect.getArea());
var Polygon = /** @class */ (function () {
    function Polygon() {
    }
    Polygon.prototype.toString = function () {
        return "Polygon[area=".concat(this.getArea(), "]");
    };
    return Polygon;
}());
var myCar = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
console.log(myCar);
//record
var nameAgeMap = {
    'Varshit': 7,
    'Rithanya': 3
};
console.log(nameAgeMap);
var don = {
    Fulname: 'Don'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
console.log(don);
var value = true; // a string cannot be used here since Exclude removed it from the type.
console.log(typeof value);
