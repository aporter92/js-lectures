// Conditionals

/*
JS Conditionals allow us to make decisions and carry out actions according to those decisions.
    -Traditional if; else; and else if statements.
    -Ternaty operator
    -Switch statement
Conditionals execute a piece of code if a condition is true by default.
*/

//let myNumber;
// console.log(Boolean(myNumber))

/*if (myNumber) {
    console.log("There's something in myNumber variable")
}

/*
if (conditional) {
    fire off this block of code if above condition is true
}
*/

// If Else

//if (myNumber) {
//    console.log(`My number is ${myNumber}`)
//} else {
//    console.log(`The condition appears to be false.`)
//}

/*
if (conditional) {
    fire off this block of code if above condition is true
} else { 
    fire off this block of code if the condition is false
}
*/

// Else if & chaining multiple statements

let temp = 80;

/*if (temp > 100) {
    console.log("Global warming yo!")
} else if (temp > 60) {
    console.log("Nice summer day")
} else if (temp > 80) {
    console.log("Spring or Fall?")
} else if (temp < 60) {
    console.log("What's next, snow plows?!")
} else {
    console.log("Bruv you alright?! This is a weather app!")
}

let weekDay = "Thursday"

if (weekDay == "Wednesday") {
    console.log("Dentist appointment")
} else if (weekDay ="Thursday") {
    console.log("9 am EFA Web Dev Session")
} else if (weekDay = "Friday") {
    console.log("Weekend!!!!")
} 


// Testing multiple conditions

let myName= "Paul";
let age = "25";

if (myName == "Paul" && age == "25") {
    console.log(`Paul is lying to you. He's not ${age}`)
} else if (myName = "Danielle" && age >= 21) {
    console.log(`She's your instructor, but I don't know her age. I assume she's over 21 because she had wine last night`)
} else {
    console.log(`I'm lonely please send help`)
}

// Ternaries
/*
    A conditional statement which takes three operands:
        - a condition followed by a question mark ?
        - a truthy expresssion followed by a  colon :
        - falsey expression
    Shortcut to the if statement
*/

let lightSwitch = true;

// condition ? block of code if true : block of code if false

if (lightSwitch) {
    console.log("lights are on")
} else {
    console.log("lights are off")
}

lightSwitch ? console.log("lights are on") : console.log("lights are off")

temp = 100;

// temp >= 100 ? console.log("Am I in Florida?")
// : temp >= 80 ? console.log("Fine summer day")
// : temp >= 60 ? console.log("Spring or Fall?")
// : temp >= 40 ? console.log("What's next? Snow plows?!")
// : console.log("I asked for the temperature, not your life story!")

// Switch Statements

/*
    Switches evaluate expressions matching their expression value to a case clause.  
    Switch then executes that case statement until it is "broken"
*/

console.log("----------")

let mySwitch = false
switch(true) {
    case temp >= 100:
    case mySwitch: // allows you to nest multiple "if" switches together to check their condition
        console.log("Am I in Florida?")
        break; // prevents fall through into another "if" swicth
    case temp > 80 : 
        console.log("Fine summer day") 
        break;
    default:
        console.log("llll")  
        break;     
} 

// console.log(new Date().getDay())

switch(new Date().getDay()) {
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break                        
}

//   Challenge

// Create a variable with any number between 0-100.
// For multiples of 3, print "Fizz"
// For multiples of 5, print "Buzz"
// For multiples of 3 and 5, print "Fizz Buzz"
// If it's not multiples of 3 and 5, print the number itself.

let myNumber = 15

if (myNumber % 3 === 0) {
    console.log("Fizz")
} else if (myNumber % 5 === 0 ) {
    console.log("Buzz")
} else if (myNumber % 15 === 0) {
    console.log("Fizz Buzz")
} else {
    console.log(myNumber)
}  // I should've put % 15 first becuase it will run through them in order

// other student's example
let testNum = 56

testNum % 15 === 0 ? console.log("Fizz Buzz!")
: testNum % 5 === 0 ? console.log("Buzz")
: testNum % 3 === 0 ? console.log("Fizz")
: console.log(testNum)

