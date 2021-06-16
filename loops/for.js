// For Loop
/*
    A way to perform mundane, repeatable tasks quickly.  
    Loops iterate (go over) an interable (something that 
    can be gone over, such as counting from 0-100)

    ! for (start param, stop param, step param) {
        ! code applied to each step of the iteration
    !}
    */

// i++ is the same as i = i + 1
// i+=5 is the same as i = i + 5
for (let i = 0; i<= 100; i += 5) {
    // let i = 0 not needed; can use i = 0
    // doesn't have to be i, can use anything
    console.log(i)
} 

let myName = "Anne Porter"

console.log (myName.length)
console.log(myName[3])

for (symbols = 0; symbols < myName.length; symbols++) {
    console.log(myName[symbols])
}