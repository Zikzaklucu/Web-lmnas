// Countdown section
document.addEventListener("DOMContentLoaded", () => {
  var countdownDate = new Date("Oct 26, 2025 00:00:00").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (daysElement) daysElement.innerHTML = days;
    if (hoursElement) hoursElement.innerHTML = hours;
    if (minutesElement) minutesElement.innerHTML = minutes;
    if (secondsElement) secondsElement.innerHTML = seconds;

    // If the countdown is finished, display some text
    if (distance < 0) {
      clearInterval(x);
      if (daysElement) daysElement.innerHTML = "0";
      if (hoursElement) hoursElement.innerHTML = "0";
      if (minutesElement) minutesElement.innerHTML = "0";
      if (secondsElement) secondsElement.innerHTML = "0";
    }
  }, 1000);

  // Carousel section
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const slides = document.querySelectorAll(".card");

  let currentIndex = 0;

  const updateSlider = () => {
    slides.forEach((slide, index) => {
      slide.classList.remove("active", "prev", "next");

      let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      let nextIndex = (currentIndex + 1) % slides.length;

      if (index === currentIndex) {
        slide.classList.add("active");
      } else if (index === prevIndex) {
        slide.classList.add("prev");
      } else if (index === nextIndex) {
        slide.classList.add("next");
      }
    });
  };

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

  updateSlider();
});
