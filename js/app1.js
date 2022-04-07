'use strict';



// Hamburger Menu

// Variables
const hamburgerBtn = document.querySelector(`.hamburger-btn`);
const hamburgerMenu = document.querySelector(`.hamburger-menu`);

// Functions
const openCloseHamburgerMenu = function () {
    hamburgerMenu.classList.toggle(`active`);
}

// Functionality
hamburgerBtn.addEventListener(`click`, openCloseHamburgerMenu);



// Interactive Meditation Section



// Countdown Timer

// Variables
const startingMinutes = 5;
let time = startingMinutes * 60;
const countdownDisplay = document.getElementById(`countdown-timer`);
let timeFinished = false;
const meditationFinishedScreen = document.querySelector(`.meditation-finished-screen`);

// Functions
const countdownTimer = function () {

    const oneSecond = setInterval( function () {
        const min = Math.floor(time / 60);
        const sec = time % 60;

        countdownDisplay.textContent = `${min < 10 ? `0` : ``}${min}:${sec < 10 ? `0` : ``}${sec}`;
        time--;

        if (min === 0 && sec === 0) {
            clearInterval(oneSecond);
            timeFinished = true;
            meditationFinishedScreen.classList.remove(`hidden`);
            pauseSoundEffect();
        }
    }, 1000)
}



// Circle Animation

// Variables
const innerCircle = document.getElementById(`inner-circle`);

// Functions
const innerCircleAnimation = function () {
    innerCircle.classList.add(`progress`);

    setTimeout( function () {
        innerCircle.classList.remove(`progress`);
    }, 4000)
}



// Breathing Instructions

// Variables
const instructions = document.getElementById(`instructions`);

// Functions
const breathingInstructions = function () {
    instructions.textContent = `Breath in`;

    setTimeout( function () {
        instructions.textContent = `Breath out calmly`;
    }, 4000)
}



// Meditation Interactive Animation

// Functions
const meditationInteractiveAnimation = function () {

    const animationInterval = setInterval( function () {
        innerCircleAnimation();
        breathingInstructions();

        if (timeFinished === true) {
            clearInterval(animationInterval);
        }
    }, 8000)
}



// Sound Effect

// Variables
const soundEffect = document.querySelector(`.sound-effect`);

// Function
const playSoundEffect = function () {
    soundEffect.play();
}

const pauseSoundEffect = function () {
    soundEffect.pause();
}



// Start Button

// Variables
const startBtn = document.getElementById(`start-btn`);

// Functionality
startBtn.addEventListener(`click`, function () {
    countdownTimer();
    innerCircleAnimation();
    breathingInstructions();
    meditationInteractiveAnimation();
    playSoundEffect();
})