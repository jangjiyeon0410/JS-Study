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
*/

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
