/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName ="Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jona_matilda = "JM"
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher'; 

console.log(myFirstJob);

let country = 'Mexico';
let continent = 'North America';
let population = '129';
console.log(country);
console.log(continent);
console.log(population);
/////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'jonas');


javascriptIsFun = 'YES!';

console.log(typeof javascriptIsFun);


let year;
console.log(year);
console.log(typeof year);

year = 1991;

console.log(typeof year);

console.log(typeof null);





let age = 30;
age = 31;

console.log(age);

const birthYear = 1991;
birthYear = 1990;
 const note: immutable variable- variable that cannot be mutated


var job = 'programmer';
job = 'teacher';


console.log(job);


lastName = 'Schmedtmann';
console.log(lastName);

*/
/*
///////////////////////////////////////////////
// Basic Operators
// Math Operators 

const now = 2037;
const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;

console.log(ageJonas, ageSarah, );

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 

// Math operators
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators 
let x = 10 + 5; // 15 
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100 
x ++; // x = x + 1 
x--;
x--;
console.log(x); 


// Comparison operators 
console.log(ageJonas < ageSarah); // >, <, >=, <=, 
console.log(ageSarah >= 18);


const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/


/*
const now = 2037;
const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;

console.log(now - 1991 > now - 2018);

console.log( 25 - 10 - 5); 

let x, y;
 
x = y = 25 - 10 - 5;

 console.log(x , y );

 const averageAge = (ageJonas + ageSarah) / 2 
 console.log(ageJonas, ageSarah, averageAge);

 */

 
 /*const massMark = 78;
 const heightMark = 1.69;
 const massJohn = 92;
 const heightJohn = 1.95

 const massMark = 95;
 const heightMark = 1.88;

 const massJohn = 95;
 const heightJohn = 1.76;

 const BMIMark = massMark / heightMark ** 2;
 const BMIJohn = massJohn / (heightJohn * heightJohn);
 const markHigherBMI = BMIMark > BMIJohn;
 console.log(BMIMark, BMIJohn, markHigherBMI);
 

//////////////////////////////////
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
//double quotes used when apostrophes are present 
const jonas = " I'm " + firstName + ', a ' + (year - birthYear ) + ' years old ' + job + ' ! ';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(jonasNew);

console.log(`Just a regular string....`);


console.log('String with \n\
multiple \n\
lines \n\
');

console.log(`String
multiple
lines`);





const age = 19;
const isOldEnough = age >= 18;

if (age >= 18) {
console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century; 

if (birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}

console.log(century);


*/


const massMark = 78;
 const heightMark = 1.69;
 const massJohn = 92;
 const heightJohn = 1.95


 //const massMark = 95;
// const heightMark = 1.88;

// const massJohn = 85;
// const heightJohn = 1.76;

 const BMIMark = massMark / heightMark ** 2;
 const BMIJohn = massJohn / (heightJohn * heightJohn);
 console.log(BMIMark, BMIJohn,);

 if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark})is higher than John's! (${BMIJohn})`)
 } else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's ${BMIMark}) !`)
 }

