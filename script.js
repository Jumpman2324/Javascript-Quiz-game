const prompt = require("prompt-sync")()
const target =  Math.round(Math.random ()* 100)

let guesses = 0;




while(true) {
    guesses++;
    
const guess =  Number(prompt("Guess The Number! (0-100): "))
if (guess > target) {
   console.log("your guess is too high!") 
}
else if ( guess < target)  {
    console.log("your guess is too low")
}
else {
    console.log("you guessed correctly!")
    break
}
 }

 console.log("You guessed the number in " ,  guesses, "tries")