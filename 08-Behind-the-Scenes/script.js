'use strict';

/*
function calcAge(birthYear) {
	const age = 2037 - birthYear;

	function printAge() {
		let output = `${firstName}, You are ${age}, born in ${birthYear}`;
		console.log(output);

		if (birthYear >= 1981 && birthYear <= 1996) {
			var millenial = true;

			// Creation NEW variable with same name as outer scope's variable
			const firstName = 'Steven';
			// Reassigning outer scope's variable
			output = 'NEW OUTPUT';

			const str = `Oh and you're a millenial, ${firstName}`;
			console.log(str);

			function add(a, b) {
				return a + b;
			}
		}
		// console.log(str);
		console.log(millenial);
		// console.log(add(2, 3));
		console.log(output);
	}
	printAge();

	return age;
}

const firstName = 'Jiyeon';
calcAge(1995);
// console.log(age);
// printAge();

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'jiyeon';
let job = 'teacher';
const year = 1995;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpre(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
	return a + b;
}

const addExpre = function (a, b) {
	return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
	console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;


// console.log(this);

const calcAge = function (birthYear) {
	console.log(2037 - birthYear);
	// console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
	console.log(2037 - birthYear);
	// console.log(this);
};
calcAgeArrow(1995);

const jiyeon = {
	year: 1995,
	calcAge: function () {
		console.log(this);
		console.log(2037 - this.year);
	},
};

jiyeon.calcAge();

const matilda = {
	year: 2017,
};

matilda.calcAge = jiyeon.calcAge;
matilda.calcAge();

const f = jiyeon.calcAge;
f();

const firstName = 'Matilda';

const jiyeon = {
	//object is not a code block. Object literel
	firstName: 'jiyeon',
	year: 1995,
	calcAge: function () {
		// console.log(this);
		console.log(2037 - this.year);

		// Soulution 1
		// const self = this;
		// const isMillenial = function () {
		// 	console.log(self);
		// 	console.log(self.year >= 1981 && self.year <= 1996);
		// 	// console.log(this.year >= 1981 && this.year <= 1996);
		// };

		// Soulution 2
		const isMillenial = () => {
			console.log(this);
			console.log(this.year >= 1981 && this.year <= 1996);
			// console.log(this.year >= 1981 && this.year <= 1996);
		};

		isMillenial();
	},

	greet: () => {
		console.log(this);
		console.log(`Hey ${this.firstName}`);
	},
};

jiyeon.greet();
jiyeon.calcAge();

// Argumnet keyword
const addExpre = function (a, b) {
	console.log(arguments);
	return a + b;
};
addExpre(2, 5);
addExpre(2, 5, 3, 12);

var addArrow = (a, b) => {
	console.log(arguments);
	return a + b;
};
addArrow(2, 5, 8);


let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
	name: 'jiyeon',
	age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
*/

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
	firstNmae: 'Jessica',
	lastName: 'Williams',
	age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
	firstNmae: 'Jessica',
	lastName: 'Williams',
	age: 27,
	family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
