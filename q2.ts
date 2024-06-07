                  // 2. Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly generated number between 1 and a specified maximum value using a predefined set of guesses.
// Steps to Follow: 
//1. Set a maximum value: Create a variable to store the maximum value for the number guessing game.
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a random number between 1 and the maximum value. Log this value to the console for development purposes.
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set it to false initially. 
//4. Simulate user guesses: Use an array to store a series of predefined guesses. 
//5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the correct guess is made. 
//6. Check the user's guess: Inside the loop, check if the current guess matches the random number. Provide feedback if the guess is too high or too low.
let maxNum = 4;
let ranNum = Math.floor(Math.random()*4+1);
console.log(`Random number is: ${ranNum}`);
let isCorrect = false 
let storeGuesses=[3,2,4,5,6,1];
let i = 0;
while (i <storeGuesses.length && !isCorrect){
if (storeGuesses[i]===ranNum){
    console.log(`${storeGuesses[i]},your guessed numberis high,try again.`);
}
else{
    console.log(`${storeGuesses[i]} is too low, try again.`)
}
i++;
}