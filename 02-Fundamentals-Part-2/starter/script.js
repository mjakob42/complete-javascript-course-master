'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :-)');

const interface = 'Audio';
*/

/*
// functions
function logger() {
    console.log('My name ist Jonas')
}

// invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuise = fruitProcessor(5, 0);
console.log(appleJuise);

const appleOrangeJuice = fruitProcessor(21, 4);
console.log(appleOrangeJuice);

const num = Number('23');

*/

/*
// Function declaration
function calcAge1(birthYear) {
    return 2025 - birthYear;
}
const age1 = calcAge1(1971);

// Function expression
const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
}
const age2 = calcAge2(1971);
console.log(age1, age2)
*/



/*
// Arrow function
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1971);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 67 - age;
    // return retirement
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1971, 'John'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/


/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*
const calcAverage = (round1, round2, round3) => (round1 + round2 + round3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log(`The winner are Dolphins with ${avgDolphins} vs ${avgKoalas}`)
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`The winner are Koalas with ${avgKoalas} vs ${avgDolphins}`)
    } else {
        console.log(`No team wins...`)
    }
}

checkWinner(scoreDolphins, scoreKoalas);
*/

























































/*
const fried1 = 'Michael';
const fried2 = 'Steven';
const fried3 = 'Peter';

const frieds = ['Michael', 'Steven', 'Peter'];
*/

/*
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15
    } else {
        return bill * 0.2
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);
*/













































































































































/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1971,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicence: true,
    calcAge: function() {
        this.age = 2025 - this.birthYeah;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${this.hasDriverLicence? 'a': 'no'} drivers's license`;
    }
};
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
console.log(jonas.getSummary())
*/


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
}

mark.calcBMI();
john.calcBMI();

console.log('mark:' + mark.bmi);
console.log('john:' + john.bmi);
console.log(`${john.fullName}'s BMI (${john.bmi}) is ${john.bmi > mark.bmi? 'higher': 'lower'} than ${mark.fullName}'s (${mark.bmi})`)















