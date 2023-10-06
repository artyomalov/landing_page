const scrollToElement = (clickedElement, moveToElementId, offset) => {
  clickedElement.addEventListener('click', () => {
    const moveToElement = document.getElementById(moveToElementId);
    const moveToElementPosition = moveToElement.getBoundingClientRect().top;
    const offsetPosition = moveToElementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  });
};

export default scrollToElement;
