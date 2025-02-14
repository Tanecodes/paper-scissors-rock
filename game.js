const rockBtn = document.getElementById("rock").addEventListener("click",function(){
  playerResult.textContent = "player: ROCK!";
  computerResult.textContent = gameLoop[Math.floor(Math.random()*3)];
});
const paperBtn = document.getElementById("paper").addEventListener("click",function(){
  playerResult.textContent = "player: PAPER!"
  computerResult.textContent = gameLoop[Math.floor(Math.random()*3)];
});
const scissorsBtn = document.getElementById("scissors").addEventListener("click",function(){
  playerResult.textContent = "player: SCISSORS!";
  computerResult.textContent = gameLoop[Math.floor(Math.random()*3)];
});

let gameLoop = ["computer: ROCK!","computer:PAPER!","computer:SCISSORS!"];
let playerResult = document.getElementById("playerResult");
let computerResult = document.getElementById("computerResult");
let result = document.getElementById("result");

