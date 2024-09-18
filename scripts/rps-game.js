//@ts-check

let playerControls = document.getElementById("player-controls") 

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

function pickRandomWeapon(weapons) {
    let randy = Math.floor(Math.random() * weapons.length);
    return weapons[randy];
} 

function playerControlHandler(e) {
 if (playerWeapon.type === computer.Weapon.type) {
     return "its a tie!";
 }
}



function playerControlHandler(e) {
    let weaponName = e.target.innerText;
    console.log(weaponName, "was selected");
}

playerControls?.addEventListener("click", playerControlHandler);
