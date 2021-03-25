// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { didUserWin } from './utils.js';
import { getRandomThrow } from './get-random-throw.js';

const button = document.getElementById('button');
const playersPickDisplay = document.getElementById('player-pick-display');
const aiPickDisplay = document.getElementById('AI-pick-display');
const resultPickDisplay = document.getElementById('result-display');
const winsDisplay = document.getElementById('wins-display');
const tiesDisplay = document.getElementById('ties-display');
const lossesDisplay = document.getElementById('losses-display');
let wins = 0;
let losses = 0;
let ties = 0;

button.addEventListener('click', () => {
    const usersPick = document.querySelector(':checked');
    const userThrow = usersPick.value;
    const aiThrow = getRandomThrow();

    const result = didUserWin(userThrow, aiThrow);

    playersPickDisplay.textContent = userThrow;
    aiPickDisplay.textContent = aiThrow;
    resultPickDisplay.textContent = result;

    if (result === 'win') {
        wins++;
        winsDisplay.textContent = wins;
    }
    if (result === 'lose') {
        losses++;
        lossesDisplay.textContent = losses;
    }
    if (result === 'tie') {
        ties++;
        tiesDisplay.textContent = ties;

    }

});