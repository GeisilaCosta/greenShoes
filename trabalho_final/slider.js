function autoCarousel() {
    let slides = document.querySelectorAll('.slider input[type="radio"]');
    let currentSlide = 0;

    setInterval(function() {
        slides[currentSlide].checked = true;
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
    }, 6000);
}

window.addEventListener('load', autoCarousel);