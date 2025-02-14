const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

let gameLoop = ["rock!","paper!","scissors!"];

let computerResult = document.getElementById("computerResult");
let playerResult = document.getElementById("playerResult");
let winMessage = document.getElementById("result");
let computerChoice = gameLoop[Math.round(Math.random()*2)];


rockBtn.addEventListener("click",function(){
  playerResult.textContent = gameLoop[0];
  let computerChoice = gameLoop[Math.round(Math.random()*2)];
  computerResult.textContent = computerChoice;

  if(computerChoice === gameLoop[0]){
    winMessage.textContent = "ITS A TIE!";
  }else if(computerChoice === gameLoop[1]){
    winMessage.textContent = "YOU LOSE!";
  }else{
    winMessage.textContent = "YOU WIN!";
  }
});

paperBtn.addEventListener("click",function(){
  playerResult.textContent = gameLoop[1];
  let computerChoice = gameLoop[Math.round(Math.random()*2)];
  computerResult.textContent = computerChoice;

  if(computerChoice === gameLoop[1]){
    winMessage.textContent = "ITS A TIE!";
  }else if(computerChoice === gameLoop[2]){
    winMessage.textContent = "YOU LOSE!";
  }else{
    winMessage.textContent = "YOU WIN!";
  }
});

scissorsBtn.addEventListener("click",function(){
  playerResult.textContent = gameLoop[2];
  let computerChoice = gameLoop[Math.round(Math.random()*2)];
  computerResult.textContent = computerChoice;

  if(computerChoice === gameLoop[2]){
    winMessage.textContent = "ITS A TIE!";
  }else if(computerChoice === gameLoop[0]){
    winMessage.textContent = "YOU LOSE!";
  }else{
    winMessage.textContent = "YOU WIN!";
  }
});