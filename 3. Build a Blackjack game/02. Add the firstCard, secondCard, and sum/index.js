// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let firstCard = 6
let secondCard = 9
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard

if (sum < 21){
    console.log("Do you want to draw a new card?")
}
else if (sum === 21){
    console.log("BlackJack!")
}
else if (sum > 21){
    console.log("You're out of the game!")
}