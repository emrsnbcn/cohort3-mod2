console.log("Hello From External JS");

//Single Line Comment

/*
    multi
    line
    comment
*/

// JavaScript is a loosely type programming language

/*
    VARIABLES - there are 3 ways to create variables
    var - it can be redeclare and be updated.
    let - you cannot redeclare but you can update the value
    const - (constant) you cannot redeclare and also you cannot update the value
*/

// const PI = 3.14;

//DATA TYPES

// PRIMITIVE DATA TYPES
// STRINGS - may include alphanumeric characters it is enclosed by a single or double quote.

let message = "Hello There";
console.log(message);

let friendName = "John";
console.log(message + " " + friendName);

// NUMBER - are used for computation and it should NOT be enclosed in single or double quote
let total = 0;
let item1 = 200;
let item2 = 300;

total = item1 + item2;

console.log(total);

//but what happens if we add a string to a number / add a number to a string (type coercion)
console.log(1 + "2"); //12

console.log(1 + 1 + "2");

// PEMDAS RULE
console.log(((5 + 8) * 4) / 2);

// BOOLEAN - represents true or false
// ( > ) greater than
// ( < ) less than
// ( >= ) greater than equal
// ( <= ) less than equal

console.log(5 > 2);
console.log(4 < 2);
console.log(5 >= 5); //true

// UNDEFINED - a variable declared without a value;
let age;
console.log(age);

// NULL - represents the intentional absence of any variable or object.
let z = null;

// NON-PRIMITIVE DATA TYPES
// OBJECT
let car = {
	// property/key: value
	color: "red",
	brand: "proton",
	type: "automatic",
	5: "something here",
	"x255-yx5b": "secret message here",
};
// there are 2 ways to access object value
// . dot notation
// [] square bracket notation
console.log(car.color);
console.log(car["type"]);
console.log(car[5]);
console.log(car["5"]);
console.log(car["x255-yx5b"]);

// ARRAY / LIST

let fruits = ["apple", "mango", "banana"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits.length);

// array.length - 1 = guarantees you get the last index position

console.log(fruits[fruits.length - 1]);

// PRIMITIVE DATA TYPES ARE IMMUTABLE AND IT IS PASS BY VALUE.
let a = 5;
let b = a;

a = 10;
console.log(b);

// NON PRIMITIVE DATA TYPES ARE MUTABLE AND IT IS PASS BY REFERENCE.

let cars = ["toyota", "honda", "bmw"];
console.log(cars);

let carsCopy = cars;
console.log(carsCopy);

carsCopy[0] = "perodua";

console.log(carsCopy);
console.log(cars);

/*
OPERATORS
*/

//assignment operator
let p = 20;

//mathematical operators
// + add
// - subtract
// * multiply
// / divide
// % modulo (remainder)

//additional assignment opreator += (add and update)
p += 5;
// p = p + 5
console.log(p);

//subtraction assignment operator -=
p -= 3;
console.log(p);

//multiplication assignment operator *=
p *= 4;
console.log(p);

//division assignment operator /=
p /= 4;
console.log(p);

// modulo assignment operator
p %= 5;
console.log(p); //2

/* 
    EQUALITY OPERATOR ==
    - return true if both values are equal
    - if comparing numbers to a string. The number will be converted to a string.
    - if comparing boolean. it will be converted to a number if compared with a number 
    0 - false   1  - true
*/

console.log("==============EQUALITY OPERATOR========");

console.log(5 == 5); //true
console.log(5 == "5"); //true
console.log(5 == "20"); //false
console.log(1 == true); //true
console.log(0 == false); //true

console.log("==============STRICT EQUALITY OPERATOR========");

/*
    STRICT EQUALITY ===
    will only return true if both operands have the same data type and same value.
*/
console.log(5 === "5"); //false
console.log(1 === true); //false

/*
    INEQUALITY OPERATOR != 'not equal'
    if comparing something which is true it would be false
*/

console.log("========INEQUALITY OPEATOR =========");
console.log(1 != 2); //true
console.log(1 != 1); //false

/*
    STRICT INEQUALITY OPERATOR !== 'strictly not equal'
    it will return true if both operands are strictly not equal (data type and value)
*/

console.log("========STRICT INEQUALITY OPEATOR =========");

console.log(1 !== 2); //true
console.log(1 !== 1); //false

//LOGICAL OPERATORS

// ! opreator not symbol / no
let isAbsent = false;
console.log(!isAbsent); //true

// && AND OPERATOR - both operands must be true otherwise it returns false

let chocolate = false; //available
let vanilla = false; //available

// can you buy me a chocolate ice cream AND a vanilla ice cream
console.log(chocolate && vanilla);

// can you buy me a chocolate ice cream OR a vanilla ice cream
// || OR OPERATOR - one must be true to return true, returns false if both operands are false
console.log(chocolate || vanilla);
