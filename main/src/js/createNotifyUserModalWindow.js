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

export default createNotifyUserModalWindow