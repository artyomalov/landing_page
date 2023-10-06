import createNotifyUserModalWindow from './createNotifyUserModalWindow';

const notifyUserHandler = (notificationTitle, notificationText) => {
  const modalWindowHTML = createNotifyUserModalWindow(
    notificationTitle,
    notificationText
  );
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

export default notifyUserHandler;
