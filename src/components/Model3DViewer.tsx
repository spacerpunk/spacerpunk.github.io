// src/components/Model3DViewer.tsx
// -----------------------------------------------------------------------------
// Lightweight, dependency-free (vanilla three.js) 3D viewer for POLVO LAB
// "pieces". Renders an on-brand placeholder mesh you can orbit/drag. Swap the
// builders for real glTF models later (loader hook noted below).
//
//   <Model3DViewer variant="rally-tower" label="XR Nav Tower" />
//
// Variants:
//   rally-tower  — the navigation tower assembly (pure geometry)
//   tank-livery  — a fuel tank wearing a canvas-generated custom livery
//   brand-badge  — a metal medallion stamped with the POLVO wordmark
// -----------------------------------------------------------------------------
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export type ModelVariant = 'rally-tower' | 'tank-livery' | 'brand-badge';

interface Model3DViewerProps {
  variant: ModelVariant;
  /** Small label shown in the corner of the viewport. */
  label?: string;
  /** Fallback image if WebGL is unavailable. */
  poster?: string;
  className?: string;
}

const RED = 0xd92906;

/* -------------------------------------------------------------------------- */
/* Canvas texture helpers                                                     */
/* -------------------------------------------------------------------------- */

function makeLiveryTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 1024;
  c.height = 512;
  const x = c.getContext('2d')!;
  // base
  x.fillStyle = '#141414';
  x.fillRect(0, 0, c.width, c.height);
  // diagonal red stripes
  x.save();
  x.translate(c.width * 0.55, 0);
  x.rotate((18 * Math.PI) / 180);
  x.fillStyle = '#d92906';
  x.fillRect(-120, -200, 90, 900);
  x.globalAlpha = 0.6;
  x.fillRect(60, -200, 50, 900);
  x.restore();
  // faint grid
  x.strokeStyle = 'rgba(255,255,255,0.06)';
  x.lineWidth = 2;
  for (let i = 0; i < c.width; i += 64) {
    x.beginPath();
    x.moveTo(i, 0);
    x.lineTo(i, c.height);
    x.stroke();
  }
  // number
  x.fillStyle = '#f5f5f4';
  x.font = 'bold 240px monospace';
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  x.fillText('07', c.width * 0.5, c.height * 0.5);
  // AI badge
  x.strokeStyle = '#d92906';
  x.lineWidth = 6;
  x.strokeRect(60, 60, 150, 90);
  x.fillStyle = '#d92906';
  x.font = 'bold 64px monospace';
  x.fillText('AI', 135, 108);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function makeBadgeTexture(): THREE.CanvasTexture {
  const s = 1024;
  const c = document.createElement('canvas');
  c.width = s;
  c.height = s;
  const x = c.getContext('2d')!;
  const cx = s / 2;
  x.fillStyle = '#161514';
  x.fillRect(0, 0, s, s);
  // outer ring
  x.strokeStyle = '#f5f5f4';
  x.lineWidth = 10;
  x.beginPath();
  x.arc(cx, cx, s * 0.44, 0, Math.PI * 2);
  x.stroke();
  x.strokeStyle = '#d92906';
  x.lineWidth = 6;
  x.beginPath();
  x.arc(cx, cx, s * 0.40, 0, Math.PI * 2);
  x.stroke();
  // mountain / dust motif
  x.strokeStyle = '#d92906';
  x.lineWidth = 14;
  x.beginPath();
  x.moveTo(cx - 170, cx - 30);
  x.lineTo(cx - 70, cx - 150);
  x.lineTo(cx, cx - 70);
  x.lineTo(cx + 80, cx - 170);
  x.lineTo(cx + 180, cx - 30);
  x.stroke();
  x.strokeStyle = 'rgba(245,245,244,0.5)';
  x.lineWidth = 6;
  x.beginPath();
  x.moveTo(cx - 190, cx - 30);
  x.lineTo(cx + 190, cx - 30);
  x.stroke();
  // wordmark
  x.fillStyle = '#f5f5f4';
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  x.font = 'bold 150px monospace';
  x.fillText('POLVO', cx, cx + 90);
  x.fillStyle = '#d92906';
  x.font = 'bold 60px monospace';
  x.fillText('L A B', cx, cx + 190);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  tex.center.set(0.5, 0.5);
  return tex;
}

/* -------------------------------------------------------------------------- */
/* Piece builders                                                             */
/* -------------------------------------------------------------------------- */

function buildRallyTower(): THREE.Group {
  const g = new THREE.Group();
  const dark = new THREE.MeshStandardMaterial({
    color: 0x2c2c2c,
    metalness: 0.5,
    roughness: 0.45,
  });
  const mid = new THREE.MeshStandardMaterial({
    color: 0x8a8a8a,
    metalness: 0.6,
    roughness: 0.4,
  });
  const red = new THREE.MeshStandardMaterial({
    color: RED,
    metalness: 0.35,
    roughness: 0.35,
    emissive: 0x3a0a02,
    emissiveIntensity: 0.5,
  });
  const screen = new THREE.MeshStandardMaterial({
    color: 0x0a0a0a,
    metalness: 0.2,
    roughness: 0.2,
  });
  const white = new THREE.MeshStandardMaterial({
    color: 0xf2f2f0,
    metalness: 0.2,
    roughness: 0.6,
  });

  // handlebar
  const bar = new THREE.Mesh(
    new THREE.CylinderGeometry(0.1, 0.1, 2.6, 24),
    dark,
  );
  bar.rotation.z = Math.PI / 2;
  bar.position.set(0, -1.35, 0.2);
  g.add(bar);
  // grips
  [-1.3, 1.3].forEach((gx) => {
    const grip = new THREE.Mesh(
      new THREE.CylinderGeometry(0.13, 0.13, 0.45, 20),
      red,
    );
    grip.rotation.z = Math.PI / 2;
    grip.position.set(gx, -1.35, 0.2);
    g.add(grip);
  });
  // struts
  [-0.4, 0.4].forEach((sx) => {
    const strut = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.06, 1.1, 16),
      mid,
    );
    strut.position.set(sx, -0.85, 0.1);
    g.add(strut);
  });
  // roadbook housing
  const housing = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.85, 0.38), mid);
  housing.position.set(0, -0.1, 0);
  g.add(housing);
  // roadbook screen
  const face = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.62, 0.04), screen);
  face.position.set(0, -0.1, 0.2);
  g.add(face);
  // scroll knobs
  [-0.86, 0.86].forEach((kx) => {
    const knob = new THREE.Mesh(
      new THREE.CylinderGeometry(0.14, 0.14, 0.22, 20),
      dark,
    );
    knob.rotation.z = Math.PI / 2;
    knob.position.set(kx, -0.1, 0.08);
    g.add(knob);
  });
  // gauge
  const gauge = new THREE.Mesh(
    new THREE.CylinderGeometry(0.34, 0.34, 0.16, 32),
    mid,
  );
  gauge.rotation.x = Math.PI / 2;
  gauge.position.set(-0.45, 0.7, 0.12);
  g.add(gauge);
  const gaugeFace = new THREE.Mesh(
    new THREE.CylinderGeometry(0.26, 0.26, 0.04, 32),
    red,
  );
  gaugeFace.rotation.x = Math.PI / 2;
  gaugeFace.position.set(-0.45, 0.7, 0.22);
  g.add(gaugeFace);
  // GPS
  const gps = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.46, 0.14), screen);
  gps.position.set(0.5, 0.72, 0.12);
  g.add(gps);
  const gpsFrame = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.52, 0.1), dark);
  gpsFrame.position.set(0.5, 0.72, 0.06);
  g.add(gpsFrame);
  // number plate
  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.5, 0.05), white);
  plate.position.set(0, -0.75, 0.24);
  g.add(plate);

  return g;
}

function buildTankLivery(): THREE.Group {
  const g = new THREE.Group();
  const tex = makeLiveryTexture();
  const body = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.85, 1.7, 12, 32),
    new THREE.MeshStandardMaterial({
      map: tex,
      metalness: 0.25,
      roughness: 0.4,
    }),
  );
  body.rotation.z = Math.PI / 2;
  body.scale.set(1, 1, 0.72); // flatten slightly like a tank
  g.add(body);
  // filler cap
  const cap = new THREE.Mesh(
    new THREE.CylinderGeometry(0.22, 0.22, 0.12, 24),
    new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.7,
      roughness: 0.3,
    }),
  );
  cap.position.set(-0.55, 0.62, 0);
  g.add(cap);
  const capRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.24, 0.03, 12, 32),
    new THREE.MeshStandardMaterial({ color: RED, metalness: 0.4, roughness: 0.3 }),
  );
  capRing.rotation.x = Math.PI / 2;
  capRing.position.set(-0.55, 0.6, 0);
  g.add(capRing);
  return g;
}

function buildBrandBadge(): THREE.Group {
  const g = new THREE.Group();
  const tex = makeBadgeTexture();
  const side = new THREE.MeshStandardMaterial({
    color: 0x3a3a3a,
    metalness: 0.8,
    roughness: 0.35,
  });
  const faceMat = new THREE.MeshStandardMaterial({
    map: tex,
    metalness: 0.45,
    roughness: 0.5,
  });
  const back = new THREE.MeshStandardMaterial({
    color: 0x222222,
    metalness: 0.7,
    roughness: 0.4,
  });
  // Cylinder material groups: [side, top, bottom]
  const coin = new THREE.Mesh(
    new THREE.CylinderGeometry(1.3, 1.3, 0.22, 64),
    [side, faceMat, back],
  );
  coin.rotation.x = Math.PI / 2; // face the camera
  g.add(coin);
  // beveled rim
  const rim = new THREE.Mesh(
    new THREE.TorusGeometry(1.3, 0.06, 16, 80),
    new THREE.MeshStandardMaterial({ color: RED, metalness: 0.5, roughness: 0.3 }),
  );
  g.add(rim);
  return g;
}

function buildPiece(variant: ModelVariant): THREE.Group {
  switch (variant) {
    case 'tank-livery':
      return buildTankLivery();
    case 'brand-badge':
      return buildBrandBadge();
    case 'rally-tower':
    default:
      return buildRallyTower();
  }
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function Model3DViewer({
  variant,
  label,
  poster,
  className = '',
}: Model3DViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      setFailed(true);
      return;
    }

    const width = mount.clientWidth || 640;
    const height = mount.clientHeight || 420;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.touchAction = 'pan-y';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(3.0, 1.7, 3.7);

    // Lights
    scene.add(new THREE.HemisphereLight(0xbfc6cf, 0x161616, 0.9));
    const key = new THREE.DirectionalLight(0xffffff, 1.25);
    key.position.set(4, 6, 4);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.4);
    fill.position.set(-5, 2, -3);
    scene.add(fill);
    const rim = new THREE.PointLight(RED, 12, 20, 2);
    rim.position.set(-2.5, 1.2, 3.5);
    scene.add(rim);

    // Piece — normalized to fit and centered
    const piece = buildPiece(variant);
    const box = new THREE.Box3().setFromObject(piece);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    piece.position.sub(center);
    const pivot = new THREE.Group();
    pivot.add(piece);
    pivot.scale.setScalar(2.4 / maxDim);
    scene.add(pivot);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = false;
    controls.minDistance = 2.6;
    controls.maxDistance = 8;
    controls.maxPolarAngle = Math.PI * 0.9;
    controls.target.set(0, 0, 0);
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    controls.autoRotate = !reduceMotion;
    controls.autoRotateSpeed = 1.1;

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      controls.dispose();
      scene.traverse((obj) => {
        const m = obj as THREE.Mesh;
        if (m.geometry) m.geometry.dispose();
        const mat = m.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((mm) => mm.dispose());
        else if (mat) mat.dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [variant]);

  if (failed) {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-sm border border-gray-800 bg-gray-900 ${className}`}
      >
        {poster ? (
          <img src={poster} alt={label ?? '3D preview'} className="w-full h-auto" />
        ) : (
          <div className="aspect-video flex items-center justify-center text-xs font-mono text-gray-500">
            3D preview unavailable
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-sm border border-gray-800 bg-gradient-to-b from-[#0d0d0f] to-black ${className}`}
    >
      <div ref={mountRef} className="h-[320px] md:h-[440px] w-full" />
      {label && (
        <span className="pointer-events-none absolute top-3 left-3 text-[10px] font-mono tracking-widest uppercase text-white bg-nasared px-2 py-1">
          {label}
        </span>
      )}
      <span className="pointer-events-none absolute bottom-3 right-3 text-[10px] font-mono tracking-widest uppercase text-gray-400 border border-gray-700 bg-black/60 px-2 py-1">
        drag · rotate
      </span>
    </div>
  );
}
