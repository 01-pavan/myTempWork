'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
//function triggered when the modal button is clicked
const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//function will trigger when ❌ symbol and outside the model space is clicked
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModel);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
