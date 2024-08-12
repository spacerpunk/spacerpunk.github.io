class GalleryCube {
    constructor(imagePath, container, size = 300, projectName) {
        this.imagePath = imagePath;
        this.container = container;
        this.size = size;
        this.projectName = projectName;
        this.scene = new THREE.Scene();
        
        const aspect = 1;
        const frustumSize = 1.4;
        this.camera = new THREE.OrthographicCamera(
            frustumSize * aspect / -2, 
            frustumSize * aspect / 2, 
            frustumSize / 2, 
            frustumSize / -2, 
            0.1, 
            1000
        );
        
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.cube = null;
        this.frontView = new THREE.Euler(0, 0, 0);
        this.angledView = new THREE.Euler(1.57, 0, 0);
        this.currentRotation = new THREE.Euler(0, 0, 0);

        this.init();
    }

    init() {
        this.renderer.setSize(this.size, this.size);
        this.container.appendChild(this.renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(this.imagePath, (texture) => {
            const material = new THREE.MeshBasicMaterial({ map: texture });
            this.cube = new THREE.Mesh(geometry, material);
            this.scene.add(this.cube);
            
            this.animate();
        });

        this.camera.position.set(0, 0, 1);
        this.camera.lookAt(0, 0, 0);

        this.container.addEventListener('mouseenter', () => {
            this.onMouseEnter();
            showOverlay(this.projectName);
        });
        this.container.addEventListener('mouseleave', () => {
            this.onMouseLeave();
            hideOverlay();
        });
    }

    onMouseEnter() {
        this.tweenToView(this.angledView);
    }

    onMouseLeave() {
        this.tweenToView(this.frontView);
    }

    tweenToView(targetView) {
        const duration = 800;
        const start = { x: this.currentRotation.x, y: this.currentRotation.y, z: this.currentRotation.z };
        const end = { x: targetView.x, y: targetView.y, z: targetView.z };
        const startTime = Date.now();

        const animate = () => {
            const now = Date.now();
            const timeElapsed = now - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            this.currentRotation.x = start.x + (end.x - start.x) * progress;
            this.currentRotation.y = start.y + (end.y - start.y) * progress;
            this.currentRotation.z = start.z + (end.z - start.z) * progress;

            if (this.cube) {
                this.cube.rotation.copy(this.currentRotation);
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);
    }
}

function initGallery() {
    const gallery = document.querySelector('.gallery');
    const projects = [
        { path: 'images/image (1).png', name: 'Project 1' },
        { path: 'images/image (2).png', name: 'Project 2' },
        { path: 'images/image (3).png', name: 'Project 3' },
        { path: 'images/image (4).png', name: 'Project 4' },
        // Add more projects as needed
    ];

    gallery.style.display = 'grid';
    gallery.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    gallery.style.gap = '20px';
    gallery.style.justifyItems = 'center';

    projects.forEach(project => {
        const cubeContainer = document.createElement('div');
        cubeContainer.classList.add('cube-container');
        gallery.appendChild(cubeContainer);

        new GalleryCube(project.path, cubeContainer, 300, project.name);
    });

    createOverlay();
}

function createOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'project-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    overlay.style.display = 'none';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';
    overlay.style.color = 'white';
    overlay.style.fontSize = '10vw';
    overlay.style.fontFamily = 'Arial, sans-serif';
    overlay.style.textAlign = 'center';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s ease';

    document.body.appendChild(overlay);
}

function showOverlay(projectName) {
    const overlay = document.getElementById('project-overlay');
    overlay.textContent = projectName;
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 200);
}

function hideOverlay() {
    const overlay = document.getElementById('project-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
}

// Call initGallery when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initGallery);