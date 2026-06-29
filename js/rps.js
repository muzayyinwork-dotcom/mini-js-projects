
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const compDisplay = document.getElementById("compDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const pScoreNum = document.getElementById("pScoreNum");
const cScoreNum = document.getElementById("cScoreNum");
let comp = 0;
let player = 0;


function playGame(playerChoice){
    
   const compChoice = choices[Math.floor(Math.random() * 3)];
   let result = "";

   if(playerChoice === compChoice){
    result = "IT'S A TIE"
   }
   else{
    switch(playerChoice){
        case "rock":
            result = (compChoice === "scissors") ? "YOU WIN!" : "YOU LOSE";
            break;
        
        case "paper":
            result = (compChoice === "rock") ? "YOU WIN!" : "YOU LOSE";
            break;

        case "scissors":
            result = (compChoice === "paper") ? "YOU WIN!" : "YOU LOSE";
            break;

    }
   }

   playerDisplay.textContent = `Player: ${playerChoice}`;
   compDisplay.textContent = `Computer: ${compChoice}`;
   resultDisplay.textContent = result;

   resultDisplay.classList.remove("winText", "loseText","tieText");

   switch(result){
    case "YOU WIN!":
        resultDisplay.classList.add("winText");
        player++;
        pScoreNum.textContent = player;
        break;
    case "YOU LOSE":
        resultDisplay.classList.add("loseText");
        comp++;
        cScoreNum.textContent = comp;
        break;
    case "IT'S A TIE":
        resultDisplay.classList.add("tieText");
        break;


}
}

