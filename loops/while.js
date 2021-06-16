// While loops

/*
    While statement creates a loop so long as the condition we've specified returns true.

    while (condition) {
        code statement
    }

    to stop a while loop from executing, the condition must at one point return false.

    */

//let count = 0

//while(count <= 100) {
//    console.log(count)
//    count +=1
//}

//while(true) {
//    console.log("this is an infinite loop without a break")
//    break
//}

// Challenge

// Fizz Buzz + Loops
// Create a loop which will iterate between numbers from 100-500

// For multiples of 3, print "Fizz"
// For multiples of 5, print "Buzz"
// For multiples of 3 and 5, print "Fizz Buzz"
// If it's not multiples of 3 and 5, print the number itself.

// Utilize standard for loop first


//for (count = 0; count<= 500 && count >= 100; count++) {
//    console.log("Fizz")
//}

for (count=100; count <= 500; count++){
    if (count % 15 == 0) console.log("FizzBuzz");
    else if (count % 3 == 0) console.log("Fizz");
    else if (count % 5 == 0) console.log("Buzz");
    else console.log(count);
}
