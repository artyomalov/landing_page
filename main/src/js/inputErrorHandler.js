const inputErrrorHandler = (element, message, timeout) => {
  element.placeholder = message;
  element.classList.toggle('contact__form-input-warning');
  setTimeout(() => {
    return element.classList.toggle('contact__form-input-warning');
  }, timeout);
  return;
};


export default inputErrrorHandler