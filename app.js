import { didUserWin } from './utils.js';
import { getRandomThrow } from './get-random-throw.js';

const button = document.getElementById('button');
const resetButton = document.getElementById('reset');
const playersPickDisplay = document.getElementById('player-pick-display');
const aiPickDisplay = document.getElementById('AI-pick-display');
const resultPickDisplay = document.getElementById('result-display');
const winsDisplay = document.getElementById('wins-display');
const tiesDisplay = document.getElementById('ties-display');
const lossesDisplay = document.getElementById('losses-display');
const totalDisplay = document.getElementById('total-display');

let wins = 0;
let losses = 0;
let ties = 0;
let total = 0;

button.addEventListener('click', () => {
    const usersPick = document.querySelector('input:checked');
    const userThrow = usersPick.value;
    const aiThrow = getRandomThrow();
    const result = didUserWin(userThrow, aiThrow);

    playersPickDisplay.textContent = userThrow;
    aiPickDisplay.textContent = aiThrow;
    resultPickDisplay.textContent = result;

    total++;

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

    totalDisplay.textContent = total;
});

resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    ties = 0;
    total = 0;

    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    tiesDisplay.textContent = ties;
    totalDisplay.textContent = total;
});