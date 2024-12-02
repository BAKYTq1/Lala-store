
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.querySelector('.close');


openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});


closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});


window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
// 11111111

const popup = document.getElementById('popup');
const showPopupBtn = document.getElementById('showPopup');
const closePopupBtn = document.querySelector('.close-btn');


showPopupBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});


closePopupBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});


window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
// 222222222

const dialogOverlay = document.getElementById('dialogOverlay');
const triggerModalBtn = document.getElementById('triggerModal');
const closeIcon = document.querySelector('.close-icon');


triggerModalBtn.addEventListener('click', () => {
  dialogOverlay.style.display = 'flex';
});


closeIcon.addEventListener('click', () => {
  dialogOverlay.style.display = 'none';
});


window.addEventListener('click', (event) => {
  if (event.target === dialogOverlay) {
    dialogOverlay.style.display = 'none';
  }
});
// 3333333
// Получаем элементы




