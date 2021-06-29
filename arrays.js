let list = ['orange', 'banana', 'oreos'];

console.log(list[1]);

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Will', 'Amira']];

console.log(typeof students)
console.log(students instanceof Array);

//console.log(students[2]);
//console.log(students[0]);


/*
CHALLENGE

! - dive into the nested array and pull the value 'Will'
! - print out "Hello Will!"
*/

//console.log(students[6][1]);

//let student = students[6][1];
//console.log(`Hello ${student}!`);

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hotdog'];

//for(foodItem of food) {
//    console.log(foodItem)
//}

food.push('Pizza'); // Appends `Pizza` to end of array
console.log('push', food);

food.splice(1, 1, 'Bananas'); // * Removes shrimp, adds bananas (postion, how many to remove, what to add)
console.log('splice', food);

food.splice(2, 0, 'Sweet Potato Pie'); // * Adds sweet potatoe pie in position 2, but doesn't remove anything
console.log('splice 2:', food);

food.pop(); // * pop removes last item in array
console.log('pop:', food);

food.shift(); // * shift removes first item in array
console.log('shift:', food); 

food.unshift('popcorn', 'steak'); // * unshift adds  to the beginning of array
console.log ('unshift:', food);

let colors = ['red', 'orange', 'yellow', 'green', 'blue'];

//for (let i = 0; i<= food.length; i++) {
 //   console.log(colors[i])
//}

//colors.forEach(color => console.log(color));

colors.forEach((color, index) => {
    console.log(color);
    console.log(index);
})

/*
CHALLENGE
! - Go look at MDN docs to remind you
! - create an aray containing movies
! - use .forEach() to list your movies
! - Add another movie at the end
! - And replace one of your existing movies with another one
*/

/*
let movies = ['Jurassic Park', 'The Fly', 'Thor Ragnorak', 'The Life Aquatic'];
movies.forEach(movie => console.log(movie));

movies.push("Grand Budapest Hotel");
console.log(movies);

movies.splice(4, 4, 'Independence Day');
console.log(movies);
*/

/*
CHALLENGE

! - First check if you are working with an array
! - using a method, flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
! - using a method, print the values of the newly arranged array
*/

let arr = [1,2,3,4,5];
console.log(arr instanceof Array);

let revArr = arr.reverse()
revArr.forEach(num => console.log(num))

