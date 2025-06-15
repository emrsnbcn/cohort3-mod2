// FUNCTIONS AND SCOPES

/*
    How to write the function:

    function functionName() {
        code to execute
    }
    How to run or execute a function:
    functionName()

    The parenthesis/bracket () at the function definition is what we call parameter/s

    The parenthesis/bracket () at the function execution is what we call argument/s

*/

function sayHello(firstName, age) {
	console.log("Hello " + firstName + " my age is " + age);
}

sayHello("John", 42, "message here");

function add(a, b) {
	return a + b;
}

let result = add(5, 2); //7
console.log(result);

//FUNCTION EXPRESSIONS

const multiply = function (a, b) {
	return a * b;
};

let result3 = multiply(4, 5);
console.log(result3);

let nickname = "Jane";
function sayHi(nickname) {
	console.log("Hi " + nickname);
}

sayHi(nickname);

let x = 5;
function test() {
	var x = 20;

	console.log(x);
}

test();

console.log(x);

function square(num) {
	return num * num;
}

console.log(square(5)); //25
console.log(square(6)); //36

// function isEven(num) {
// 	if (num % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

const isEven = (num) => num % 2 === 0;

console.log(isEven(4)); //true
console.log(isEven(5)); //false

// function toCelsius(fahrenheit) {
// 	return (fahrenheit - 32) * (5 / 9);
// }

const toCelsius = (fahrenheit) => (fahrenheit - 32) * (5 / 9);

console.log(toCelsius(235));

// function isAdult(age) {
// 	if (age >= 18) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

const isAdult = (age) => age >= 18;

console.log(isAdult(18)); //true
console.log(isAdult(17)); //false

//ARROW FUNCTIONS (syntactic sugar)

/*
    function subtract(a, b) {
        return a - b
    }
*/

//you dont need the 'return' keyword if you only have one line of code to execute

//the moment you put curly brackets means you want to put multiple lines of code, therefore you need to type the 'return' keyword

const subtract = (a, b) => a - b;

console.log(subtract(10, 2));
