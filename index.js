document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll(".slideshow");

  slideshows.forEach((slideshow) => {
    const slides = slideshow.querySelectorAll("img");
    let currentSlide = 0;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });
    };

    const autoSwitch = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    };

    showSlide(currentSlide);
    setInterval(autoSwitch, 3000);
  });
});
