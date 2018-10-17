"use strict";

let myRemainingHealth=100;
let pcRemainingHealth=100;
let damageHealth=0;
let attack=0;
let meRounds=[];
let pcRounds=[];
let bestOfFive=0;

function clearDice(){
        let clearP1 = document.getElementById("playerDie1");
        let clearP2 = document.getElementById("playerDie2");
        let clearP3 = document.getElementById("playerDie3");
        let clearP4 = document.getElementById("playerDie4");
        let clearP5 = document.getElementById("playerDie5");
        let clearP6 = document.getElementById("playerDie6");
        playerDie1.innerHTML = 0;
        playerDie2.innerHTML = 0;
        playerDie3.innerHTML = 0;
        playerDie4.innerHTML = 0;
        playerDie5.innerHTML = 0;
        playerDie6.innerHTML = 0;
        let clearD1 = document.getElementById("computerDie1");
        let clearD2 = document.getElementById("computerDie2");
        let clearD3 = document.getElementById("computerDie3");
        let clearD4 = document.getElementById("computerDie4");
        let clearD5 = document.getElementById("computerDie5");
        let clearD6 = document.getElementById("computerDie6");
        computerDie1.innerHTML = 0;
        computerDie2.innerHTML = 0;
        computerDie3.innerHTML = 0;
        computerDie4.innerHTML = 0;
        computerDie5.innerHTML = 0;
        computerDie6.innerHTML = 0;
        let clearW1 = document.getElementById("winnerOfOne");
        let clearW2 = document.getElementById("winnerOfTwo");
        let clearW3 = document.getElementById("winnerOfThree");
        let clearW4 = document.getElementById("winnerOfFour");
        let clearW5 = document.getElementById("winnerOfFive");
        let clearW6 = document.getElementById("winnerOfSix");
        winnerOfOne.innerHTML = 0;
        winnerOfTwo.innerHTML = 0;
        winnerOfThree.innerHTML = 0;
        winnerOfFour.innerHTML = 0;
        winnerOfFive.innerHTML = 0;
        //winnerOfSix.innerHTML = 0;
        winnerOfRound.innerHTML = 0;
        let arr1 = meRounds;
        let arr2 = pcRounds;
        arr1.length = 0;
        arr2.length = 0;
}


function rollDice(){
    rollDice1Me();
    rollDice1Comp();
    rollDice2Me();
    rollDice2Comp();
    rollDice3Me();
    rollDice3Comp();
    rollDice4Me();
    rollDice4Comp();
    rollDice5Me();
    rollDice5Comp();
    rollDice6Me();
    rollDice6Comp();
    myRounds();
    computerRounds();
    checkMe();
    testing();
    roundOne();
    roundTwo();
    roundThree();
    roundFour();
    roundFive();
    //roundSix();
    damage();
    winnerLooser();
}
function rollDice1Me(){
     let playerDice1 = document.getElementById("playerDie1");
     let PlayerD1 = Math.floor(Math.random() * 4) + 1;
     playerDie1.innerHTML = PlayerD1;
     //console.log(PlayerD1);
     return PlayerD1;

}

function rollDice1Comp(){
     let computerDice1 = document.getElementById("computerDie1");
     let computerD1 = Math.floor(Math.random() * 4) + 1;
     computerDie1.innerHTML = computerD1;
     //console.log(computerD1);
     return computerD1;

 }

 function roundOne(){
    let p1= meRounds[0];
    let d1= pcRounds[0];
    let results = "T";
        if (p1 == d1){
            results = "T";
        }
        if (p1 > d1){
            results = "W";
            } else {
        if (p1 < d1){
            results = "L"
        }

        }
        winnerOfOne.innerHTML = results;
     //console.log(results);

}

function rollDice2Me(){
    let playerDice2 = document.getElementById("playerDie2");
    let PlayerD2 = Math.floor(Math.random() * 6) + 1;
    playerDie2.innerHTML = PlayerD2;
    return PlayerD2;
}

function rollDice2Comp(){
    let computerDice2 = document.getElementById("computerDie2");
    let computerD2 = Math.floor(Math.random() * 6) + 1;
    computerDie2.innerHTML = computerD2;
    return computerD2;
}

function roundTwo(){
    let p2= meRounds[1];
    let d2= pcRounds[1];
   let results = "T";
       if (p2 === d2){
           results = "T";
       }
       if (p2 > d2){
           results = "W";
           } else {
       if (p2 < d2){
           results = "L"
       }
       }
       winnerOfTwo.innerHTML = results;
       //console.log(results);
}

function rollDice3Me(){
    let playerDice3 = document.getElementById("playerDie3");
    let PlayerD3 = Math.floor(Math.random() * 8) + 1;
    playerDie3.innerHTML = PlayerD3;
    return PlayerD3;
}

function rollDice3Comp(){
    let computerDice3 = document.getElementById("computerDie3");
    let computerD3 = Math.floor(Math.random() * 8) + 1;
    computerDie3.innerHTML = computerD3;
    return computerD3;
}

function roundThree(){
    let p3= meRounds[2];
    let d3= pcRounds[2];
   let results = "T";
       if (p3 === d3){
           results = "T";
       }
       if (p3 > d3){
           results = "W";
           } else {
       if (p3 < d3){
           results = "L"
       }
       }
       winnerOfThree.innerHTML = results;
       //console.log(results);
}

function rollDice4Me(){
    let playerDice4 = document.getElementById("playerDie4");
    let PlayerD4 = Math.floor(Math.random() * 10) + 1;
    playerDie4.innerHTML = PlayerD4;
    return PlayerD4;
}

function rollDice4Comp(){
    let computerDice4 = document.getElementById("computerDie4");
    let computerD4 = Math.floor(Math.random() * 10) + 1;
    computerDie4.innerHTML = computerD4;
    return computerD4;
}

function roundFour(){
    let p4= meRounds[3];
    let d4= pcRounds[3];
   let results = "T";
       if (p4 === d4){
           results = "T";
       }
       if (p4 > d4){
           results = "W";
           } else {
       if (p4 < d4){
           results = "L"
       }
       }
       winnerOfFour.innerHTML = results;
       //console.log(results);
}

function rollDice5Me(){
    let playerDice5 = document.getElementById("playerDie5");
    let PlayerD5 = Math.floor(Math.random() * 12) + 1;
    playerDie5.innerHTML = PlayerD5;
    return PlayerD5;
}

function rollDice5Comp(){
    let computerDice5 = document.getElementById("computerDie5");
    let computerD5 = Math.floor(Math.random() * 12) + 1;
    computerDie5.innerHTML = computerD5;
    return computerD5;
}

function roundFive(){
    let p5= meRounds[4];
    let d5= pcRounds[4];
   let results = "T";
       if (p5 === d5){
           results = "T";
       }
       if (p5 > d5){
           results = "W";
           } else {
       if (p5 < d5){
           results = "L"
       }
       }
       winnerOfFive.innerHTML = results;
       //console.log(results);
}

function rollDice6Me(){
    let playerDice6 = document.getElementById("playerDie6");
    let PlayerD6 = Math.floor(Math.random() * 20) + 1;
    playerDie6.innerHTML = PlayerD6;
    return PlayerD6;
}

function rollDice6Comp(){
    let computerDice6 = document.getElementById("computerDie6");
    let computerD6 = Math.floor(Math.random() * 20) + 1;
    computerDie6.innerHTML = computerD6;
    return computerD6;
}

// function roundSix(){
//     let p6= meRounds[5];
//     let d6= pcRounds[5];
//    let results = "T";
//        if (p6 === d6){
//            results = "T";
//        }
//        if (p6 > d6){
//            results = "W";
//            } else {
//        if (p6 < d6){
//            results = "L"
//        }
//        }
//        winnerOfSix.innerHTML = results;
//        console.log(results);
// }
function myRounds(){
    meRounds.push(rollDice1Me(), rollDice2Me(), rollDice3Me(), rollDice4Me(), rollDice5Me(), rollDice6Me())
       //console.log(meRounds);
}

function computerRounds(){
    pcRounds.push(rollDice1Comp(), rollDice2Comp(), rollDice3Comp(), rollDice4Comp(), rollDice5Comp(), rollDice6Comp())
       //console.log(pcRounds);
}


function checkMe(){
    let a = meRounds;
    let b = pcRounds;
    let x = [];
    //console.log(a);
    //console.log(b);
for(let i = 0;i<=b.length-1;i++){
    x.push(a[i] - b[i]);

}
//console.log(x);
}


function testing(){
let testMe0 = meRounds[0]-pcRounds[0];
let testMe1 = meRounds[1]-pcRounds[1];
let testMe2 = meRounds[2]-pcRounds[2];
let testMe3 = meRounds[3]-pcRounds[3];
let testMe4 = meRounds[4]-pcRounds[4];
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let y = 0;

if (testMe0>0){
    a = 1;
}
if (testMe1>0){
    b = 1;
}
if (testMe2>0){
    c = 1;
}
if (testMe3>0){
    d = 1;
}
if (testMe4>0){
    e = 1;
}
bestOfFive = a+b+c+d+e
let roundWinner = document.getElementById("winnerOfRound");
winnerOfRound.innerHTML = bestOfFive;
//console.log(bestOfFive)
}

function winner(){
let computerDice6 = document.getElementById("computerDie6");
let computerD6 = Math.floor(Math.random() * 20) + 1;
computerDie6.innerHTML = computerD6;
}

function damage(){
let myAttackPower = meRounds[5];
console.log(myAttackPower)
let computerAttackPower = pcRounds[5];
console.log(computerAttackPower)
let whoWon = document.getElementById("winnerOfRound");
let myPlayer = document.getElementById("myPlayerHealth");
let pcPlayer = document.getElementById("pcComputerHealth");

let whoAttacks = winnerOfRound.innerHTML;
let myHealthReport = myPlayerHealth.innerHTML;
let pcHealthReport = pcComputerHealth.innerHTML;

console.log(whoAttacks)

if (whoAttacks > 2) {
    pcRemainingHealth = pcHealthReport-myAttackPower
    myRemainingHealth = myHealthReport
    pcComputerHealth.innerHTML = pcRemainingHealth
} else {
    myRemainingHealth = myHealthReport-computerAttackPower
    pcRemainingHealth = pcHealthReport
    myPlayerHealth.innerHTML = myRemainingHealth
}


console.log("My health : " + pcRemainingHealth)
console.log("Computer's health : " + myRemainingHealth)
}

function winnerLooser(){
let myPlayer1 = document.getElementById("myPlayerHealth");
let pcPlayer1 = document.getElementById("pcComputerHealth");
let gResults= document.getElementById("resultsOfGame");
let myHealthReport1 = myPlayerHealth.innerHTML;
let pcHealthReport1 = pcComputerHealth.innerHTML;
let gameResults = resultsOfGame.innerHTML;
console.log("my health " + myHealthReport1)
console.log("pc healt " + pcHealthReport1)
if (myHealthReport1 <= 0){
    resultsOfGame.innerHTML= "YOU LOST!!! Refresh the page to play again";
} else {
    if (pcHealthReport1 <= 0){
    resultsOfGame = "YOU WON!!! Congratulations";  
    }
}

}