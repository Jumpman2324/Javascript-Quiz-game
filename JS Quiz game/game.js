const prompt = require("prompt-sync")()

console.log("Welcome to the random trivia quiz!")
 let correctAnswers = 0
 const totalQuestions = 3; 
 const answer1 = prompt("Where is the Great Barrier Reef located: ")
 const correct_answer = "AUSTRALIA"

 if (answer1.toUpperCase() === correct_answer) {
    console.log("correct!")
    correctAnswers++;
 }
 else {
    console.log("sorry incorrect!")
 }


 const answer2 = prompt("What country gave the U.S the Statue of Liberty?: ")
 const correctAnswer2 = "FRANCE"

 if (answer2.toUpperCase() === correctAnswer2) {
    console.log("correct!")
    correctAnswers++;
 }
 else {
    console.log("sorry incorrect!")
 }
 
 const answer3 = prompt("What planet is closest to Earth?: ")
 const correctAnswer3 = "mercury"

 if (answer3.toLowerCase() === correctAnswer3) {
    console.log("correct!")
    correctAnswers++;
 }
 else {
    console.log("sorry incorrect!")
 }

 const percent = Math.round(correctAnswers / totalQuestions) * 100;

 console.log("you got", correctAnswers, "questions correct")
 console.log("you scored",percent , "percent")
 