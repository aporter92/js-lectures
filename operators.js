//Operators

/*
    Assignment, Arithmetic, & Comparison
        - Assignment operator assigns value to a declaration
            - denoted by =
        - Arithemtic operators perform simple math
            - Addition +
            - Subtraction -
            - Multipliction *
            - Division /
            - Exponent **
            - Modulus %
            - Math. objects to help with other operations.
        - Comparison operators compare values    
            - Equality and Strict Equality == & ===
            - Inequality and Strict Inequality =/= & ==/=
            - Greater than or less than < >
            - Greter or equal than or less or equal than >/ \<
            - AND && and OR ||
*/



//Modulus - provides remainder of Euclidean division.

console.log(25 % 5); // Return would be 0

// Math Object - allows access to more advanced mathematical equations

console.log(Math.max(5, 2, 17, 22, 97))

// Equality vs Strict Equality Operators
/*
    Equality & Strict Equality Operators
        -Return truthy or falsey value depending on a given condition
        -Equality performs type coercion on one of the values it's being compared to. For ex 5 = "5" converts the string into an integer.
        -Strict equality checks if the value and its type are the same.
*/

console.log(5 == 5) // returns true

console.log(5 === 5) // returns true

console.log(5 == "5") //returns true because of type coercion

console.log(5 === "5") // returns false because we're checking for value & value type


let x = 5;
let y = "5";

console.log(typeof x, typeof y) // same value different data type

// Inequality and Strict Inequality

console.log("-------------")
console.log(5 !== 7) // returns true ( 5 is not equal to 7)

console.log (5 !== 5) // returns true (returns false (both values are the same))
console.log("-------------")

console.log (5 !== "5") // returns false (type coercion)
console.log("-------------")

//AND|| Comparison
// Returns true if two boolean values are true
console.log(true && true)
// Returns false if either of the value is not the same
console.log(true && false)

// OR || Comparison
// Returns true if either of the values are true
console.log(true || false)
console.log(false || false)
console.log(true || true)

// Strict Inequality & Booleans !=
// Flips resulting boolean
let flippedBool = "!true";
console.log(flippedBool)
console.log("------------")

// Extra Credit How to get date in Javascript
let date = new Date
let year = date.getFullYear()
let month = date.getMonth()
month += 1 // month = month + 1 OR month = 5 + 1
let day = date.getDay()

console.log(date.toDateString())

console.log(`Today is ${day} day of ${month} of ${year}`)

// Null vs Undefines vs Not a Number

/*
    Null - empty value; a container or space for something to fill it in the future.
    Undefined - default value of a declaration.  Does not act as an empty container.
    Not a Number (NaN) - determines if a value is not a number.
*/

console.log(isNaN(123))
console.log(isNaN(0/0))
console.log(isNaN(NaN))
console.log(isNaN(Math.sqrt(-1))) // returns true because imaginary (i) number is NaN

//Challenge
/*
Silver
create 3 variables: name (str) age (int) and a city and state where you live (str). Use template literal to console log it.
*/

let myName = "Anne";
let age = "29";
let city = "Indianapolis, IN";
console.log(`My name is ${myName}. I'm ${age} years old, and I live in ${city}`)



//Challenge: Concatenation method

let concat_full = myName + " " + age + " " + city


console.log(concat_full)
let concatFullLength = concat_full.length
console.log(concatFullLength)

// Challenge

console.log (concat_full.includes("Indianapolis, IN"))
console.log(concat_full.toUpperCase())


