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
let bugt = 175
let costPerGallon = 3
let speedAt55 = 55
let speedAt60 = 60
let speedAt75 = 75
let milesPerGallonAt55 = 30
let milesPerGallonAt60 = 28
let milesPerGallonAt75 = 23
let gallonsAt55 = dis/milesPerGallonAt55
let gallonsAt60 = dis/milesPerGallonAt60
let gallonsAt75 = dis/milesPerGallonAt75
let IsEnoughBudget = x
let timeOfTripAt55 = dis/speedAt55
let timeOfTripAt60 = dis/speedAt60
let timeOfTripAt75 = dis/speedAt75
let budgetAt55 = costPerGallon*gallonsAt55
let budgetAt60 = costPerGallon*gallonsAt60
let budgetAt75 = costPerGallon*gallonsAt75


console.log(`The gallons of fuel you need if you travel 55/hr at 30miles/gallon is: ${gallonsAt55}.`)         
console.log(`The gallons of fuel you need if you travel 60/hr at 28miles/gallon is: ${gallonsAt60}.`)   
console.log(`The gallons of fuel you need if you travel 75/hr at 23miles/gallon is: ${gallonsAt75}.`)   
console.log(`The time the trip takes in hours if you travel 55/hr is: ${timeOfTripAt55} hours.`)
console.log(`The time the trip takes in hours if you travel 60/hr is: ${timeOfTripAt60} hours.`)
console.log(`The time the trip takes in hours if you travel 75/hr is: ${timeOfTripAt75} hours.`)
console.log(`The budget for 55m/hr is: $ ${budgetAt55}.`)
console.log(`The budget for 60m/hr is: $ ${budgetAt60}.`)
console.log(`The budget for 75m/hr is: $ ${budgetAt75}.`)

if(budgetAt55>bugt){
    console.log("The budget is not enough to cover the fuel expense.")
}
else {
    console.log("The budget is enough to cover the fuel expense.")
}

if(budgetAt60>bugt){
    console.log("The budget is not enough to cover the fuel expense.")
}
else {
    console.log("The budget is enough to cover the fuel expense.")
}
if(budgetAt75>bugt){
    console.log("The budget is not enough to cover the fuel expense.")
}
else {
    console.log("The budget is enough to cover the fuel expense.")
}



