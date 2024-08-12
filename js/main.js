// main.js

// Function to navigate to a random lab page
function goToRandomLab() {
    const labs = ['lab1.html', 'lab2.html', 'lab3.html', 'lab4.html'];
    const randomLab = labs[Math.floor(Math.random() * labs.length)];
    window.location.href = randomLab;
}

//// Function to show project overlay
//function showProjectOverlay(projectName) {
//    let overlay = document.getElementById('project-overlay');
//    if (!overlay) {
//        createOverlay();
//        overlay = document.getElementById('project-overlay');
//    }
//    overlay.textContent = projectName;
//    overlay.style.display = 'flex';
//    setTimeout(() => {
//        overlay.style.opacity = '1';
//    }, 10);
//}
//
//// Function to hide project overlay
//function hideProjectOverlay() {
//    const overlay = document.getElementById('project-overlay');
//    if (overlay) {
//        overlay.style.opacity = '0';
//        setTimeout(() => {
//            overlay.style.display = 'none';
//        }, 300);
//    }
//}
//
//// Function to create overlay if it doesn't exist
//function createOverlay() {
//    const overlay = document.createElement('div');
//    overlay.id = 'project-overlay';
//    overlay.style.position = 'fixed';
//    overlay.style.top = '0';
//    overlay.style.left = '0';
//    overlay.style.width = '100%';
//    overlay.style.height = '100%';
//    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
//    overlay.style.display = 'none';
//    overlay.style.justifyContent = 'center';
//    overlay.style.alignItems = 'center';
//    overlay.style.zIndex = '1000';
//    overlay.style.color = 'white';
//    overlay.style.fontSize = '10vw';
//    overlay.style.fontFamily = 'Arial, sans-serif';
//    overlay.style.textAlign = 'center';
//    overlay.style.opacity = '0';
//    overlay.style.transition = 'opacity 0.3s ease';
//    document.body.appendChild(overlay);
//}
//
//// Function to initialize the gallery
//function initGallery() {
//    const galleryImages = document.querySelectorAll('.gallery img');
//    galleryImages.forEach((img, index) => {
//        img.addEventListener('mouseenter', () => {
//            showProjectOverlay(`Project ${index + 1}`);
//        });
//        img.addEventListener('mouseleave', hideProjectOverlay);
//    });
//}
//
//// Call initGallery when the DOM is fully loaded
//document.addEventListener('DOMContentLoaded', initGallery);