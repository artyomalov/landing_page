/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/srollToElement.js
const scrollToElement = (clickedElement, moveToElementId, offset) => {
  clickedElement.addEventListener('click', () => {
    const moveToElement = document.getElementById(moveToElementId);
    const moveToElementPosition = moveToElement.getBoundingClientRect().top;
    const offsetPosition = moveToElementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
};
/* harmony default export */ const srollToElement = (scrollToElement);
;// CONCATENATED MODULE: ./src/js/const.js
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '(', ')'];

;// CONCATENATED MODULE: ./src/js/inputErrorHandler.js
const inputErrrorHandler = (element, message, timeout) => {
  element.placeholder = message;
  element.classList.toggle('contact__form-input-warning');
  setTimeout(() => {
    return element.classList.toggle('contact__form-input-warning');
  }, timeout);
  return;
};
/* harmony default export */ const inputErrorHandler = (inputErrrorHandler);
;// CONCATENATED MODULE: ./src/js/sendDataToTgHandler.js
const sendDataToTgHandler = async sendData => {
  try {
    const response = await fetch('http://localhost:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': 'http://localhost:8000'
      },
      mode: 'cors',
      body: JSON.stringify(sendData)
    });
    const data = await response.json();
    if (!data) {
      throw new Error('fetch error');
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
/* harmony default export */ const js_sendDataToTgHandler = (sendDataToTgHandler);
;// CONCATENATED MODULE: ./src/js/createNotifyUserModalWindow.js
const createNotifyUserModalWindow = (title, message) => {
  return `
    <div class="modal">
      <div class="modal__container">
        <p class="modal__title">${title}</p>
        <p class="modal__text">
         ${message}
        </p>
      </div>
    </div>
    `;
};
/* harmony default export */ const js_createNotifyUserModalWindow = (createNotifyUserModalWindow);
;// CONCATENATED MODULE: ./src/js/notifyUserHandler.js

const notifyUserHandler = (notificationTitle, notificationText) => {
  const modalWindowHTML = js_createNotifyUserModalWindow(notificationTitle, notificationText);
  const body = document.getElementById('body');
  body.insertAdjacentHTML('afterbegin', modalWindowHTML);
  const modalWindow = document.querySelector('.modal');
  // modalWindow.style.opacity = 1;
  setTimeout(() => {
    modalWindow.style.opacity = 1;
  }, 150);
  setTimeout(() => {
    modalWindow.style.opacity = 0;
  }, 4300);
  setTimeout(() => {
    modalWindow.remove();
  }, 4600);
};
/* harmony default export */ const js_notifyUserHandler = (notifyUserHandler);
;// CONCATENATED MODULE: ./src/js/sendButtonClickHandler.js




const sendButtonClickHandler = async formInputs => {
  let errorFlag = false;
  const userNameInput = formInputs[0];
  if (userNameInput.value === '') {
    inputErrorHandler(userNameInput, 'Пожалуйста введите имя', 3000);
    errorFlag = true;
  }
  const userPhoneNumberInput = formInputs[1];
  const phoneNumberToArray = userPhoneNumberInput.value.split('');
  const phoneNumberIsValidFlag = phoneNumberToArray.every(item => {
    return numbers.includes(item);
  });
  if (userPhoneNumberInput.value === '' || phoneNumberIsValidFlag === false) {
    inputErrorHandler(userPhoneNumberInput, 'Пожалуйста введите корректный телефонный номер', 3000);
    errorFlag = true;
  }
  const userEmailInput = formInputs[2];
  if (!userEmailInput.value.includes('@')) {
    inputErrorHandler(userEmailInput, 'Пожалуйста введите корректный email', 3000);
    errorFlag = true;
  }
  const userMessageInput = formInputs[3];
  let userMessage = userMessageInput.value;
  if (userMessageInput.value === '') {
    userMessage = 'Пользователь не добавил описание';
  }
  const userData = {
    userName: userNameInput.value,
    userPhoneNumber: userPhoneNumberInput.value,
    userEmail: userEmailInput.value,
    userMessage: userMessage
  };
  if (errorFlag) return;
  const successfullRequerstFlag = js_sendDataToTgHandler(userData);
  if (!successfullRequerstFlag) {
    js_notifyUserHandler('Ошибка!', 'Что-то пошло не так. Пожалуйста попробуйте позже.');
    return; //дописать всплывающее окно для обработки ошибки
  }

  formInputs.forEach(input => {
    input.value = '';
  });
  js_notifyUserHandler('Сообщение успешно отправлено!', 'Благодарю Вас за обращение, я свяжусь с Вами в течение 24 часов.');
};
/* harmony default export */ const js_sendButtonClickHandler = (sendButtonClickHandler);
;// CONCATENATED MODULE: ./src/js/tabClickHandler.js
const tabClickHandler = e => {
  const serviceItem = e.currentTarget;
  const serviceControl = serviceItem.querySelector('.service__control');
  const serviceContent = serviceItem.querySelector('.service__content');
  serviceItem.classList.toggle('open');
  if (serviceItem.classList.contains('open')) {
    serviceControl.setAttribute('aria-expanded', true);
    serviceContent.setAttribute('aria-expanded', false);
    serviceContent.style.maxHeight = serviceContent.scrollHeight + 40 + 'px';
    console.log(serviceContent.style.maxHeight);
  } else {
    serviceControl.setAttribute('aria-expanded', false);
    serviceContent.setAttribute('aria-expanded', true);
    serviceContent.style.maxHeight = null;
  }
};
/* harmony default export */ const js_tabClickHandler = (tabClickHandler);
;// CONCATENATED MODULE: ./src/js/slider.js
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class SliderActions {
  constructor(sliderDomElement, sliderTapeDomElement, diplomasImagesArray, sliderButtonRight, sliderButtonLeft) {
    //   '#dipolomas__slider-window'
    _defineProperty(this, "diplomasCounter", 3);
    _defineProperty(this, "count", 0);
    _defineProperty(this, "sliderWidth", void 0);
    this.sliderDomElement = sliderDomElement;
    this.sliderTapeDomElement = sliderTapeDomElement;
    this.diplomasImagesArray = diplomasImagesArray;
    this.sliderButtonRight = sliderButtonRight;
    this.sliderButtonLeft = sliderButtonLeft;
  }
  rollSlider() {
    this.sliderTapeDomElement.style.transform = 'translate(-' + this.count * this.sliderWidth / this.diplomasCounter + 'px';
  }
  initialize() {
    const windowWidth = window.screen.width;
    if (windowWidth < 770) this.diplomasCounter = 2;
    if (windowWidth < 425) this.diplomasCounter = 1;
    this.sliderWidth = document.querySelector(this.sliderDomElement).offsetWidth;
    this.sliderTapeDomElement.style.width = this.sliderWidth * this.diplomasImagesArray.length + 'px';
    this.diplomasImagesArray.forEach(image => {
      image.style.width = this.sliderWidth / this.diplomasCounter + 'px';
      image.style.height = 'auto';
    });
    this.rollSlider();
  }
  addScrollActionsForScrollButtons() {
    this.sliderButtonRight.addEventListener('click', () => {
      if (this.count > this.diplomasImagesArray.length - 4) return;
      this.count++;
      this.rollSlider();
    });
    this.sliderButtonLeft.addEventListener('click', () => {
      if (this.count < 1) return;
      this.count--;
      this.rollSlider();
    });
  }
  initSlider() {
    this.initialize();
    this.addScrollActionsForScrollButtons();
  }
}
/* harmony default export */ const slider = (SliderActions);
;// CONCATENATED MODULE: ./src/index.js






// scroll to the section of the page
const menuLinks = document.querySelectorAll('.header__header-link');
menuLinks.forEach(link => {
  srollToElement(link, link.id.slice(1), 100);
});
const signInButton = document.getElementById('introduction__singup');
srollToElement(signInButton, 'form', 100);

// slider handlers
const diplomasTape = document.getElementById('diplomas__slider-tape');
const diplomasImages = document.querySelectorAll('.diplomas__diploma-img');
const leftButton = document.getElementById('diplomas__left-button');
const rightButton = document.getElementById('diplomas__right-button');
const sliderActions = new slider('#dipolomas__slider-window', diplomasTape, diplomasImages, rightButton, leftButton);
sliderActions.initSlider();
window.addEventListener('resize', () => {
  sliderActions.initialize();
});

//send form data to telegram
const sendButton = document.getElementById('sendButton');
const inputs = document.querySelectorAll('.contact__form-input');
sendButton.addEventListener('click', () => {
  js_sendButtonClickHandler(inputs);
});

//accordeon's handlers

const services = document.querySelectorAll('.service__item');
services.forEach(service => {
  service.addEventListener('click', e => js_tabClickHandler(e));
});
/******/ })()
;