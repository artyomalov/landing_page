import scrollToElement from './js/srollToElement';
import sendButtonClickHandler from './js/sendButtonClickHandler';
import tabClickHandler from './js/tabClickHandler';
import SliderActions from './js/slider';
import './style.css';

// scroll to the section of the page
const menuLinks = document.querySelectorAll('.header__header-link');
menuLinks.forEach((link) => {
  scrollToElement(link, link.id.slice(1), 100);
});
const signInButton = document.getElementById('introduction__singup');
scrollToElement(signInButton, 'form', 100);

// slider handlers
const diplomasTape = document.getElementById('diplomas__slider-tape');
const diplomasImages = document.querySelectorAll('.diplomas__diploma-img');
const leftButton = document.getElementById('diplomas__left-button');
const rightButton = document.getElementById('diplomas__right-button');

const sliderActions = new SliderActions(
  '#dipolomas__slider-window',
  diplomasTape,
  diplomasImages,
  rightButton,
  leftButton
);

sliderActions.initSlider();
window.addEventListener('resize', () => {
  sliderActions.initialize();
});

//send form data to telegram
const sendButton = document.getElementById('sendButton');
const inputs = document.querySelectorAll('.contact__form-input');

sendButton.addEventListener('click', () => {
  sendButtonClickHandler(inputs);
});

//accordeon's handlers
const services = document.querySelectorAll('.service__item');

services.forEach((service) => {
  service.addEventListener('click', (e) => tabClickHandler(e));
});

