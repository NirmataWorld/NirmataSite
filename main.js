document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logofont');
    const hoverSound = document.getElementById('hover-sound');

    logo.addEventListener('mouseenter', () => {
        hoverSound.play();
    });

    logo.addEventListener('mouseleave', () => {
        hoverSound.pause();
        hoverSound.currentTime = 0;
    });
});
