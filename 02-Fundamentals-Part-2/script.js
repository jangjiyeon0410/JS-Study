'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

const interface = 'Audio';
const private = 534; // 자바스크립트에 내장된 단어 에러로 막아줌


// Function
function loggeer() {
	console.log('My name is Jiyeon');
}

// calling / running / invoking function
loggeer();
loggeer();
loggeer();

function fruitProcessor(apples, oranges) {
	// Variables that defines the input data when function is executed.
	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function Declacration
function calcAge1(birthYear) {
	return 2037 - birthYear;
}
const age1 = calcAge1(1995);

// Function expression
const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
};
const age2 = calcAge2(1995);
console.log(age1, age2);


// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear; //expression that implicit return
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2037 - birthYear;
	const retirement = 65 - age;
	// return retirement;
	return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1995, 'Jiyeon'));
console.log(yearsUntilRetirement(1980, 'Bob'));


function cutFruitPieces(fruit) {
	return fruit * 3;
}

function fruitProcessor(apples, oranges) {
	// Variables that defines the input data when function is executed.
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange`;
	return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
	return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
	const age = calcAge(birthYear);
	const retirement = 65 - age;

	if (retirement > 0) {
		return retirement;
		console.log(`${firstName} retires in ${retirement} years`); //returen immediatly exit function. This console.log can't be reached.
	} else {
		console.log(`${firstName} has aleady retired`);
		return -1;
	}
};

console.log(yearsUntilRetirement(1995, 'Jiyeon'));
console.log(yearsUntilRetirement(1950, 'Mike'));


//Cording Challenge #1

//새로운 규칙 추가, 각 팀의 3개의 점수 평균 계산, 다른 팀 점수의 2배 이상이어야 승리 그렇지 않으면 모두 승리 x

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(85, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
	if (avgDolphins >= avgKoalas * 2) {
		console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
	} else if (avgDolphins * 2 <= avgKoalas) {
		console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
	} else {
		console.log('No team wins');
	}
};
checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends); //literal sentence

const year = new Array(1991, 1984, 1995, 1919);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // The last data of array

friends[2] = 'Jay';
console.log(friends);
// friends = ['bob', 'alice', 'ji'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 'teacher', 2037 - 1995, friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthyear) {
	return 2037 - birthyear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
	calcAge(years[0]),
	calcAge(years[1]),
	calcAge(years[(years, length - 1)]),
];
console.log(ages);
*/

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); //type corecion X

if (friends.includes('Steven')) {
	console.log('You have a friend called Steven');
}
