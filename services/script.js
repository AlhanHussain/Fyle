const slider = document.querySelector('.slider');
let isTransitioning = false;

function slide() {
    if (!isTransitioning) {
        isTransitioning = true;
        const lastSlide = slider.lastElementChild;
        slider.style.transition = 'none';
        slider.insertBefore(lastSlide, slider.firstElementChild);
        slider.style.transform = `translateX(-${lastSlide.offsetWidth}px)`;
        setTimeout(() => {
            slider.style.transition = 'transform 0.9s ease';
            slider.style.transform = 'translateX(0)';
            setTimeout(() => {
                isTransitioning = false;
            }, 900); // Adjust to the duration of your transition
        }, 50);
    }
}

slide(); // Start sliding

setInterval(slide, 2000); // Change slide every 2 seconds
