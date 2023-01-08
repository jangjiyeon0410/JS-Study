// let country = 'Korea';
// let continent = 'Asia';
let population = 130;
// let isIsland = 'false';
let languge;

// console.log(typeof (isIsland, population, country, languge));

languge = 'english';
const country = 'Korea';
const continent = 'Asia';
const isIsland = 'false';

// const halfPopulation = population / 2;
// console.log(population++);
// const moreThanFinland = population > 6;
// const averagePopulation = population < 33;
// const description = `${country} is in ${continent}, and it's ${population} million people speak ${languge}`;
// console.log(description);

if (population > 33) {
	console.log(`${country}'s population is above average.`);
} else {
	console.log(
		`${country}'s population is ${33 - population} million below average`
	);
}

// const numNeighbours = Number(
// 	prompt('How many neighbour countries does your country have?')
// );
// if (numNeighbours === 1) {
// 	console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
// 	console.log('More than 1 border');
// } else {
// 	console.log('No borders');
// }

// 영어권 인구50이하 섬 아닌곳
if (languge == 'English' && population < 50 && !isIsland) {
	console.log(`You should live in ${country} :)`);
} else {
	console.log(`${country} does not meet your criteria :(`);
}

switch (languge) {
	case 'chinese':
	case 'mandarin':
		console.log('MOST number of native speakers!');
		break;
	case 'spanish':
		console.log('2nd place in number of native speakers');
		break;
	case 'english':
		console.log('3rd place');
		break;
	case 'hindi':
		console.log('Number 4');
		break;
	case 'arabic':
		console.log('5th most spoken language');
		break;
	default:
		console.log('Great language too :D');
}

population > 33
	? console.log(`${country}'s population is above average`)
	: console.log(`${country}'s population is below average`);

console.log(
	`${country}'s population is ${population > 33 ? 'above' : 'average'} average`
);
