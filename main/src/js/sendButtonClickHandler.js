import { numbers } from './const';
import inputErrrorHandler from './inputErrorHandler';
import sendDataToTgHandler from './sendDataToTgHandler';
import notifyUserHandler from './notifyUserHandler';

const sendButtonClickHandler = async (formInputs) => {
  let errorFlag = false;

  const userNameInput = formInputs[0];

  if (userNameInput.value === '') {
    inputErrrorHandler(userNameInput, 'Пожалуйста введите имя', 3000);
    errorFlag = true;
  }

  const userPhoneNumberInput = formInputs[1];
  const phoneNumberToArray = userPhoneNumberInput.value.split('');
  const phoneNumberIsValidFlag = phoneNumberToArray.every((item) => {
    return numbers.includes(item);
  });

  if (userPhoneNumberInput.value === '' || phoneNumberIsValidFlag === false) {
    inputErrrorHandler(
      userPhoneNumberInput,
      'Пожалуйста введите корректный телефонный номер',
      3000
    );
    errorFlag = true;
  }

  const userEmailInput = formInputs[2];
  if (!userEmailInput.value.includes('@')) {
    inputErrrorHandler(
      userEmailInput,
      'Пожалуйста введите корректный email',
      3000
    );
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
    userMessage: userMessage,
  };
  if (errorFlag) return;
  const successfullRequerstFlag = sendDataToTgHandler(userData);

  if (!successfullRequerstFlag) {
    notifyUserHandler(
      'Ошибка!',
      'Что-то пошло не так. Пожалуйста попробуйте позже.'
    );
    return; //дописать всплывающее окно для обработки ошибки
  }

  formInputs.forEach((input) => {
    input.value = '';
  });
  notifyUserHandler(
    'Сообщение успешно отправлено!',
    'Благодарю Вас за обращение, я свяжусь с Вами в течение 24 часов.'
  );
};

export default sendButtonClickHandler;
