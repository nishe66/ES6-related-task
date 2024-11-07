// 1. write a function that declares variables using var, let and const. Attempt to reassign each variable within the same function scope, and observe the outcome.Explain any differences in behavior.
function decVar() {
  var a = 23;
  let b = 30;
  const c = 50;

  a = 45;
  b = 56;
  
  // (Uncommenting will cause error)
  // c = 60; // Error:Assignment to constant variable cause const variables cannot be reassigned.
  
  console.log(`var can be reassigned: ${a}`); 
  console.log(`let can be reassigned: ${b}`);
  console.log(`const can not be reassigned: ${c}`);
}
decVar();

// output:
// var can be reassigned: 45
// let can be reassigned: 56
// const can not be reassigned: 50
// -----------------------------------------------------------------------------------------
// 2. create a function named greet that takes two parameters: name and greeting, with greeting having a default value of "Hello". If no greeting is provided, the function should output "Hello,[name]!"

function greet (name, greeting = "Hello"){
   console.log(`${greeting},${name}!`);
   
}
greet("Alice")

// output:Hello,Alice!

// -----------------------------------------------------------------------------------------
// 3. Using template literals, write a function that takes three parameters: firstName, lastName, and age, returns a string in the format: "My name is [firstName] [lastName] and I am [age] years old"

function personInfo(firstName, lastName, age){
      return `My name is ${firstName} ${lastName} and I am ${age} years old`;
      
}
console.log(personInfo("John", "Doe", 29));

// output: My name is John Doe and I am 29 years old
// -----------------------------------------------------------------------------------------


// 4. Write an arrow function named add that takes two parameters and returns their sum. Rewrite it as a one-line function without using the return keyword.

 const add = (num1, num2) => num1 + num2;
 console.log(add(23, 34));

//  output: 57
// -----------------------------------------------------------------------------------------
// 5. Write a function that accepts any number of arguments and returns the maximum value among them using the spread operator. Test it with varying numbers of arguments.
 
 function checkMaxValue (...numbers){
     return Math.max(...numbers)
 }
 console.log(checkMaxValue(4, 6, 8, 25));

//  output: 25
// -----------------------------------------------------------------------------------------


// 6.Create a function mergeArrays that takes two arrays as arguments and returns a single array containing all elements of the two arrays, without modifying the original arrays, using the spread operator.

function mergeArrays (array1, array2){
  return [...array1, ...array2];
}
let a1 = [1, 2, 3, 4];
let a2 = [5, 6, 7, 8];
console.log(mergeArrays(a1, a2));

//  output: 
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]
// -----------------------------------------------------------------------------------------
// 7.Give an object person with properties name, age, and country, write a function that extracts name and country using object destructuring and returns them in an array.

let person = {names: "Stepen", age : 23, country: "Canada"};

function extractsNameCountry ({names,country}){   
    return[names, country];
      
    }
    console.log(extractsNameCountry(person));
   
// output: [ 'Stepen', 'Canada' ]
// -----------------------------------------------------------------------------------------
// 8.Wrie a function that takes an array of numbers as input, and uses array destructuring to extract the first, second, and third elements, returning them in an object with properties first, second, and third.

function extractElements([first, second, third]){
   return{first, second, third};
}

let numArray = [12, 34, 25, 36, 89];
console.log(extractElements(numArray));

// output:{ first: 12, second: 34, third: 25 }
// -----------------------------------------------------------------------------------------
// 9.Create a function that takes an object representing a book with properties title, author, year, and publisher. Use destructuring to extract title and author, and return a formatted string "Title: [title], Author:[author]"
function bookObj({title, author}){
  return `Title: ${title}, Author: ${author}`;
}
  

let book = {
  title: "Macbeth",
  author: "William Shakespeare",
  year: 1623,
  publisher: "Edward Blount and William Jaggard",

};

console.log(bookObj(book));

// output: Title: Macbeth, Author: William Shakespeare
// -----------------------------------------------------------------------------------------
// 10. Given an array of numbers, write a function that uses the spread operator to copy the array, then adds a new number at the end without modifying the original array.

let mainArry = [10, 20, 30, 40];

function copyArray (arryCopy, newNumber){
   return [...arryCopy, newNumber]
}
console.log(copyArray(mainArry, 50));

// output:[ 10, 20, 30, 40, 50 ]
// -----------------------------------------------------------------------------------------