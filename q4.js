// 4.Exploring Objects with for...in Loop
// Objective: Practice working with objects in TypeScript and iterating over their properties using 
// a for...in loop.
// Instructions:
// 1. Create a simple object with three items:
// o Define an object called myObject with three properties: item1, item2, and item3, 
// each with corresponding string values.
// 2. Use a for...in loop to get properties' names and values from the object:
// o Iterate through the properties of myObject using a for...in loop.
// o Inside the loop, print each property's name and its corresponding value to the 
// console.
var myObject = {
    item1: "books",
    item2: "notebooks",
    item3: "pens",
};
for (var X in myObject) {
    console.log("".concat(X, ": ").concat(myObject[X]));
}
// 5.Exploring Arrays with Loops(Using loop )
// Objective: Practice working with arrays in TypeScript and using for loops and for...of loops 
// to iterate through array elements.
// Instructions:
// 1. Create an empty array:
// o Define an empty array called myArray.
// 2. Run a loop 10 times, adding a new incrementing value to the array:
// o Use a for loop to iterate 10 times.
// o In each iteration, add a new incrementing value (starting from 1) to the myArray.
// 3. Log the array into the console:
// o After populating the array, log the myArray into the console.
// 4. Use the for loop to iterate through the array:
// o Use a for loop to iterate through the array elements.
// o Adjust the number of iterations based on the number of values in the array.
// o Output each array element along with its index into the console.
// Use the for...of loop to output the value into the console from the array:
// o Use a for...of loop to iterate through the array elements.
// o Output each array element directly into the console.
// const myArray : number[]= []
// for(let i=1; i<= 10; i++){
//     myArray.push(i)
// }
// console.log(myArray);
// for(let i=0; i<myArray.length; i++){
//     console.log(`Index:  ${i}, Value: ${myArray[i]}`);
// }
// for(let x of myArray ){
//     console.log(`Value: ${x}`);
// }
