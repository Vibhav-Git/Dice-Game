function generateRandom() {
    return Math.floor((Math.random() * 6) + 1);
}

var dice1 = generateRandom();
var dice2 = generateRandom();
var output = "", d1Location = "", d2Location="";


if(dice1 > dice2) {
    output = "🥳 Player 1 Wins!!!🎉🎉🎉";
} else if(dice2 > dice1) {
    output = "🥳 Player 2 Wins!!! 🎉🎉🎉";
} else {
    output = "Its a draw ⚔️";
}

d1Location = "./images/dice-six-faces-" + dice1 +".svg";
d2Location = "./images/dice-six-faces-" + dice2 +".svg";


document.querySelector(".result").textContent = output;
document.querySelector(".left-panel img").setAttribute("src", d1Location);
document.querySelector(".right-panel img").setAttribute("src", d2Location);

