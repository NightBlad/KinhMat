function applyDynamicScale() {
    const homeElement = document.querySelector('.home');
    const minWidth = 430;
    const scaleFactor = 0.295;

    if (window.innerWidth >= minWidth) {
        const dynamicScale = (window.innerWidth / minWidth) * scaleFactor;
        homeElement.style.transform = `scale(${dynamicScale})`;
        homeElement.style.transformOrigin = 'top left';
    } else {
        homeElement.style.transform = '';
        homeElement.style.transformOrigin = '';
    }
}

// Apply the scale when the page loads
window.addEventListener('load', applyDynamicScale);

// Apply the scale when the window is resized
window.addEventListener('resize', applyDynamicScale);

document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = sliderContainer.querySelectorAll('img');
    const ellipses = document.querySelectorAll('.ellipse-div');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateY(${(i - index) * 100}%)`;
        });
        ellipses.forEach((ellipse, i) => {
            ellipse.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Initialize the slider
    showSlide(currentIndex);

    // Set interval for sliding effect
    setInterval(nextSlide, 4000); // Change slide every 4 seconds
    // Add click event listeners to ellipses
    ellipses.forEach((ellipse, index) => {
        ellipse.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });
});
