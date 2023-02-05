// Get random number between 1-6. Store in variables.
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

// Adjust and store in variable the first and second dice image with random number selected.
var firstDiceImage = "images/dice" + randomNumber1 + ".png";
var secondDiceImage = "images/dice" + randomNumber2 + ".png";

// Change the image of first and second dice to the random dice image.
document.querySelector(".img1").setAttribute("src", firstDiceImage);
document.querySelector(".img2").setAttribute("src", secondDiceImage);

// Logic to find winner, loser, draw.
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}