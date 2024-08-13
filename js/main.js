// main.js

// Function to navigate to a random lab page
function goToRandomLab() {
    const labs = ['lab1.html', 'lab2.html', 'lab3.html', 'lab4.html'];
    const randomLab = labs[Math.floor(Math.random() * labs.length)];
    window.location.href = randomLab;
}

function initGallery() {
    const gallery = document.querySelector('.gallery');
    const galleryImages = document.querySelectorAll('.gallery img');
    
    // Create vertical title element
    const verticalTitle = document.createElement('div');
    verticalTitle.classList.add('vertical-title');
    document.body.appendChild(verticalTitle);

    galleryImages.forEach((img) => {
        img.addEventListener('mouseenter', () => {
            const title = img.getAttribute('data-title');
            animateVerticalTitle(title, verticalTitle);
        });
    });

    gallery.addEventListener('mouseleave', () => {
        verticalTitle.style.opacity = '0';
        verticalTitle.innerHTML = '';
    });
}

function animateVerticalTitle(title, element) {
    element.innerHTML = '';
    element.style.opacity = '1';
    
    title.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        element.appendChild(span);

        setTimeout(() => {
            span.style.transform = 'translateY(0)';
            span.style.opacity = '1';
        }, 50 * index);
    });
}

// Call initGallery when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initGallery);

function animateTitle(loop = false) {
    const titleElement = document.getElementById('animated-title');
    const title = titleElement.textContent;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    let interval = 100; // milliseconds between each character update
    let iterations = 5; // number of random characters before settling on the correct one

    titleElement.textContent = ''; // Clear the title at the start of animation

    title.split('').forEach((char, index) => {
        for (let i = 0; i < iterations; i++) {
            setTimeout(() => {
                let randomChar = chars[Math.floor(Math.random() * chars.length)];
                titleElement.textContent = titleElement.textContent.slice(0, index) + randomChar + ' '.repeat(title.length - index - 1);
            }, index * interval * iterations + i * interval);
        }

        setTimeout(() => {
            titleElement.textContent = titleElement.textContent.slice(0, index) + char + ' '.repeat(title.length - index - 1);
        }, index * interval * iterations + iterations * interval);
    });

    if (loop) {
        setTimeout(() => {
            animateTitle(true);
        }, 10000); // 10 seconds
    }
}

// Call the animation function when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateTitle(true);
    initGallery();
});