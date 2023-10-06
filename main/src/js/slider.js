class SliderActions {
  constructor(
    sliderDomElement,
    sliderTapeDomElement,
    diplomasImagesArray,
    sliderButtonRight,
    sliderButtonLeft
  ) {
    this.sliderDomElement = sliderDomElement;
    this.sliderTapeDomElement = sliderTapeDomElement;
    this.diplomasImagesArray = diplomasImagesArray;
    this.sliderButtonRight = sliderButtonRight;
    this.sliderButtonLeft = sliderButtonLeft;
  }
  //   '#dipolomas__slider-window'
  diplomasCounter = 3;
  count = 0;
  sliderWidth;

  rollSlider() {
    this.sliderTapeDomElement.style.transform =
      'translate(-' +
      (this.count * this.sliderWidth) / this.diplomasCounter +
      'px';
  }

  initialize() {
    const windowWidth = window.screen.width;
    if (windowWidth < 770) this.diplomasCounter = 2;
    if (windowWidth < 425) this.diplomasCounter = 1;
    this.sliderWidth = document.querySelector(
      this.sliderDomElement
    ).offsetWidth;
    this.sliderTapeDomElement.style.width =
      this.sliderWidth * this.diplomasImagesArray.length + 'px';
    this.diplomasImagesArray.forEach((image) => {
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

export default SliderActions;
