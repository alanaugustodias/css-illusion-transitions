window.sliders = {
  '270-90': {
    position: '',
    dom: document.getElementById('slider-270-90'),
    firstDirection: 'right',
  },
  '0-180': {
    position: '',
    dom: document.getElementById('slider-0-180'),
    initialTimeout: 1000,
    firstDirection: 'bottom',
    secondSlideOrder: ['bottom', 'top'],
    isYAxis: true
  },
  '292-112': {
    position: '',
    dom: document.getElementById('slider-292-112'),
    initialTimeout: 1750,
    firstDirection: 'right',
    secondSlideOrder: ['right', 'left'],
  },
  '247-67': {
    position: '',
    dom: document.getElementById('slider-247-67'),
    initialTimeout: 250,
    firstDirection: 'left',
    secondSlideOrder: ['left', 'right'],
  },
  '315-135': {
    position: '',
    dom: document.getElementById('slider-315-135'),
    initialTimeout: 1500,
    firstDirection: 'right',
    secondSlideOrder: ['right', 'left'],
  },
  '225-45': {
    position: '',
    dom: document.getElementById('slider-225-45'),
    initialTimeout: 500,
    firstDirection: 'left',
    secondSlideOrder: ['left', 'right'],
  },
  '337-157': {
    position: '',
    dom: document.getElementById('slider-337-157'),
    initialTimeout: 1250,
    isRightLeft: true,
    firstDirection: 'right',
    secondSlideOrder: ['right', 'left'],
  },
  '202-22': {
    position: '',
    dom: document.getElementById('slider-202-22'),
    initialTimeout: 750,
    firstDirection: 'left',
    secondSlideOrder: ['left', 'right'],
  }
};

window.setTransitionInterval = function setTransitionInterval(sliderIndex, isYAxis) {
  const initialPosition = isYAxis ? 'top' : 'left';
  const targetPosition = isYAxis ? 'bottom' : 'right';
  const initialAxis = isYAxis ? 'slide-top' : 'slide-left';
  const targetAxis = isYAxis ? 'slide-bottom' : 'slide-right';
  setInterval(() => {
    if (sliders[sliderIndex].position === initialPosition) {
      sliders[sliderIndex].dom.classList.replace(initialAxis, targetAxis);
      sliders[sliderIndex].position = targetPosition;
    }
    else {
      sliders[sliderIndex].dom.classList.replace(targetAxis, initialAxis);
      sliders[sliderIndex].position = initialPosition;
    }
  }, 2000);
}

window.firstSlide = function firstSlide(sliderIndex, direction, fast) {
  if (fast) {
    sliders[sliderIndex].dom.classList.add(`first-slide-${direction}`);
  }
  sliders[sliderIndex].dom.classList.add(`slide-${direction}`);
  sliders[sliderIndex].position = direction;
}

window.secondSlide = function secondSlide(sliderIndex, oldDirection, newDirection) {
  sliders[sliderIndex].dom.classList.remove(`first-slide-${oldDirection}`);
  sliders[sliderIndex].dom.classList.replace(`slide-${oldDirection}`, `slide-${newDirection}`);
  sliders[sliderIndex].position = newDirection;
}
