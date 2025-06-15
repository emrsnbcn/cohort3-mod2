let fruits = ["apple", "mango", "banana"];
console.log(fruits[0]);
console.log(fruits.length); //length of the list/array
console.log(fruits[fruits.length - 1]); //access the last item

console.log(fruits[0].length);

/*
Common array methods
push() add item to end
pop() remove item from end
shift() remove from start
unshift() add an item at the start
*/

console.log(fruits);
fruits.push("papaya");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Kiwi");
console.log(fruits);

//FOR LOOP TO ITERATE ON THE GIVEN LIST OF FRUITS
for (let i = 0; i < fruits.length; i++) {
	console.log(i, fruits[i]);
}

console.log("============");

//FOR OF LOOP
// for(let singular of plural)
for (let x of fruits) {
	console.log(x);
}

// FOREACH is a method for an array to iterate on the given list. and it doesnt return any value.
console.log("============");

// parameters (element, index, array)
fruits.forEach(function (fruit, idx, array) {
	console.log(fruit);
});

console.log("==============");

//FILTER
// let output = fruits.filter(function (fruit, idx) {
// 	return fruit.length >= 5;
// });
// console.log(output);

//using arrow functions
let output = fruits.filter((fruit) => fruit.length >= 5);
console.log(output);

//OBJECT
let post = {
	title: "Hello World",
	tags: ["intro", "welcome"],
	author: {
		name: "Howie",
		age: 50,
	},
};

console.log(post.author.name);
console.log(post.tags[1]);

/*
    Mini Activity
    1. Create an array of 5 of your favorite movies.

    2. Log the first and last movie.

    3. Use push() to add one, and pop() to remove one.

    4. Create an object profile with your name, age, and an array of 3 hobbies.

    5. Log your second hobby.
*/

const favoriteMovies = [
	"in time",
	"harry potter",
	"the avengers",
	"IT",
	"Batman",
];
console.log(favoriteMovies[0]);
console.log(favoriteMovies[favoriteMovies.length - 1]);

favoriteMovies.push("ant man");
favoriteMovies.pop();
console.log(favoriteMovies);

let profile = {
	name: "Emerson",
	age: 42,
	hobbies: ["Basketball", "Boxing", "Golf"],
};

console.log(profile.hobbies[1]);
