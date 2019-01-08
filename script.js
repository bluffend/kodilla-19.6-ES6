"use strict";

// task 1 - connect strings
const string1 = 'Hello';
const string2 = 'World';
const string3 = `${string1} ${string2}`;
// test
console.log(string3);

// task 2 - multiply function with missing arguments 
const multiply = (number1 = 1, number2 = 1) => (number1 * number2); 
// test 
console.log(`Multiply 3 x 4 = ${multiply(3,4)}`);
console.log(`Multiply 3 x undefined = ${multiply(3)}`);
console.log(`Multiply undefined x undefined = ${multiply()}`);

//task 3 - find average using rest parameter 
const average = (...args) => (args.reduce((accumulator, currentValue) => accumulator + currentValue) / args.length);
// test
console.log(`Average of [1,4,5,10] ${average(1,4,5,10)}`);

//task 4 - use function "average" and spread 
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const countGrades = average (...grades);
//test
console.log(`Input grades are: ${grades} and the average is ${countGrades}`);

//task 5 - destructure an array to get information out
const weirdArray= [1, 4, 'Iwona', false, 'Nowak'];
const [,, firstname,, lastname] = weirdArray;
//test 
console.log(`First name is ${firstname} and last name is ${lastname}`);