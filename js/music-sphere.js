let scene, camera, renderer, sphere;
let noise = new THREE.TextureLoader().load('path/to/noise_texture.jpg');
let synth;

function init() {
    // Set up Three.js scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('sphere-container').appendChild(renderer.domElement);

    // Create sphere
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.MeshPhongMaterial({
        color: 0x00ff00,
        specular: 0x555555,
        shininess: 30,
        displacementMap: noise,
        displacementScale: 0.1
    });
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add light
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    camera.position.z = 3;

    // Set up Tone.js
    synth = new Tone.Synth().toDestination();
    Tone.start();

    // Start animation
    animate();
}

function animate() {
    requestAnimationFrame(animate);

    // Rotate sphere
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    renderer.render(scene, camera);
}

function playSynth(frequency) {
    synth.triggerAttackRelease(frequency, "8n");
    
    // Update displacement based on frequency
    let displacement = (frequency - 200) / 1000; // Adjust this calculation as needed
    sphere.material.displacementScale = displacement;
}

// Event listener for mouse movement
document.addEventListener('mousemove', (event) => {
    let frequency = (event.clientY / window.innerHeight) * 1000 + 200; // Map Y position to frequency between 200 and 1200 Hz
    playSynth(frequency);
});

// Call init when the window loads
window.onload = init;