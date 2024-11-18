function applyDynamicScale() {
const homeElement = document.querySelector('body');
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