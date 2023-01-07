/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM';
let $funtion = 27;

let person = 'jonas';
let PI = 3.1415;  //일반적으로 상수는 대문자표기

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'Programmer';
let job2 = 'teacher';   //모든 변수는 알아보기 쉽게!

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year); //value 없이 변수 선언하면 자동으로 value가 undefined됨
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); //object를 반환하지만 null은 type도 value도 null임, typeof의 초기버전 버그임.

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;  //초기값 필요

var job = 'programmer';
job = 'teacher';

lasName = 'Schmedtmann';
console.log(lasName);


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x*4 = 100
x++; //x = x + 1
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <. >=, >=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 => right to left
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


// Template Literalss
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas =
	"I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regualr string...`);

console.log(
	'String with \n\
multifle \n\
lines'
);

console.log(`String
multiple
lines`);

//Cording Chalange #1, #2
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeoght = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeoght = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeoght ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

if (markBMI > johnBMI) {
	console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
	console.log(`John's BMI (${markBMI}) is higher than Mark's (${johnBMI})!`);
}


//if, else statement
const age = 15;
if (age >= 18) {
	console.log('Saraha can start driving license 🚗');
} else {
	const yearsLeft = 18 - age;
	console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2020;

let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(century);


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');

console.log('23' - '10' - 3); // (-) convert number to string	=> 두가지 타입이 섞여있어야 coercion함
console.log('23' + '10' + 3); // (+) convert string to number
console.log('23' * '2'); // -, *, / 는 스트링 타입만 있어도 자동 coercion

let n = '1' + 1; //'11'
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
	console.log("Don't spend it all ;)");
} else {
	console.log('You should het a job!');
}

let height;
if (height) {
	console.log('YAY! Height is defined');
} else {
	console.log('Height is UNDEFINED');
}


// equality operator
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)'); //=== is stric equal operator -> no coercion

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt('What is your favourite number?'));
console.log(typeof favourite);

if (favourite === 23) {
	// '23' == 23
	console.log('Cool! 23 is an amazing numner');
} else if (favourite === 7) {
	console.log('7 is also a cool number');
} else if (favourite === 9) {
	console.log('9 is also a cool number');
} else {
	console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');


// Logical Operator
const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
// 	console.log('Sarah is able to drive!');
// } else {
// 	console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
	console.log('Sarah is able to drive!');
} else {
	console.log('Someone else should drive...');
}


//Cording Challenge #3

const DolphinsAverage = (95 + 91 + 110) / 3;
const KoalasAverage = (98 + 91 + 110) / 3;

console.log(DolphinsAverage, KoalasAverage);

if (DolphinsAverage > KoalasAverage) {
	console.log("Dolphins's win");
} else if (DolphinsAverage < KoalasAverage) {
	console.log("Koalas's win");
} else if (DolphinsAverage === KoalasAverage) {
	console.log('DRAW!');
}

//BONUS 1
// 최소 100점 이상이어야 승리

if (DolphinsAverage > KoalasAverage && DolphinsAverage >= 100) {
	console.log("Dolphins's win");
} else if (KoalasAverage > DolphinsAverage && KoalasAverage >= 100) {
	console.log("Koalas's win");
} else if (DolphinsAverage === KoalasAverage) {
	console.log('DRAW!');
} else {
	console.log('Score is under 100');
}

//BONUS 2
// 최소점수 무승부에도 적용

if (DolphinsAverage > KoalasAverage && DolphinsAverage >= 100) {
	console.log("Dolphins's win");
} else if (KoalasAverage > DolphinsAverage && KoalasAverage >= 100) {
	console.log("Koalas's win");
} else if (
	DolphinsAverage === KoalasAverage &&
	DolphinsAverage >= 100 &&
	DolphinsAverage >= 100
) {
	console.log('DRAW!');
} else {
	console.log('No one wins the trophy');
}


// Switch Statement
const day = 'friday';

switch (day) {
	case 'monday': // day === 'monday'
		console.log('Plan course structure');
		console.log('Go to cording meetup');
		break;
	case 'tuesday':
		console.log('Prepare theory videos');
		break;
	case 'wednesday':
	case 'thursday':
		console.log('Write code examples');
		break;
	case 'friday':
		console.log('Record videos');
		break;
	case 'saturday':
	case 'sunday':
		console.log('Enjoy the weekend :D');
		break;
	default:
		console.log('Not a valid day!');
}

if (day === 'monday') {
	console.log('Plan course structure');
	console.log('Go to cording meetup');
} else if (day === 'tuesday') {
	console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
	console.log('Write code examples');
} else if (day === 'friday') {
	console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
	console.log('Enjoy the weekend :D');
} else {
	console.log('Not a valid day!');
}


// expression
3 * 4;
1991;
true && false && !false;

// statement
if (23 > 10) {
	const str = '23 is bigger';
}

const me = 'Jonas'; // statement
console.log(`I'm ${2037 - 1991} years old ${me}`); // me -> 'Jonas' -> expression


// Conditional (ternary) Operator (3항 연산자)
const age = 18;
age >= 18
	? console.log('I like to drink wine')
	: console.log('I like to drink water');

//a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.

const drink = age >= 18 ? 'wine' : 'water'; // ternary operator is expression, so it can be allocated right away into variable
console.log(drink);

let drink2;
if (age >= 18) {
	drink2 = 'wine';
} else {
	drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/

// Cording Cahllange #4
//팁계산하기 영수증 가격에 50~ 300 =>15% else 20%

const bill = 40;
const tip = bill * (bill >= 50 && bill <= 300 ? 0.15 : 0.2);

console.log(
	`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`
);
