"use strict";

const newGame = document.querySelector(".btn--new");
const hold = document.querySelector(".btn--hold");
const rollDice = document.querySelector(".btn--roll");

const currentScoreText0 = document.querySelector("#current--0");
const currentScoreText1 = document.querySelector("#current--1");

const totalScoreText0 = document.querySelector("#score--0");
const totalScoreText1 = document.querySelector("#score--1");

const section0 = document.querySelector(".player--0");
const section1 = document.querySelector(".player--1");

const dice = document.querySelector(".dice");

let currentScore0 = 0;
let currentScore1 = 0;
let totalScore0 = 0;
let totalScore1 = 0;

function toggler() {
  section0.classList.toggle("player--active");
  section1.classList.toggle("player--active");
}

function currentScoreEraser(playerNumber) {
  if (playerNumber === 0) {
    currentScore0 = 0;
    currentScoreText0.textContent = 0;
  } else {
    currentScore1 = 0;
    currentScoreText1.textContent = 0;
  }
}

function newStart() {
  section0.classList.add("player--active");
  section1.classList.remove("player--active");
  section0.classList.remove("player--winner");
  section1.classList.remove("player--winner");

  currentScoreEraser(0);
  currentScoreEraser(1);

  totalScore0 = 0;
  totalScoreText0.textContent = 0;

  totalScore1 = 0;
  totalScoreText1.textContent = 0;
}

const randomDice = () => Math.trunc(Math.random() * 6) + 1;

rollDice.addEventListener("click", function () {
  if (totalScore0 < 100 && totalScore1 < 100) {
    let currentDice = randomDice();
    dice.src = `dice-${currentDice}.png`;
    if (section0.classList.contains("player--active")) {
      if (currentDice !== 1) {
        currentScore0 += currentDice;
        currentScoreText0.textContent = currentScore0;
        if (totalScore0 >= 100) section0.classList.add("player--winner");
      } else {
        currentScoreEraser(0);
        toggler();
      }
    } else {
      if (currentDice !== 1) {
        currentScore1 += currentDice;
        currentScoreText1.textContent = currentScore1;
        if (totalScore1 >= 100) section1.classList.add("player--winner");
      } else {
        currentScoreEraser(1);
        toggler();
      }
    }
  }
});

hold.addEventListener("click", function () {
  if (totalScore0 < 100 && totalScore1 < 100) {
    if (section0.classList.contains("player--active")) {
      totalScore0 += currentScore0;
      totalScoreText0.textContent = totalScore0;
      currentScoreEraser(0);
      if (totalScore0 >= 100) {
        section0.classList.add("player--winner");
      } else {
        toggler();
      }
    } else {
      totalScore1 += currentScore1;
      totalScoreText1.textContent = totalScore1;
      currentScoreEraser(1);
      if (totalScore1 >= 100) {
        section1.classList.add("player--winner");
      } else {
        toggler();
      }
    }
  }
});

newGame.addEventListener("click", function () {
  newStart();
});
