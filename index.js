document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll(".slideshow");

  slideshows.forEach((slideshow) => {
    const slides = slideshow.querySelectorAll("img");
    let currentSlide = 0;

    // Show slide
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });
    };

    // Automatic Slideshow
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000); // 3 seconds per slide

    // Manual Controls
    slideshow.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    // Initialize
    showSlide(currentSlide);
  });
});
