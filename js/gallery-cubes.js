class GalleryCube {
    constructor(imagePath, container, size = 300) {
        this.imagePath = imagePath;
        this.container = container;
        this.size = size;
        this.scene = new THREE.Scene();
        
        // Adjust the orthographic camera
        const aspect = 1;
        const frustumSize = 1;
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
        this.isHovered = false;
        this.rotationSpeed = 0;

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

        // Set camera position for a true orthographic view
        this.camera.position.set(0.5, 0.5, 0.5);
        this.camera.lookAt(0, 0, 0);

        this.container.addEventListener('mouseenter', () => this.onMouseEnter());
        this.container.addEventListener('mouseleave', () => this.onMouseLeave());
    }

    onMouseEnter() {
        this.isHovered = true;
        this.rotationSpeed = 0.03;
    }

    onMouseLeave() {
        this.isHovered = false;
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        if (this.cube) {
            if (this.isHovered) {
                this.cube.rotation.x += this.rotationSpeed;
                this.cube.rotation.y += this.rotationSpeed;
            } else {
                this.rotationSpeed *= 0.95;
                this.cube.rotation.x += this.rotationSpeed;
                this.cube.rotation.y += this.rotationSpeed;
            }
        }

        this.renderer.render(this.scene, this.camera);
    }
}

function initGallery() {
    const gallery = document.querySelector('.gallery');
    const imagePaths = [
        'images/image (1).png',
        'images/image (1).png',
        'images/image (1).png',
        'images/image (1).png',
    
        // Add more image paths as needed
    ];

    gallery.style.display = 'grid';
    gallery.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    gallery.style.gap = '20px';
    gallery.style.justifyItems = 'center';

    imagePaths.forEach(path => {
        const cubeContainer = document.createElement('div');
        cubeContainer.classList.add('cube-container');
        gallery.appendChild(cubeContainer);

        new GalleryCube(path, cubeContainer, 300);
    });
}

// Call initGallery when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initGallery);