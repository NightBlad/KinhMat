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

// Set the target date and time for the countdown (e.g., December 31, 2024, 23:59:59)
const targetDate = new Date("November 31, 2024 23:59:59").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the results in the corresponding elements
    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

    // Stop the countdown when the target date is reached
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    }
}, 1000);

document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.sliderKinh');
    const slides = sliderContainer.querySelectorAll('img');
    const ellipses = document.querySelectorAll('.slider-child');
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