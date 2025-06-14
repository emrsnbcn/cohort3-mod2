/*
FOR LOOP

syntax: 
for(expression1, expression2, expression3) {
    //code to execute.
}

expression1 = starting point
expression2 = condition
expression3 = increment / decrement ++ or --
++ plus 1
-- minus 1
*/

for (let i = 0; i <= 5; i += 2) {
	console.log(i);
}

console.log("================");

for (let i = 5; i > 0; i--) {
	console.log(i);
}

console.log("================");

let fruits = ["apple", "mango", "banana"];

fruits[0];

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

console.log("========= WHILE LOOP ========");

/*
    a while loop is a type of loop that runs as long as the condition is true (it might cause an infinite loop)
*/

let x = 0;

while (x < 5) {
	console.log(x);
	x++;
}

while (false) {
	console.log("you wont see this");
}

console.log("==== do while loop =====");
/*
same with while loop as long as the condition is true it keeps running. If the condition is false it will run atleast once.
*/
do {
	console.log("see me once");
} while (false);

let y = 5;

do {
	console.log(y);
	y++;
} while (y < 20);

// is it possible to stop your loop at a certain point? - yes

console.log("===================");
for (let i = 1; i <= 10; i++) {
	if (i === 3) continue;
	console.log(i);
	if (i === 7) break;
}
