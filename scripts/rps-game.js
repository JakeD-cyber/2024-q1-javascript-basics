//@ts-check

let playerControls = document.getElementById("player-controls"); 

//game-results
/** @type { HTMLElement } */
//@ts-ignore We know player controls is not null
let gameResultHeader = document.getElementById("game-results");

/** @type { HTMLElement } */
//@ts-ignore We know game result header is not null
let gameRestartSection = document.getElementById("game-results");

/** @type { HTMLElement } */
//@ts-ignore We know game restart section is not null
let gameRestartSection = document.getElementById("game-results");

gameResultHeader?.innerText = "Hey there!!";

let isGameOver = false;

let weapons = [
    {
        type: "Rock",
        beats: "Scissors"
    },
    {
        type: "Paper",
        beats: "Rock"
    },
    {
        type: "Scissors",
        beats: "Paper"
    }
];

function determineOutcome(playerWeapon, computerWeapon) {
    if (playerWeapon.type === computerWeapon.type) {
        return "it's a tie!";
    }

    isGameOver = true;
    showRestart();

    if (playerWeapon.beats === computerWeapon.type) {
        return 'Player wins! ${playerWeapon.type} beats ${computerWeapon.type}'
    }

    return 'Computer wins! ${computerWeapon.type} beats ${playerWeapon.type}';

}

function playerControlHandler(e) {
    if(e.target.id === "btn-restart")
        isGameOver = false;
    showPlayerControls();
    gameResultHeader.InnerText ="";

}




  if(isGameOver) {
      return;
    }
    let weaponName = e.target.innerText;
    let playerWeapon = weapons.find(w => w.type === weaponName);

    if(!playerWeapon) {
        console.log("ERROR! player weapon undefined");
        return;
    }

    letcomputerWeapon = PickRandomWeapon

    let result = determineOutcome(playerWeapon, computerWeapon);
    gameResultHeader?.innerText = result;
    console.log(result);

  function gameRestartHandler(e) {
}

functionShowPlayerControls() {
    gameRestartSection.style.display = "initial";
    playerControls.style.display = "none";

function showRestart() }
    functionShowPlayerControls() {
    gameRestartSection.style.display = "none";
    playerControls.style.display = "initial";
   
    }

functionShowPlayerControls() {

}

playerControls?.addEventListener("click", playerControlHandler);

gameRestartSection.addEventListener("click", gameRestartHandler);
