/*
control structure 

conditional logics

if - else
syntax: 
if(condition / expression) {
    // the code here will execute if the condition is true
} else {
    // the code here will execute if false
}
*/

let trafficStop = "blue";

if (trafficStop === "green") {
	console.log("You can go!");
} else if (trafficStop === "yellow") {
	console.log("You should slow down");
} else if (trafficStop === "blue") {
	console.log("you should jump");
} else {
	console.log("You should stop!");
}

// trafficStop === "green"
// 	? console.log("You must go")
// 	: trafficStop === "blue"
// 	? console.log(" you must jump")
// 	: trafficStop === "yellow"
// 	? console.log("You should slow down")
// 	: console.log("You should stop");

//TERNARY OPERATOR THIS IS A SHORTHAND FOR IF-ELSE
// syntax: condition ? true : false

let age = 42;
age > 18 ? console.log("you can enter") : console.log("you cannot enter");

//Using the if - else & else if conditions
let grade = 90;

// if (grade < 60) {
// 	console.log(" you failed");
// } else if (grade >= 61 && grade <= 70) {
// 	console.log("you are fair");
// } else if (grade >= 71 && grade <= 80) {
// 	console.log("you are good");
// } else if (grade >= 81 && grade <= 90) {
// 	console.log("you are excellent");
// } else if (grade >= 91 && grade <= 100) {
// 	console.log("you are execellent +");
// } else {
// 	console.log("Invalid Grade");
// }

//if your code has only 1 line to execute.

if (grade < 60) console.log("you failed");
else if (grade >= 61 && grade <= 70) console.log("you are fair");
else if (grade >= 71 && grade <= 80) console.log("you are good");
else if (grade >= 81 && grade <= 90) console.log("you are excellent");
else if (grade >= 91 && grade <= 100) console.log("you are execellent +");
else console.log("Invalid Grade");

/*
    if the grade is below 60 console.log('You failed')
    if the grade is between 60-70 console.log('You are Fair')
    if the grade is 71-80 console.log('You are Good')
    if the grade is 81-90 console.log('You are Excellent')
    if the grade is 91-100 console.log('You are Excellent +')
*/
