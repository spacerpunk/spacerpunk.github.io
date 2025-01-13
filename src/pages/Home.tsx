// src/ShaderCanvas.tsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SPCRPNK: React.FC = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });

        if (mountRef.current) {
            renderer.setSize(window.innerWidth, window.innerHeight);
            mountRef.current.appendChild(renderer.domElement);
        }

        // Vertex Shader
        const vertexShader = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1.0);
            }
        `;

        // Fragment Shader
        const fragmentShader = `
            precision mediump float;
            varying vec2 vUv;

            void main() {
                vec2 uv = vUv * 2.0 - 1.0; // Scale to [-1, 1]
                float a = 0.25; // Amplitude
                float frequency = 10.0; // Frequency of the wave
                float color = sin(uv.x * frequency + a) * 0.5 + 0.5; // Generate color
                vec3 finalColor = vec3(color, 0.5, 0.5); // Create color with red and blue
                gl_FragColor = vec4(finalColor, 1.0);
            }
        `;

        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
        });
        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);

        camera.position.z = 1;

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} />;
};

export default SPCRPNK;