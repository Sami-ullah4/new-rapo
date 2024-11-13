"use strict";
let currentIndex = 0;

// Function to handle the slide movement
function moveSlide(direction) {
  const slides = document.querySelector(".slider-wrapper");
  const totalSlides = slides.children.length;
  const slideWidth = slides.children[0].offsetWidth;

  // Update the current index
  currentIndex += direction;

  // If the index goes out of bounds, reset it
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // Translate the slide container
  slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
