import * as THREE from 'three';
import * as Tone from 'tone';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';

// at top of your main.js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

let ambienceAudio;
const AMBIENCE_VOLUME = 0.85;
const DUCKED_VOLUME = 0.1;
// new global for generative ambience
let genAmbienceAudio;
const GEN_AMBIENCE_VOLUME = 0.3; // normal level
const GEN_DUCK_VOLUME = 0.05; // when hovering a particle

// Resume and _then_ play ambience on first click:
window.addEventListener(
  'click',
  () => {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().then(() => {
        // Now it’s safe to play any audio
        if (!ambienceAudio) {
          ambienceAudio = new Audio('/audio/ambience/your-ambience.mp3');
          ambienceAudio.loop = true;
          ambienceAudio.volume = AMBIENCE_VOLUME;
        }
        ambienceAudio.play().catch(() => {}); // swallow any remaining rejections
      });
    }
  },
  { once: true }
);

// --- Categories Configuration ---
// Each category defines an "items" array with name, description, image URL, and link,
// plus a particleColor, a background color (bgColor), and an audioPath.
const categories = {
  music: {
    items: [
      {
        name: 'Apollo',
        description: 'Piano, Apollo Coms, Minimal',
        image: '/images/music/jazz.jpg',
        link: 'https://spacerpunk.bandcamp.com/track/apollo',
        audio: '/audio/music/apollo.mp3',
      },
      {
        name: 'El Cassette',
        description: 'OST para un mini corto.',
        image: '/images/music/abismo.png',
        link: 'https://spacerpunk.bandcamp.com/track/the-tape',
        audio: '/audio/music/tape.mp3',
      },
      {
        name: 'Abismo',
        description: 'Series Main Theme',
        image: '/images/music/abismo.png',
        link: 'https://spacerpunk.bandcamp.com/album/abismo-nomofobia-music-from-the-original-series',
        audio: '/audio/music/abismo.mp3',
      },
      {
        name: 'Analog Sunset',
        description: 'Synthwave Chill',
        image: '/images/music/blues.jpg',
        link: 'https://spacerpunk.bandcamp.com/album/controlled-machines-2',
        audio: '/audio/music/analogsunset.mp3',
      },
      {
        name: 'Culater',
        description: 'Culater - Remix Synthwave',
        image: '/images/music/classical.jpg',
        link: 'https://open.spotify.com/intl-es/album/2ajloVhXqsYIL0ENBML93X?si=oIViuUDXSkG9WFGhHY764w',
        audio: '/audio/music/culater.mp3',
      },
      {
        name: 'Pale Blue Dot',
        description: 'Piano + Synth + Inspirational',
        image: '/images/music/classical.jpg',
        link: 'https://spacerpunk.bandcamp.com/album/and-then-there-was-nothing',
        audio: '/audio/music/dot.mp3',
      },
      {
        name: 'Wanderes',
        description: 'Space X Inspiration Track',
        image: '/images/music/classical.jpg',
        link: 'https://spacerpunk.bandcamp.com/track/wanderers',
        audio: '/audio/music/spacex.mp3',
      },
      {
        name: 'Mates con ella',
        description: 'Piano',
        image: '/images/music/classical.jpg',
        link: 'https://spacerpunk.bandcamp.com/music',
        audio: '/audio/music/friday.mp3',
      },
      {
        name: 'Melody for Johann',
        description: 'Piano track in memory of Johann Johannsson',
        image: '/images/music/classical.jpg',
        link: 'https://spacerpunk.bandcamp.com/album/the-death-of-a-beautiful-thing',
        audio: '/audio/music/johannsson.mp3',
      },
      {
        name: 'Maradona Phonk',
        description: 'Phonk track for Clothing Brand',
        image: '/images/music/classical.jpg',
        link: 'https://spacerpunk.bandcamp.com/album/atea-tracks',
        audio: '/audio/music/maradona.mp3',
      },
      {
        name: 'Nada',
        description: 'Piano en el fin del mundo.',
        image: '/images/music/classical.jpg',
        link: 'https://spacerpunk.bandcamp.com/album/and-then-there-was-nothing',
        audio: '/audio/music/nothing.mp3',
      },
      {
        name: 'Rise',
        description: 'SFX',
        image: '/images/music/classical.jpg',
        link: 'https://spacerpunk.bandcamp.com/album/pale-blue-album',
        audio: '/audio/music/rise.mp3',
      },
      {
        name: 'Seguir',
        description: 'Relentless Pianito',
        image: '/images/music/classical.jpg',
        link: 'https://spacerpunk.bandcamp.com/album/the-death-of-a-beautiful-thing',
        audio: '/audio/music/relentless.mp3',
      },
      {
        name: 'Siamo Fuori',
        description: 'Track para una marca de ropa',
        image: '/images/music/classical.jpg',
        link: 'https://spacerpunk.bandcamp.com/album/atea-tracks',
        audio: '/audio/music/siamofuori.mp3',
      },
      {
        name: 'Summer Time',
        description: 'Synthwave Chill',
        image: '/images/music/classical.jpg',
        link: 'https://spacerpunk.bandcamp.com/album/controlled-machines-2',
        audio: '/audio/music/summer.mp3',
      },
      {
        name: 'The Lag in All of Us',
        description: 'Cyberpunk Ambient',
        image: '/images/music/classical.jpg',
        link: 'https://spacerpunk.bandcamp.com/album/the-lag-in-all-of-us',
        audio: '/audio/music/us.mp3',
      },
      {
        name: 'Entre las palabras',
        description: 'Sad Piano',
        image: '/images/music/classical.jpg',
        link: 'https://spacerpunk.bandcamp.com/album/goodbye-on-a-train-station',
        audio: '/audio/music/words.mp3',
      },
      {
        name: 'Liminal Screen',
        description: 'Piano + Ambience',
        image: '/images/music/classical.jpg',
        link: 'https://www.youtube.com/shorts/h5CZlWi54hk',
        audio: '/audio/music/liminal.mp3',
      },
    ],
    particleColor: '#464646',
    bgColor: '#ffffff',
  },
  'sound design': {
    items: [
      {
        name: 'Boom',
        description: 'Deep sound effects.',
        image: '/images/sounddesign/boom.jpg',
        link: 'https://example.com/boom',
        audio: '/audio/sounddesign/bravo.mp3',
      },
      {
        name: 'Clash',
        description: 'Sharp clashes and impacts.',
        image: '/images/sounddesign/clash.jpg',
        link: 'https://example.com/clash',
        audio: '/audio/sounddesign/bravo.mp3',
      },
      {
        name: 'Whisper',
        description: 'Subtle sound textures.',
        image: '/images/sounddesign/whisper.jpg',
        link: 'https://example.com/whisper',
        audio: '/audio/sounddesign/bravo.mp3',
      },
      {
        name: 'Echo',
        description: 'Ambient echoes.',
        image: '/images/sounddesign/echo.jpg',
        link: 'https://example.com/echo',
        audio: '/audio/sounddesign/bravo.mp3',
      },
      {
        name: 'Pulse',
        description: 'Rhythmic sound pulses.',
        image: '/images/sounddesign/pulse.jpg',
        link: 'https://example.com/pulse',
        audio: '/audio/sounddesign/bravo.mp3',
      },
    ],
    particleColor: '#464646',
    bgColor: '#ffffff',
  },
  generative: {
    items: [
      {
        name: 'Gen1',
        description: 'Algorithmic soundscapes.',
        image: '/images/generative/gen1.jpg',
        link: 'https://example.com/gen1',
        audio: '/audio/generative/charlie.mp3',
      },
      {
        name: 'Gen2',
        description: 'Dynamic generative patterns.',
        image: '/images/generative/gen2.jpg',
        link: 'https://example.com/gen2',
        audio: '/audio/generative/charlie.mp3',
      },
      {
        name: 'Gen3',
        description: 'Evolving sonic textures.',
        image: '/images/generative/gen3.jpg',
        link: 'https://example.com/gen3',
        audio: '/audio/generative/charlie.mp3',
      },
      {
        name: 'Gen4',
        description: 'Complex rhythmic algorithms.',
        image: '/images/generative/gen4.jpg',
        link: 'https://example.com/gen4',
        audio: '/audio/generative/charlie.mp3',
      },
      {
        name: 'Gen5',
        description: 'Immersive generative tones.',
        image: '/images/generative/gen5.jpg',
        link: 'https://example.com/gen5',
        audio: '/audio/generative/charlie.mp3',
      },
    ],
    particleColor: '#464646',
    bgColor: '#ffffff',
  },
};

let currentCategory = 'music'; // default category

// --- Core Three.js Variables ---
let scene, camera, renderer, raycaster;
const particles = [];
const tooltip = document.getElementById('tooltip');

// --- Movement & Camera Control Variables ---
//let moveForward = false;
//let moveBackward = false;
let scrollVelocity = 0;
const SCROLL_FACTOR = 0.005;
const DECAY_RATE = 1.5;

//listen for wheel events
window.addEventListener('wheel', (e) => {
  scrollVelocity += -e.deltaY * SCROLL_FACTOR;
});

const clock = new THREE.Clock();
const velocity = new THREE.Vector3();
const mouseVec = new THREE.Vector2(); // used for raycasting & camera control

// To track the currently hovered particle (for tooltip & audio)
let lastHovered = null;

// Audio fade duration in milliseconds
const fadeDuration = 1000;

// We'll use a shared shader material for particles so we can update its time uniform.
let sharedShaderMaterial;

// --- Audio Fade Helper Functions ---
function fadeInAudio(audio, duration = fadeDuration) {
  audio.volume = 0;
  if (audio.paused) audio.play();
  const stepTime = 50;
  const steps = duration / stepTime;
  let currentStep = 0;
  const fadeInInterval = setInterval(() => {
    currentStep++;
    audio.volume = Math.min(currentStep / steps, 1);
    if (currentStep >= steps) clearInterval(fadeInInterval);
  }, stepTime);
}

function fadeOutAudio(audio, duration = fadeDuration) {
  if (!audio) return;
  const stepTime = 50;
  const steps = duration / stepTime;
  let currentStep = 0;
  const initialVolume = audio.volume;
  const fadeOutInterval = setInterval(() => {
    currentStep++;
    audio.volume = Math.max(initialVolume * (1 - currentStep / steps), 0);
    if (currentStep >= steps) {
      clearInterval(fadeOutInterval);
      audio.pause();
      audio.currentTime = 0;
      audio.volume = initialVolume;
    }
  }, stepTime);
}

// --- Function to Spawn Particles for a Given Category ---
function spawnParticles(category) {
  // clean up old meshes
  particles.forEach((p) => scene.remove(p));
  particles.length = 0;

  currentCategory = category;
  const cfg = categories[category];
  renderer.setClearColor(cfg.bgColor);

  // pick a simple geometry per category
  let geo;
  switch (category) {
    case 'music':
      geo = new THREE.SphereGeometry(1, 16, 16);
      break;
    case 'sound design':
      geo = new THREE.BoxGeometry(1, 1, 1);
      break;
    case 'generative':
      geo = new THREE.BoxGeometry(1, 1, 1);
      break;
    default:
      geo = new THREE.SphereGeometry(1, 16, 16);
  }

  // prototype radial-gradient material
  const protoMat = new THREE.ShaderMaterial({
    uniforms: {
      uInner: { value: new THREE.Color(cfg.particleColor) },
      uOuter: {
        value: new THREE.Color(cfg.bgColor)
          .clone()
          .lerp(new THREE.Color(cfg.particleColor), 0.1),
      },
    },
    vertexShader: `
      varying vec3 vNormal;
      void main(){
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uInner;
      uniform vec3 uOuter;
      varying vec3 vNormal;
      void main(){
        float t = clamp(1.0 - vNormal.z, 0.0, 1.0);
        vec3 color = mix(uInner, uOuter, t);
        gl_FragColor = vec4(color,1.0);
      }
    `,
    lights: false,
    depthWrite: true,
  });

  const isGenerative = category === 'generative';
  // define a C minor scale
  const scale = ['C4', 'D4', 'D#4', 'F4', 'G4', 'G#4', 'A#4', 'C5'];

  const N = 80;
  for (let i = 0; i < N; i++) {
    // **make sure we declare item here before using it**
    const item = cfg.items[i % cfg.items.length];

    const mat = protoMat.clone();
    const mesh = new THREE.Mesh(geo, mat);

    // random position
    mesh.position.set(
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100
    );

    // random base scale
    const base = 0.4 + Math.random() * 1.0;
    mesh.scale.set(base, base, base);
    mesh.userData.baseScale = base;

    // metadata & drift & audio
    let audio = null;
    if (item.audio) {
      audio = new Audio(item.audio);
      // optional: feature-detect support...
      const ext = item.audio.split('.').pop().toLowerCase();
      const mime =
        ext === 'mp3'
          ? 'audio/mpeg'
          : ext === 'ogg'
          ? 'audio/ogg; codecs="vorbis"'
          : '';
      if (mime && audio.canPlayType && audio.canPlayType(mime) === '') {
        audio = null;
      }
    }

    mesh.userData = {
      ...mesh.userData,
      name: item.name,
      description: item.description,
      //image: item.image,
      link: item.link,
      audio: audio,
      drift: new THREE.Vector3(
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5
      ),
    };

    if (isGenerative) {
      // create a synth for this mesh
      const synth = new Tone.Synth({
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.02, decay: 0.1, sustain: 0.3, release: 1 },
      }).toDestination();

      // build a random 8-note melody from the scale
      const melody = Array.from(
        { length: 8 },
        () => scale[Math.floor(Math.random() * scale.length)]
      );

      // store in userData
      mesh.userData.melodySynth = synth;
      mesh.userData.melodyNotes = melody;
      mesh.userData.melodyIndex = 0;
    }

    scene.add(mesh);
    particles.push(mesh);
  }
}

// --- Post-Processing Setup ---
let composer, renderPass, bloomPass, filmPass, chromaPass;
function initPostProcessing() {
  composer = new EffectComposer(renderer);
  renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  // UnrealBloomPass for bloom effect
  const bloomParams = {
    exposure: 0.1,
    bloomStrength: 0.1,
    bloomThreshold: 0,
    bloomRadius: 0.1,
  };
  bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    bloomParams.bloomStrength,
    bloomParams.bloomRadius,
    bloomParams.bloomThreshold
  );
  composer.addPass(bloomPass);

  // FilmPass for film grain and scanlines: parameters (noise intensity, scanline intensity, scanline count, grayscale)
  filmPass = new FilmPass(0.35, 0.025, 648, false);
  composer.addPass(filmPass);

  // Chromatic aberration via RGBShiftShader
  chromaPass = new ShaderPass(RGBShiftShader);
  // Set uniform 'amount' to control the intensity of the RGB shift (subtle effect)
  chromaPass.uniforms['amount'].value = 0.001;
  composer.addPass(chromaPass);
}

// --- Initialization ---
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 50);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  renderer.setClearColor(categories[currentCategory].bgColor);

  raycaster = new THREE.Raycaster();

  spawnParticles('music');
  initPostProcessing();

  window.addEventListener('resize', onWindowResize, false);

  document.addEventListener(
    'mousemove',
    (event) => {
      mouseVec.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseVec.y = -(event.clientY / window.innerHeight) * 2 + 1;
    },
    false
  );

  //document.addEventListener('keydown', (event) => {
  //  if (event.code === 'KeyW') moveForward = true;
  //  if (event.code === 'KeyS') moveBackward = true;
  //});
  //document.addEventListener('keyup', (event) => {
  //  if (event.code === 'KeyW') moveForward = false;
  //  if (event.code === 'KeyS') moveBackward = false;
  //});

  // document.querySelectorAll('#navbar a').forEach((link) => {
  //   link.addEventListener('click', (event) => {
  //     event.preventDefault();
  //     if (link.hasAttribute('data-category')) {
  //       const selectedCategory = link.getAttribute('data-category');
  //       spawnParticles(selectedCategory);
  //     } else if (link.hasAttribute('data-popup')) {
  //       const popupType = link.getAttribute('data-popup');
  //       const modal = document.getElementById(`modal-${popupType}`);
  //       if (modal) modal.style.display = 'flex';
  //     }
  //   });
  // });

  document.querySelectorAll('#navbar a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      if (link.hasAttribute('data-category')) {
        const selectedCategory = link.getAttribute('data-category');

        // Cross-fade ambiences over 2 seconds (2000 ms)
        if (selectedCategory === 'generative') {
          // Fade out the music ambience
          if (ambienceAudio) fadeOutAudio(ambienceAudio, 2000);
          // Start & fade in the generative ambience
          if (genAmbienceAudio) {
            genAmbienceAudio.play().catch(() => {});
            fadeInAudio(genAmbienceAudio, 2000);
          }
        } else {
          // Fade out the generative ambience
          if (genAmbienceAudio) fadeOutAudio(genAmbienceAudio, 2000);
          // Start & fade in the music ambience
          if (ambienceAudio) {
            ambienceAudio.play().catch(() => {});
            fadeInAudio(ambienceAudio, 2000);
          }
        }

        // Now spawn the new set of particles
        spawnParticles(selectedCategory);
      } else if (link.hasAttribute('data-popup')) {
        const popupType = link.getAttribute('data-popup');
        const modal = document.getElementById(`modal-${popupType}`);
        if (modal) modal.style.display = 'flex';
      }
    });
  });

  document.querySelectorAll('.modal .close').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').style.display = 'none';
    });
  });

  document.addEventListener('click', onDocumentClick, false);

  ambienceAudio = new Audio('/audio/ambience/ambiente2.mp3');
  ambienceAudio.loop = true;
  ambienceAudio.volume = AMBIENCE_VOLUME;
  ambienceAudio.play().catch(() => {});

  genAmbienceAudio = new Audio('/audio/ambience/ambiente1.mp3');
  genAmbienceAudio.loop = true;
  genAmbienceAudio.volume = 0;
}

// --- Document Click Handler ---
function onDocumentClick(event) {
  if (event.target.closest('#navbar') || event.target.closest('.modal')) return;

  const clickMouse = new THREE.Vector2();
  clickMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  clickMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(clickMouse, camera);
  const intersects = raycaster.intersectObjects(particles);
  if (intersects.length > 0) {
    const clicked = intersects[0].object;
    const link = clicked.userData.link;
    if (link) window.open(link, '_blank');
  }
}

// --- Window Resize Handler ---
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
}

// --- Animation Loop ---
function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  // 1) Drift & rotation
  particles.forEach((p) => {
    p.position.addScaledVector(p.userData.drift, delta);
    p.rotation.x += 0.1 * delta;
    p.rotation.y += 0.1 * delta;
  });

  // 2) Camera parallax
  const maxTilt = 0.1,
    smoothing = 0.02;
  const tx = mouseVec.y * maxTilt,
    ty = mouseVec.x * maxTilt;
  camera.rotation.x += (tx - camera.rotation.x) * smoothing;
  camera.rotation.y += (ty - camera.rotation.y) * smoothing;

  // 3) Scroll movement
  const forward = new THREE.Vector3();
  camera.getWorldDirection(forward);
  forward.y = 0;
  forward.normalize();
  camera.position.addScaledVector(forward, scrollVelocity * delta);
  scrollVelocity += (0 - scrollVelocity) * DECAY_RATE * delta;

  // 4) Raycast
  raycaster.setFromCamera(mouseVec, camera);
  const hits = raycaster.intersectObjects(particles);
  const hovered = hits.length ? hits[0].object : null;

  // 5) Manage background audio
  if (currentCategory === 'generative') {
    // only ensure generative ambience is playing
    if (genAmbienceAudio.paused) {
      genAmbienceAudio.play().catch(() => {});
    }
    // no ducking or pausing of music ambience here
  } else {
    // ensure music ambience is playing
    if (ambienceAudio.paused) {
      ambienceAudio.play().catch(() => {});
    }
    // duck/restore on hover
    const musTarget = hovered ? DUCKED_VOLUME : AMBIENCE_VOLUME;
    ambienceAudio.volume += (musTarget - ambienceAudio.volume) * 0.05;

    // do not touch genAmbienceAudio here
  }

  // 6) Scale & color
  particles.forEach((p) => {
    const base = p.userData.baseScale;
    const isH = p === hovered;
    const tScale = isH ? base * 1.3 : base;
    const f = 0.1;
    p.scale.x += (tScale - p.scale.x) * f;
    p.scale.y += (tScale - p.scale.y) * f;
    p.scale.z += (tScale - p.scale.z) * f;

    const orig = new THREE.Color(categories[currentCategory].particleColor);
    const high = orig.clone().lerp(new THREE.Color('#d92906'), 1.0);
    p.material.uniforms.uInner.value.lerp(isH ? high : orig, f);
  });

  // 7) Tooltip & audio/melody
  if (hovered) {
    // position
    const proj = hovered.position.clone().project(camera);
    tooltip.style.left = `${((proj.x + 1) / 2) * innerWidth}px`;
    tooltip.style.top = `${((-proj.y + 1) / 2) * innerHeight}px`;
    tooltip.innerHTML = `
      <div class="tooltip-content">
        <h2>${hovered.userData.name}</h2>
        <p>${hovered.userData.description}</p>
      </div>`;
    tooltip.style.opacity = '1';

    if (hovered !== lastHovered) {
      if (lastHovered && lastHovered.userData.audio) {
        fadeOutAudio(lastHovered.userData.audio);
      }

      if (currentCategory === 'generative' && hovered.userData.melodySynth) {
        // play next generative note
        const synth = hovered.userData.melodySynth;
        const notes = hovered.userData.melodyNotes;
        const idx = hovered.userData.melodyIndex % notes.length;
        synth.triggerAttackRelease(notes[idx], '8n');
        hovered.userData.melodyIndex++;
      } else if (hovered.userData.audio) {
        hovered.userData.audio.pause();
        hovered.userData.audio.currentTime = 0;
        fadeInAudio(hovered.userData.audio);
      }

      lastHovered = hovered;
    }
  } else {
    tooltip.style.opacity = '0';
    if (lastHovered && lastHovered.userData.audio) {
      fadeOutAudio(lastHovered.userData.audio);
    }
    lastHovered = null;
  }

  // 8) Render
  composer.render(delta);
}

init();
animate();
