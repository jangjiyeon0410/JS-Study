'use strict';

/*
function describeCountry(country, population, capitalcity) {
	return `${country} has ${population} million people and it's capital city is ${capitalcity}`;
}
const description1 = describeCountry('Korea', 50, 'Seoul');
const description2 = describeCountry('Japan', 100, 'Tokyo');
const description3 = describeCountry('China', 1000, 'Beijing');
console.log(description1, description2, description3);

function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}
const percentageOfWorld2 = function (population) {
	return (population / 7900) * 100;
};

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percentage1 = percentageOfWorld3(1441);
const percentage2 = percentageOfWorld3(100);
const percentage3 = percentageOfWorld3(50);
console.log(percentage1, percentage2, percentage3);

const describePopulation1 = (country, population) =>
	`${country} has ${population} million people, which is about ${percentageOfWorld1(
		population
	)}% of the world.`;
console.log(describePopulation1('America', 100));
console.log(describePopulation1('Portugal', 10));
console.log(describePopulation1('China', 1000));

const describePopulation2 = function (country, population) {
	const percentage = percentageOfWorld1(population);
	const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
	console.log(description);
};
describePopulation2('America', 100);
describePopulation2('Portugal', 10);
describePopulation2('China', 1000);

const populations = [50, 30, 40, 70];
console.log(populations.length === 4);
const percentages = [
	percentageOfWorld1(populations[0]),
	percentageOfWorld1(populations[1]),
	percentageOfWorld1(populations[2]),
	percentageOfWorld1(populations[3]),
];
console.log(percentages);

function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

const countries = ['Japan', 'China', 'Korea', 'Vietnam', 'Thailand'];
const neighbours = [
	countries[2],
	countries[3],
	countries[countries.length - 1],
];

neighbours.push('Utopia');
neighbours.pop();
if (!neighbours.includes('Germany')) {
	console.log('Probably not a central European country :D');
}
neighbours[neighbours.indexOf['Korea']] = 'Republic of Korea';


const myCountry = {
	country: 'Korea',
	capital: 'Seoul',
	language: 'Korean',
	population: 55,
	neighbours: ['China', 'Japna', 'Vietnam', 'Thailand'],
	describe: function () {
		console.log(
			`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neibouring countries and a capital called ${this.capital}.`
		);
	},
	checkIsland: function () {
		// return (this.isIsland = this.neighbours.length === 0 ? true : false);
		return (this.isIsland = !Boolean(this.neighbours.length));
	},
};

console.log(myCountry.checkIsland());

console.log(
	`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neibouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;

myCountry.describe();
*/
