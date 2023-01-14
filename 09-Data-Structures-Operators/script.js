'use strict';

// Data needed for a later exercise
const flights =
	'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},

	orderDelivery: function ({
		starterIndex = 1,
		mainIndex = 0,
		time = '20:00',
		address,
	}) {
		// destruct 안될 수 있으니 디폴트값 주기 (객체 않에 starterIndex 속성이 없을 경우, 디폴트 값을 1로 줘라.)
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${address} at ${time}`
		);
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(
			`Here is yout delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
		);
	},
};

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
/*
/////////////////////////////////////
// The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

// const newArray = [1, 2, arr];
const newArray = [1, 2, ...arr];
console.log(newArray);

console.log(...newArray); // == console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // spread operator 는 destructing 하는 것과 비슷해보이지만, !변수!를 새로 만들지 않음
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, mpas, sets. NOT objects
const str = 'jonas';
const letters = [...str, ' ', 'S.']; // ['j', 'o', 'n', 'a', 's', ' ', 'S.'] => string도 spread 됨
// building array 할 때나, 함수에 값을 넘길때만 사용 가능함 (+로그찍을때?)
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`)

// Real-world example
const ingredients = [
	// prompt("Let's make pasta! Ingredient 1?"),
	// prompt('Ingredient 2?'),
	// prompt('Ingredient 3?'),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundeIn: 1998, ...restaurant, founder: 'Guisepee' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


restaurant.orderDelivery({
	// 함수의 인자로 4개를 보낸게 아니라 객체 하나만 보냄 => 이 객체를 함수를 call 하면서 자동으로 destructing 함. 속성의 순서와 함수 파라미터의 순서는  상관 없음. 알아서 속성값을 찾아서 인자로 데이터 입력.
	time: '22:30',
	address: 'Via del Sole, 21',
	mainIndex: 2,
	starterIndex: 2,
});
restaurant.orderDelivery({
	address: 'Via del Sole, 21',
	starterIndex: 3,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
	name: restaurantName,
	openingHours: hours,
	categories: tags,
} = restaurant; // 속성의 키값을 새로 줌
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // syntaxError => () 감싸줌
console.log(a, b);

// Nested objects
const {
	// const { fri } = openingHours;
	// console.log(fri);
	fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


///////////////////////////////////
// Data destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]]; // one array in another array
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
