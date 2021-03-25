// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const drawOne = didUserWin('rock', 'rock');
    const drawTwo = didUserWin('rock', 'paper');
    const drawThree = didUserWin('rock', 'scissors');
    const drawFour = didUserWin('paper', 'paper');
    const drawFive = didUserWin('paper', 'rock');
    const drawSix = didUserWin('paper', 'scissors');
    const drawSeven = didUserWin('scissors', 'rock');
    const drawEight = didUserWin('scissors', 'paper');
    const drawNine = didUserWin('scissors', 'scissors');

    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(drawOne, 'tie');
    expect.equal(drawTwo, 'lose');
    expect.equal(drawThree, 'win');
    expect.equal(drawFour, 'tie');
    expect.equal(drawFive, 'win');
    expect.equal(drawSix, 'lose');
    expect.equal(drawSeven, 'lose');
    expect.equal(drawEight, 'win');
    expect.equal(drawNine, 'tie');
});
