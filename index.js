// Part 1 Math problem

const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

const isSum50 = (n1 + n2 + n3 + n4) == 50;
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

console.log(isValid);
console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`)

// Check if all numbers are divisible by 5. Cache the result in a variable.

const isDivisibleBy5 = (n1/5) + (n2/5) + (n3/5) + (n4/5) == 10 
 
console.log(isDivisibleBy5);
console.log(`The four numbers are divisible by 5: ${isDivisibleBy5}.`)

//Check if the first number is larger than the last. Cache the result in a variable.

let isFirstLarger = n1 > n4

console.log(isFirstLarger);
console.log(`The first number is larger than the 4th number: ${isFirstLarger}.`)

// Accomplish the following arithmetic chain:

// Subtract the first number from the second number.
let num = n2 - n1
console.log(num);
console.log(`The second number minus the first number is equal to: ${num}.`)
// Multiply the result by the third number.
let x = num * n3
console.log(x);
// Find the remainder of dividing the result by the fourth number.
let y = x/n4
console.log(y);
console.log(`The ramainder of dividing the num value by the fouth number is: ${y}. `)
// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. 
// Rename the variable as appropriate.

// const isOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------

// Part 2: Practical Math

// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?

let dis = 1500
let bug = 175
let costPerG = 3

