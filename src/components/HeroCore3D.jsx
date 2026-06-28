import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCore3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Intersecting Cube Models
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const material = new THREE.LineBasicMaterial({ color: 0x40D1C0, transparent: true, opacity: 0.8, linewidth: 15 });
    
    const cube1 = new THREE.LineSegments(wireframe, material);
    const cube2 = new THREE.LineSegments(wireframe, material);
    const cube3 = new THREE.LineSegments(wireframe, material);
    
    // Offset initial rotations to create intersection pattern
    cube2.rotation.x = Math.PI / 4;
    cube2.rotation.z = Math.PI / 4;
    
    cube3.rotation.y = Math.PI / 4;
    cube3.rotation.z = Math.PI / 4;

    group.add(cube1, cube2, cube3);

    // Star Particles
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 800;
    const posArray = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 25; 
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x40D1C0,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const starParticles = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starParticles);

    camera.position.z = 8;

    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;

    const handleMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 0.5;
      targetY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    let animationId;
    function animate() {
      animationId = requestAnimationFrame(animate);

      // Base rotation
      group.rotation.y += 0.005;
      group.rotation.x += 0.002;

      // Independent intersecting cube rotations
      cube2.rotation.x += 0.002;
      cube2.rotation.y += 0.001;
      
      cube3.rotation.y -= 0.0015;
      cube3.rotation.z += 0.002;

      // Stars rotation
      starParticles.rotation.y -= 0.0015;
      starParticles.rotation.x -= 0.0005;

      // Mouse interaction
      group.rotation.y += (targetX - group.rotation.y) * 0.05;
      group.rotation.x += (targetY - group.rotation.x) * 0.05;
      
      starParticles.rotation.y += (targetX - starParticles.rotation.y) * 0.02;
      starParticles.rotation.x += (targetY - starParticles.rotation.x) * 0.02;

      // Scroll interaction
      // Scales down as you scroll down
      const scale = Math.max(0.2, 1 - scrollY * 0.001);
      group.scale.set(scale, scale, scale);

      // Additional rotation based on scroll
      group.rotation.y += scrollY * 0.0001;

      renderer.render(scene, camera);
    }

    const handleResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      ref={containerRef}
    />
  );
}
