"use strict";

let playerHealth=100;
let computerHealth=100;
let PlayerD1=0;

function rollDice1(){
     //let playerDice1 = document.getElementById("playerDie1");
     PlayerD1 = Math.floor(Math.random() * 4) + 1;
     //playerDie1.innerHTML = PlayerD1;
     console.log(PlayerD1);
}


// function rollDice2(){
//     let playerDice2 = document.getElementById("playerDie2");
//     let PlayerD2 = Math.floor(Math.random() * 6) + 1;
//     playerDie2.innerHTML = PlayerD2;
//     console.log(PlayerD2);
// }

// function rollDice(){
//     let playerDice1 = document.getElementById("playerDie1");
//     let playerDice2 = document.getElementById("playerDie2");
//     let playerDice3 = document.getElementById("playerDie3");
//     let playerDice4 = document.getElementById("playerDie4");
//     let playerDice5 = document.getElementById("playerDie5");
//     let playerDice6 = document.getElementById("playerDie6");
//     let PlayerD1 = Math.floor(Math.random() * 4) + 1;
//     let PlayerD2 = Math.floor(Math.random() * 6) + 1;
//     let PlayerD3 = Math.floor(Math.random() * 8) + 1;
//     let PlayerD4 = Math.floor(Math.random() * 10) + 1;
//     let PlayerD5 = Math.floor(Math.random() * 12) + 1;
//     let PlayerD6 = Math.floor(Math.random() * 20) + 1;
//     playerDie1.innerHTML = PlayerD1;
//     playerDie2.innerHTML = PlayerD2;
//     playerDie3.innerHTML = PlayerD3;
//     playerDie4.innerHTML = PlayerD4;
//     playerDie5.innerHTML = PlayerD5;
//     playerDie6.innerHTML = PlayerD6;

//     let computerDice1 = document.getElementById("computerDie1");
//     let computerDice2 = document.getElementById("computerDie2");
//     let computerDice3 = document.getElementById("computerDie3");
//     let computerDice4 = document.getElementById("computerDie4");
//     let computerDice5 = document.getElementById("computerDie5");
//     let computerDice6 = document.getElementById("computerDie6");
//     let computerD1 = Math.floor(Math.random() * 4) + 1;
//     let computerD2 = Math.floor(Math.random() * 6) + 1;
//     let computerD3 = Math.floor(Math.random() * 8) + 1;
//     let computerD4 = Math.floor(Math.random() * 10) + 1;
//     let computerD5 = Math.floor(Math.random() * 12) + 1;
//     let computerD6 = Math.floor(Math.random() * 20) + 1;
//     computerDie1.innerHTML = computerD1;
//     computerDie2.innerHTML = computerD2;
//     computerDie3.innerHTML = computerD3;
//     computerDie4.innerHTML = computerD4;
//     computerDie5.innerHTML = computerD5;
//     computerDie6.innerHTML = computerD6;
//     //console.log(computerD1)
// }
