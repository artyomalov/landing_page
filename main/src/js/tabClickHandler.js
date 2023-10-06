const tabClickHandler = (e) => {
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

export default tabClickHandler;
