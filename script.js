
alert("good afternoon, let's play a game. ");
var startGame = confirm("are you ready?");
if (startGame) { const randomNumber = Math.floor(Math.random() * 10) + 1;
var guess = prompt("You will need to guess a number from 1 to 10.");
 if (guess == randomNumber) {alert("greate");} 
 else {alert("false " + randomNumber);}
} 
else {alert("Maybe next time. Good bye!")}