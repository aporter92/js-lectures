// Classes

/*
    Templates for creating objects.  They encapsulate data with code.  JS is a heavily prototype-based OOP language. 

    Classes are considered special functions and therefore can be defined as:
        - Class Expression
        - Class Declaration
*/

// Class Declaration
// Class name should always be capitalized
// Function delarations are hoisted.  Class declarations ARE NOT.

class Teacher {
    // constructor - a class method for creation and initilization of a class object.
    constructor(name, subject, tenure, isPolyglot) {
        this.name = name; 
        this.subject = subject;
        this.tenure = tenure;
        this.isPolyglot = isPolyglot;
    }
}

// Instantiating a Class Declaration

let pNiemczyk = new Teacher("Paul", "Coding", 1, true)
pNiemczyk.subject = "Math"
//console.log(pNiemczyk)

// Creating objects for every teacher is laborous.
// Class gives us an easy template to reuse over and over.

//example of an object and it's limitations
/*
let teacher = {
    name: "Paul",
    subject: "coding",
    tenure: 1,
    isPolyglot: true
}
console.log(teacher.name)
*/

// Class Expressison

let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address =address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
    }
}

// Creating an instance of Class Expression
let parkAve401 = new House("401 N. Park Ave", 2, 2)

console.log(parkAve401)

// Class Methods
/*
    Method is a function that lives inside of a class that can be reused on any class instances.
*/
class Car {
    constructor(make, model, year, transmission) {
        this.make = make
        this.model = model
        this.year = year
        this.transmission = transmission
    }

    // Method
    greetDriver() {
        console.log(`Welcome to your ${this.year} ${this.make} ${this.model}`)
    }

    age(currentYear) {
        return currentYear - this.year
    }
}

let porsche = new Car ("Porsche", "911", 2018, "manuel")

console.log(porsche.greetDriver())
console.log(porsche.age(2021))

//CHALLENGE
/* 
Create a class object called Avengers.  iIt will have properties of name, superpower, age, isDead, keyMovie.

Create an instance of that object with the superhero name and its properties.

? Create a mehtod that console logs the name and keyMovie together.

! SPICEY MODE
! Creat a method that takes the name of the superhero and checks it against two arrays.  One with Team Cap and One with team Tony and returns which team the superheo was a part of during Civil War.
*/

class Avengers {
    constructor(name, superpower, age, isDead, keyMovie) {
        this.name = name
        this.superpower = superpower
        this.age = age
        this.isDead = isDead
        this.keyMovie = keyMovie
    }

   nameMovie () {
       return `${this.name} stars in ${this.keyMovie}`
}
    whichTeam() {
        let teamCap = ["Captain America", "Bucky", "Wanda", "AntMan", "Hawkeye"]
        let teamStark = ["Tony Stark", "Visioin", "War Machine", "Black Panther", "Black Widow"]
        if(teamCap.includes(this.name)) {
            return `${this.name} is Team Captain`
        }
        else if (teamStark.includes(this.name)) {
            return `${this.name} is Team Stark`
        }
        else {
            return `${this.name} is not in our database.`
        }
    }
}
let Cap = new Avengers ("Captain America", "agility, strength, speed, endurance", 93, true, "Captain America")
console.log(Cap)

let blackWidow = new Avengers("Natasha Romanoff", "ninja", 32, true, "Iron Man 2")

console.log(Cap.nameMovie())
console.log(Cap.whichTeam())





// Inheritance
//Extends
/*
    Extends cretes a class tht is a child of another class.
    Syntax:
        class ChildClass extends ParentClass {
            constructor(params of parent & child) {
                super(params of parent)
                this.childProperty = childProperty
            }
        }
*/

class Options extends Car {
    constructor(make, model, year, transmission, isLeather, isComfortAccess, wheelsPowered) {
        super(make, model, year, transmission)
        this.isLeather = isLeather
        this.isComfortAccess = isComfortAccess
        this.wheelsPowered = wheelsPowered
    }
    isCPO(currentYear){
        let result = currentYear - this.year
        return result >= 6 ? `Your ${this.model} is out of warranty` : `Your warranty is still good.`
    }
}

let bmw = new Options("BMW", "M5", 2016, "DCT", true, true, "RWD")
console.log(bmw)
console.log(bmw.isCPO(2021))

class DateFormatter extends Date{
    getFormattedDate() {
        const months = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug"]
        return `${this.getDate()} - ${months[this.getMonth()]} - ${this.getFullYear()}`
    }
}

console.log(new DateFormatter("June 29, 2021 12:15:00").getFormattedDate())

// CHALLENGE
/*
 Extend the House class with one called Sale.  Slae shuld have properties of  appraisalValue(Int), listPrice(Int), agent(Str), and isListed(bool)

Create a method which calculates the difference between appraisalValue and the listPrice.  Add a conditional that will check if list is 20% higher than appraisal.  If it is, say it's not worth it.  If it isn't say, its a good value. 

the return shuld also include the difference between the two values.

let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address =address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
    }
}
*/



class Sale extends House {
    constructor (address, bedrooms, bathrooms, appraisalValue, listPrice, agent, isListed) {
        super(address, bedrooms, bathrooms)
        this.appraisalValue = appraisalValue
        this.listPrice = listPrice
        this.agent = agent
        this.isListed = isListed
    }

    calcDiff() {
    if (this.appraisalValue <= this.listPrice) {
       let totalDiff = this.listPrice - this.appraisalValue
       let percentage = this.listPrice/this.appraisalValue
       if (percentage >= 0.2 && totalDiff >0) {
           return `the difference is ${totalDiff} and it's not worth it`
       } else if (percentage < 0.2 && totalDiff >0) {
           return `the difference is ${totalDiff} and it's a good deal`
       }
    } else {
        return `You idiot! Are you seriously listing your house for less than it's worth?`
    }
}
}
let reidPlace422 = new Sale("422 Reid Place", 2, 2, 40000, 45000, "Bob", true )
console.log(reidPlace422)
console.log(reidPlace422.calcDiff())
