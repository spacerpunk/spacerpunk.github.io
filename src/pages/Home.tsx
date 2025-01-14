// src/pages/Home.tsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleGrid = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    // Particle setup
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    
    const positions = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);
    
    // Create uniform grid pattern
    const gridSize = 10; // 10x10x10 grid
    const spacing = 4; // Space between particles
    let index = 0;
    
    for(let x = 0; x < gridSize; x++) {
      for(let y = 0; y < gridSize; y++) {
        for(let z = 0; z < gridSize; z++) {
          const i3 = index * 3;
          
          // Center the grid
          positions[i3] = (x - gridSize/2) * spacing;
          positions[i3 + 1] = (y - gridSize/2) * spacing;
          positions[i3 + 2] = (z - gridSize/2) * spacing;
          
          // Store initial positions
          initialPositions[i3] = positions[i3];
          initialPositions[i3 + 1] = positions[i3 + 1];
          initialPositions[i3 + 2] = positions[i3 + 2];
          
          index++;
        }
      }
    }
    
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.2,
      transparent: true,
      opacity: 0.8
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.001;

      // Individual particle movement
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for(let i = 0; i < particleCount * 3; i += 3) {
        // Use particle's position in grid to create varied movement
        const xOffset = Math.sin(time + positions[i] * 0.1) * 0.3;
        const yOffset = Math.cos(time + positions[i + 1] * 0.1) * 0.3;
        const zOffset = Math.sin(time + positions[i + 2] * 0.1) * 0.3;

        positions[i] = initialPositions[i] + xOffset;
        positions[i + 1] = initialPositions[i + 1] + yOffset;
        positions[i + 2] = initialPositions[i + 2] + zOffset;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
          };
      
          window.addEventListener('resize', handleResize);
      
          // Add mouse interaction
          const mouse = new THREE.Vector2();
          const handleMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            
            // Subtle camera movement following mouse
            camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
            camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);
          };
      
          window.addEventListener('mousemove', handleMouseMove);
      
          // Cleanup
          return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            mountRef.current?.removeChild(renderer.domElement);
            renderer.dispose();
          };
        }, []);
      
        return <div ref={mountRef} className="fixed top-0 left-0 w-screen h-screen -z-10" />;
      };
      
      const Home = () => {
        return (
          <div className="relative min-h-screen">
            <ParticleGrid />
            <div className="relative z-10">
              {/* Your content goes here */}
            </div>
          </div>
        );
      };
      
      export default Home;