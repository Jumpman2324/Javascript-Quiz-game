const prompt = require("prompt-sync")()
let wins = 0
let losses = 0
let ties = 0


while(true) {
const choice = prompt("Enter rock, paper, or scissors (or q to quit): ");
if (choice.toLowerCase() === "q") {
    break;
}

if (choice !== "rock" &&  choice !== "paper" && choice !== "scissors") {
    console.log("please select a valid option")
    continue;
}

const choices = ["rock", "paper", "scissors"]
const randomindex = Math.round(Math.random()* 2)
const computerChoice = choices[randomindex]


console.log("The computer chose:", computerChoice)

if (choice === computerChoice) {
    console.log("Draw")
    ties++;
}
else if (
(choice === "paper" && computerChoice === "rock" ) || 
(choice === "rock" && computerChoice === "scissors" ) ||
(choice === "scissors" && computerChoice === "paper" )
) {
 console.log("You win!")
 wins++
}
else {
    console.log("You lose!")
 }
} 
console.log("wins:" ,wins, "losses:",losses, "ties:",ties)