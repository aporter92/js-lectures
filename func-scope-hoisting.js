// Functions
/*
    Function is a block of code that can take in parameters (door), perform an action, and return the result of that action.
    There are two types of functions:
        - Function declaration
        - Function expression
            - arrow functions
    Functions have a default return statement of undefined unless otherwise specified.
    */

// Function Declaration

/*
    Declarations are hoisted.  This is their template.
    function functionName(parameter) {
        block of code to be run
        return statement (not needed)
    }
*/

function funDeclaration() {
    //console.log("This is a function declaration")
    return "This is a function declaration"
}

// Function will not run until it is called. Calling = Invoking.
// Parentheses immediately invoke the function.
// funDeclaration()

funDeclaration()

//let result = funDeclaration()
//    console.log(result)

// Functions can have 0-infinite amount of parameters.
// Parameters act as doors to ler arguments inside of the function.

function greetUser(name) {
    return `Hello ${name}`
} 
let userName1 = "Kinsey"
let userName2 = "Marshall"
let userName3 = "Jessica"

console.log(greetUser(userName1))
console.log(greetUser(userName2))
console.log(greetUser(userName3))

// Function Expresssion
/*
Function Expression utilizes a variable as a placeholder.
Function expression is not hoisted.
*/

let myDog = function(name, breed) {
    console.log(`${name} is a ${breed}`)
}

console.log(myDog("Bentley", "Olde English Bulldog"))

// Arrow Function
/*
    Introduced in ES6
    More concise way of writing functions
    Arrow functions are created using function expression ONLY
*/

// Concise Body Function
// Can only have one parameter if it's not enclosed by ( )
let greeting = (name, age) => console.log(`Hello ${name} ${age}`)

greeting("Paul", 25)

// Block Body Arrow Function

let sendEmail = (email, name) => {
    return `Hello ${name}:
    
    We have been trying to reach you about your car's extended warranty.
    
    Is this email, the correct email for you? ${email}
    
    Sincerely,
    
    Annoying people.`
}

console.log(sendEmail("dljfdfjdlkh@elevenfifty.org", "Paul"));

// Immediately Invoked Function Execution
/*
    Function declarations that have no name and are immediately invoked.
*/

(function () {
console.log("IIFE")
})();

// Function return statements
// Must always return only one value
function returnFun(x, y) {
    // return 2,5 returns 5 because return must only have one value
    return [x, y]
    //let mySet= new Set
    //mySet.add(x)
    //mySet.add(y)
    //return mySet
}

console.log(returnFun(2, 5))

// Challenge
// Create a function declaration named tipCalculator which takes the pre-tax bill, the sales tax, and the tip percentage and returns the tip amount.


function tipCalculator(bill, tax) {
    let totalTip = .25 * (bill + tax);
    return totalTip;
}

console.log(tipCalculator(50, 3.5))

// other student version (with tip not set)

//function tipAmount(bill, tax, tipPercent) {
 //   let tax = bill * (salesTax/100)
 //   let totalBill = bill + taxAmt
 //   let totalTip = totalBill * (TipPercent/100)
 //   return totalTip
//}

// Extra spicy Challenge
/*
Create a function of your choice (Declaration or Expression) named capitalizeName which takes one parameter.  It then capitalizes the first letter of the name and returns the full name to you.
*/

//my attempt
//function capitalizeName (myName) {
//    return myName.toUpperCase("anne porter")
//}

//console.log(myName)

//better attempt
function capName(name) {
    // console.log(lowerName)
    //! these console.logs allow us to see every step of the way
    let lowerName = name.toLowerCase()
    console.log(lowerName)
    let fLetter = lowerName[0].toUpperCase()
    console.log(fLetter)
    return fLetter + lowerName.slice([1])
}

console.log(capName("anne"))

// Extra spicy challenge
// create a function which reverses a string using recursion.

//function revStr(str) {
 //   if (str == "") {
 //       return "";
//    } else {
//        return revStr(str.substr(1) + str.charAt(0))
//}
//}

revStr("Anne")