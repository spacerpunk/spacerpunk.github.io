document.addEventListener('DOMContentLoaded', () => {
    const movingTexts = document.querySelectorAll('moving-text');
    const maxMovement = 10; // maximum pixel movement


    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Calculate movement based on mouse position
        const moveX = (clientX / innerWidth - 0.5) * maxMovement;
        const moveY = (clientY / innerHeight - 0.5) * maxMovement;

        // Apply the movement to all elements with the 'moving-text' class
        movingTexts.forEach(text => {
            text.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
});