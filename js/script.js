'use strict';

// Hamburger Menu

// Variables
const hamburgerBtn = document.querySelector(`.hamburger-btn`);
const hamburgerMenu = document.querySelector(`.hamburger-menu`);

// Functions
const toggleSwitch = function () {
    hamburgerMenu.classList.toggle(`active`);
}

// Functionality
hamburgerBtn.addEventListener(`click`, toggleSwitch);

// Hamburger Menu FINISHED

// Modals



// Modal 1

// Variables
const modalBtn1 = document.getElementById(`modal-btn1`);
const modal1 = document.getElementById(`modal1`);
const closeBtn1 = document.getElementById(`close-btn1`);
const overlay1 = document.getElementById(`overlay1`);

// Functions
const openModal1 = function () {
    modal1.classList.remove(`hidden`);
    overlay1.classList.remove(`hidden`);
}

const closeModal1 = function () {
    modal1.classList.add(`hidden`);
    overlay1.classList.add(`hidden`);
}

// Functionality
modalBtn1.addEventListener(`click`, openModal1);

closeBtn1.addEventListener(`click`, closeModal1);
overlay1.addEventListener(`click`, closeModal1);



// Modal 2

// Variables
const modalBtn2 = document.getElementById(`modal-btn2`);
const modal2 = document.getElementById(`modal2`);
const closeBtn2 = document.getElementById(`close-btn2`);
const overlay2 = document.getElementById(`overlay2`);

// Functions
const openModal2 = function () {
    modal2.classList.remove(`hidden`);
    overlay2.classList.remove(`hidden`);
}

const closeModal2 = function () {
    modal2.classList.add(`hidden`);
    overlay2.classList.add(`hidden`);
}

// Functionality
modalBtn2.addEventListener(`click`, openModal2);

overlay2.addEventListener(`click`, closeModal2);
closeBtn2.addEventListener(`click`, closeModal2);



// Modal 3

// Variables
const modalBtn3 = document.getElementById(`modal-btn3`);
const modal3 = document.getElementById(`modal3`);
const closeBtn3 = document.getElementById(`close-btn3`);
const overlay3 = document.getElementById(`overlay3`);

// Functions
const openModal3 = function () {
    modal3.classList.remove(`hidden`);
    overlay3.classList.remove(`hidden`);
}

const closeModal3 = function () {
    modal3.classList.add(`hidden`);
    overlay3.classList.add(`hidden`);
}

// Funtionality
modalBtn3.addEventListener(`click`, openModal3);

closeBtn3.addEventListener(`click`, closeModal3);
overlay3.addEventListener(`click`, closeModal3);



// Modal 4

// Variables
const modalBtn4 = document.getElementById(`modal-btn4`);
const modal4 = document.getElementById(`modal4`);
const closeBtn4 = document.getElementById(`close-btn4`);
const overlay4 = document.getElementById(`overlay4`);

// Functions
const openModal4 = function () {
    modal4.classList.remove(`hidden`);
    overlay4.classList.remove(`hidden`);
}

const closeModal4 = function () {
    modal4.classList.add(`hidden`);
    overlay4.classList.add(`hidden`);
}

// Functionality
modalBtn4.addEventListener(`click`, openModal4);

closeBtn4.addEventListener(`click`, closeModal4);
overlay4.addEventListener(`click`, closeModal4);