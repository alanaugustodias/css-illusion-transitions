function setFirstAnimations() {
  window.setTimeout(() => {
    Object.entries(window.sliders).forEach(([key, slider]) => {
      window.firstSlide(key, slider.firstDirection, Array.isArray(slider.secondSlideOrder));
    });
  });

  Object.entries(window.sliders).forEach(([key, slider]) => {
    if (slider.initialTimeout) {
      window.setTimeout(() => {
        window.secondSlide(key, slider.secondSlideOrder[0], slider.secondSlideOrder[1]);
        window.setTransitionInterval(key, slider.isYAxis);
      }, slider.initialTimeout);
    }
    else {
      window.setTransitionInterval(key);
    }
  });
}

setFirstAnimations();
window.setupDebugMode();
