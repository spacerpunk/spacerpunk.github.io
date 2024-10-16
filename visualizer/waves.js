let scene, camera, renderer, points, material;
let vertexShader;
let fragmentShader;
let waveform;

const meter = new Tone.Meter();
const fft = new Tone.FFT(1024);
Tone.Master.connect(fft);
Tone.Master.connect(meter);



// Control variables
let pointDensity = 400;
const displacementAmount = 1.2;
const animationSpeed = 0.12;
let pointSize = 2.0;
let noiseScale = 0.15;
const octaves = 3;
let persistence = 0.1;
const glitchDuration = 0.1;
const glitchIntensity = 1.0 ;

let isGlitching = false;
let glitchStartTime = 0;
const container = document.getElementsByClassName("waveform-container")[0];
let width
let height
const waveformSize = 512; // Size of the waveform data array

// Function to get normalized amplitude (0 to 1)
function getNormalizedAmplitude() {
  const amplitude = meter.getValue();
  
  // Convert dB to linear scale
  const linear = Math.pow(10, amplitude / 10);
  
  // Normalize to 0-1 range (assuming max amplitude is 0dB)
  return Math.min(linear, 1);
}

// Function to get dominant frequency in Hz
function getDominantFrequency() {
  const frequencyData = fft.getValue();
  const nyquist = Tone.context.sampleRate / 2;
  const maxIndex = frequencyData.indexOf(Math.max(...frequencyData));
  const dominantFreq = (maxIndex * nyquist) / frequencyData.length;
  
  return dominantFreq;
}

function updateAmplitude() {
  const normalizedAmplitude = getNormalizedAmplitude() + 0.5;
  console.log(`Normalized amplitude: ${normalizedAmplitude.toFixed(2)}`);
  requestAnimationFrame(updateAmplitude);
}

// Update function
function updateFrequency() {
  const frequency = getDominantFrequency();
  const pointDensity = getDominantFrequency();
  console.log(`Dominant frequency: ${frequency.toFixed(2)} Hz`);
  requestAnimationFrame(updateFrequency);
}

//updateFrequency();
//updateAmplitude();

// Load vertex shader
fetch('./visualizer/waveformShader.glsl')
  .then(response => response.text())
  .then(text => {
    vertexShader = text
      .replace('OCTAVES', octaves.toString())
      .replace('PERSISTENCE', persistence.toFixed(2))
      .replace('NOISE_SCALE', noiseScale.toFixed(3))
      .replace('POINT_SIZE', pointSize.toFixed(1));
    return fetch('./visualizer/fragmentShader.glsl');
  })
  .then(response => response.text())
  .then(text => {
    fragmentShader = text;
    initScene();
    initAudio();
  });

function initScene() {
  // Scene setup
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.01, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setClearColor(0x000000, 0); // Set clear color to black with 0 opacity
  //renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setSize(width ,height);  
  container.appendChild(renderer.domElement);

  //document.body.appendChild(renderer.domElement);

  // Camera position
  camera.position.z = 30;
  camera.position.x = 0
  camera.position.y = -50
  camera.rotation.x = 45; // Rotate 45 degrees around X axis
  camera.updateProjectionMatrix(); // Update the camera's projection matrix

  // Controls
  //const controls = new THREE.OrbitControls(camera, renderer.domElement);
  //controls.enable = true;

  // Create geometry
  const geometry = new THREE.BufferGeometry();
  const positions = [];
  for (let x = 0; x < pointDensity; x++) {
    for (let y = 0; y < pointDensity; y++) {
      positions.push(
        (x / pointDensity - 0.5) * 100,
        (y / pointDensity - 0.5) * 100,
        0
      );
    }
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

  // Shader material
  material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
      time: { value: 0 },
      displacementAmount: { value: displacementAmount },
      pointColor: { value: new THREE.Color(1, 1, 1) }, // Initial color (white)
      glitchFactor: { value: 1.5 },
      glitchScale: { value: 0.5 },
      waveform: { value: new Float32Array(waveformSize) }
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });

  // Create points
  points = new THREE.Points(geometry, material);
  scene.add(points);

  // Start animation
  animate();
}


// Glitch effect function
function triggerGlitch() {
  isGlitching = true;
  glitchStartTime = Date.now();
}


// Key press event listener
window.addEventListener('keydown', (event) => {
  if (event.key) { // Spacebar
    triggerGlitch();
  }
});

function initAudio() {
  // Create an audio player and waveform analyzer
  //const player = new Tone.Player("./visualizer/test.mp3").toDestination();
  waveform = new Tone.Waveform(waveformSize);
  Tone.Master.connect(waveform);
  //player.connect(waveform);

  // Start audio on user interaction (e.g., click)
  //document.addEventListener('click', async () => {
  //  await Tone.start();
  //  player.start();
  //});
}

// Animation loop
function animate() {
  
  requestAnimationFrame(animate);
  width = document.getElementsByClassName("waveform-container")[0].getBoundingClientRect().width;
  height = document.getElementsByClassName("waveform-container")[0].getBoundingClientRect().height;

  const currentTime = Date.now();
  const elapsedTime = (currentTime - glitchStartTime) / 1000; // Convert to seconds
  
  if (isGlitching && elapsedTime < glitchDuration) {
    const glitchProgress = elapsedTime / glitchDuration;
    const glitchFactor = glitchIntensity * (1 - glitchProgress);
    material.uniforms.glitchFactor.value = glitchFactor;
  } else {
    isGlitching = false;
    material.uniforms.glitchFactor.value = 0.0;
  }

  // Update waveform data
  if (waveform) {
    material.uniforms.waveform.value = waveform.getValue();
  }

  material.uniforms.time.value += animationSpeed;
  renderer.render(scene, camera);
  
}

// Resize handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  //renderer.setSize(width, height);
});

document.getElementById('initAudio').addEventListener('click', async () => {
  renderer.setSize(width,height);
});

let isDarkTheme;

document.getElementById('themeToggle').addEventListener('click', async () => {
  const blackColor = new THREE.Color(0, 0, 0, 2);
  const whiteColor = new THREE.Color(1, 1, 1);
  if (isDarkTheme) {
    material.uniforms.pointColor.value = whiteColor; 
    isDarkTheme = false;
  } else {
    material.uniforms.pointColor.value = blackColor; 
    isDarkTheme = true;
  }
});


