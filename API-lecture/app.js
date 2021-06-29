// API Promises Fetch & Asynchronous Programmung

// API
/*
    Application Programming Interface
        - Code that communicates our client requests with the server
        - The server then sends out responses
        - Done using HTTP Requests
    HTTP Requests
        - Action to be performed on a given resource
        - Occurs between client and server
        - Client sends a request
            - GET
            - POST
            - PUT
            - DELETE
        - Server sends a response back
            - Response body
            - Status code
        - Requires a URL, which is a route to access info
*/

// Asynchronous Programming
/*
    - Allows our code to run concurrently with other requests, including responses we wait on from an API.
    - Fetch() method is an asynchronous method, and is part of the browser window, not JavaScript (will not run on Node.js)
*/

function standardFunction() {
    return console.log("Standard Function")
}
standardFunction()

async function asyncFunction() {
return console.log("This is a promise")
}

asyncFunction()

async function howAsyncWorks() {
    setTimeout(() => {
        console.log("which one hits first?")
    },3000);
}
howAsyncWorks()

function getData() {
    setTimeout(() => {
        return "some data"
    }, 3000);
}
let data = getData()
console.log(data)
// Callbacks are functions that get executed at the conclusion of asynchronous processes

// Promises
/*
    Promise represents a value that is unknown when the promise is created but represents the eventual fulfilled value or rejection
    Three states:
        - Pending: initial state (not fulfilled nor rejected)
        - Fulfilled: completed successfully
        - Rejected: Operation failed
    */

let p = new Promise((resolve, reject) => {
    let a = 1 + 3
    if (a === 2) {
        resolve("succeeded")
    } else {
        reject ("failed")
    }
})
console.log(p)
// .then is a resolve to the promise
// .then resolve takes a method with a single param
p.then((message) => console.log("this is in the then " + message))
p.catch((message) => console.log("this is the catch " + message))

//could write it this way instead
p.then((message) => {
    console.log("this is in the then " + message)
}) .catch ((message) => {
    console.log("this is the catch " + message)
})

// Error Handling
/*
    Try, ctch, throw, and Finally code blocks
    - They handle only runtime errors
    - a way to handle information and their errors without breaking your entire application
*/

let boolean = true

try {
    // try tests a block of code
    console.log("start of the try block" + boolean)
} catch(err) { 
    // catch handles our error
    console.log("error has occured" + err)
} finally {
    // execute code after try and catch
    console.log("this code always runs. an exit out of try /catch")
}

// custom errors

let json = `{"age": 30}`

try {
 let user = user.json
 if (! user.name) {
     throw new SyntaxError("Incomplete data: no name")
 }
} catch(err) {
    console.log("JSON Error: " + err)
}



if(boolean) {
    console.log("true")
} else {
    console.log("false")

}


        /*
const baseURL = `https://api.spacexdata.com/v2/rockets`

const searchForm = document.querySelector("form")
const spaceShips = document.querySelector("ul")
const button = document.querySelector("#submit")
console.log(button)

button.addEventListener("click", fetchSpace)

function fetchSpace(event) {
    event.preventDefault()
    fetch(baseURL)
    .then(response => {
        //console.log(response)
        return response.json()
    })
    .then(json => {
        //console.log(json)
       // displayRockets(json)
    })
}

//fetchSpace()

function displayRockets(rockets) {
// console.log(`Results: ${rockets}`)
//rockets.forEach(r => {
   let rocket = document.createElement("li")
    rocket.innerText = r.name
   spaceShips.appendChild(rocket)
//})

rockets.forEach(r => {
    let rocket = document.createElement("tr")
    let rocketName = document.createElement("td")
    let rocketCost = document.createElement("td")

    rocketName.innerText = r.name
    rocketCost.innerText = r.cost_per_launch
    
    spaceShips.append(rocket)
    rocket.appendChild(rocketName)
    rocket.appendChild(rocketCost)
})
}

// 3 steps to build DOM object
/*
1. create your child element
2. specify properties, attributes, etc. of your child element
3. append your child element to it's parent element
*/