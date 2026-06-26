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

    const geometry = new THREE.TorusKnotGeometry(2, 0.3, 100, 16);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const material = new THREE.LineBasicMaterial({ color: 0x40D1C0, transparent: true, opacity: 0.6 });
    const object = new THREE.LineSegments(wireframe, material);
    group.add(object);

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
      
      // Mouse interaction
      group.rotation.y += (targetX - group.rotation.y) * 0.05;
      group.rotation.x += (targetY - group.rotation.x) * 0.05;

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
